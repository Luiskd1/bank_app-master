import z from 'zod'


export const schemaRegister = z.object({

  firstname: z.string({ required_error: 'Firstname is required' })
    .min(1, 'Firstname is required'),

  lastname: z.string({ required_error: 'Lastname is required' })
    .min(1, 'Lastname is required'),

  cedula: z.string({ required_error: 'Cedula is required' })
    .min(8, 'Cedula is required'),


  email: z.string({ required_error: 'Email is required' })
    .email("email, invalid")
    .min(1, 'Email is required'),

  password: z.string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),

  passwordConfirm: z.string({
    required_error: 'Please confirm your password',
  }).min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',

});

export const schemaLogin = z.object({
  email: z.string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email or password'),
  password: z.string({ required_error: 'Password is required' }).min(
    1,
    'Password is required'
  ),
});


export type userLogin = z.infer<typeof schemaLogin>
export type userRegister = z.infer<typeof schemaRegister>