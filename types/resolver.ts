import z from 'zod';

export const loginFormSchema = z.object({
  email: z.email().min(1, {message: 'Please enter your email'}),
  password: z.string().min(1, {message: 'Please enter your password'}),
});

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  name: z.string().min(1, {message: 'Please enter your name'}),
  email: z.email().min(1, {message: 'Please enter your emial'}),
  password: z.string().min(1, {message: 'Please enter your password'}),
  passwordConfirmation: z
    .string()
    .min(1, {message: 'Please enter your password again'}),
});

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;
