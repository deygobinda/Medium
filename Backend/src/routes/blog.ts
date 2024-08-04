import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    MY_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use(async (c, next) => {
  try {
    const jwt = c.req.header("Authorization");
    if (!jwt) {
      c.status(401);
      return c.json({
        error: "Unauthorized",
      });
    }
    const token = jwt.split(" ")[1];
    const decode = (await verify(token, c.env.MY_SECRET)) as { id: string };
    if (!decode) {
      c.status(401);
      return c.json({
        error: "Unathorized",
      });
    }
    c.set("userId", decode.id);
    await next();
  } catch (e) {
    c.status(404);
    return c.json({ message: "You are not logged in" });
  }
});

blogRouter.post("/", async (c) => {
  try {
    const userId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (e) {
    c.status(404);
    return c.json({ message: "Some this wend worng" });
  }
});

blogRouter.put("/", async (c) => {
  try {
    const userId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    await prisma.post.update({
      where: {
        authorId: userId,
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.text("post udated");
  } catch (e) {
    c.status(404);
    return c.json({ message: "Some this wend worng" });
  }
});

// todo  : add pagition

blogRouter.get("/bulk", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const posts = await prisma.post.findMany();

    return c.json({ posts });
  } catch (e) {
    c.status(404);
    return c.json({ message: "Some this wend worng" });
  }
});

blogRouter.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return c.json({
      post,
    });
  } catch (error) {
    c.status(404);
    return c.json({ message: "Some this wend worng" });
  }
});
