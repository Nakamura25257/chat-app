import Link from 'next/link';
import styles from './styles.module.css';
import {zodResolver} from '@hookform/resolvers/zod';
import {registerFormSchema, RegisterFormSchemaType} from '@/types/resolver';
import {useForm} from 'react-hook-form';

type Inputs = {
  name: string;
  email: String;
  password: string;
  passwordConfirmation: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (data: Inputs) => {
    console.log('data', data);
  };

  return (
    <form className={styles.registerWrapper} onSubmit={handleSubmit(onSubmit)}>
      <h1>register</h1>

      <div className={styles.inputWrapper}>
        <label htmlFor="">name</label>
        <input type="text" {...register('name')} />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
        )}
      </div>

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

      <div className={styles.inputWrapper}>
        <label htmlFor="">password (confirmation)</label>
        <input type="text" {...register('passwordConfirmation')} />
        {errors.passwordConfirmation && (
          <p className={styles.errorMessage}>
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>

      <button>register</button>
      <Link href={'/login'} className={styles.link}>
        Do not have an account? Register from here
      </Link>
    </form>
  );
}
