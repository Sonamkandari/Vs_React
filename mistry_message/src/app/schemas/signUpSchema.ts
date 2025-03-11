import {z}from 'zod'

 // check the validation of the user name and export the user name
 export const usernameValidation =z
 .string()
 .min(2," Username must be atleast 2 characters ")
 .max(20,"username must be no more than 20 characters")
 .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character ")

 // validating schemas
 export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:"password must be atleast of 6 character"})
 }) 