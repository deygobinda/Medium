import z from "zod"


export const singupInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})
export const singinInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    
})

export const blogInput = z.object({
    title : z.string(),
    content : z.string()
})
export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
    id : z.string()
})


export type SignupInput = z.infer<typeof singupInput>
export type SigninInput = z.infer<typeof singinInput>
export type BlogInput = z.infer<typeof blogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>