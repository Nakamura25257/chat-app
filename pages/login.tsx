import Link from 'next/link';
import styles from './styles.module.css';
import {useForm} from 'react-hook-form';
import {loginFormSchema, LoginFormSchemaType} from '@/types/resolver';
import {zodResolver} from '@hookform/resolvers/zod';

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: Inputs) => {
    console.log('data', data);
  };

  return (
    <form className={styles.loginWrapper} onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor="">email</label>
        <input type="text" {...register('email')} />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="">password</label>
        <input type="text" {...register('password')} />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Login</button>
      <Link href={'/register'} className={styles.link}>
        Do not have an account? Register from here
      </Link>
    </form>
  );
}
