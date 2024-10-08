import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { singupInput, singinInput } from "@deygobinda/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    MY_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = singupInput.safeParse(body)
    if(!success){
      c.status(411);
      return c.json({
        message : "Input is not correct"
      })
    }

    const user = await prisma.user.create({
      data: {
        name : body.name,
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.MY_SECRET);

    return c.json({
      jwt: token,
    });
  } catch (e) {
    c.status(411);
    return c.json({ message: "Some this wend worng" });
  }
});

userRouter.post("/signin", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = singinInput.safeParse(body)
    if(!success){
      c.status(411);
      return c.json({
        message : "Input is not correct"
      })
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.MY_SECRET);
    return c.json({ jwt });
  } catch (err) {
    c.status(411);
    return c.json({ message: "Some this wend worng" });
  }
});
