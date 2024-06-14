import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

type FormFields = z.infer<typeof schema>;

const LogIn = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
    
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Something is not okay",
      });
    }
  };

  return (
    <div className="logIn-container">
      <h1>TalkWrite</h1>
      <form className="logIn-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input {...register('email')} type="email" id="email" name="email" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input {...register('password')} type="password" id="password" name="password" />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        {errors.root && <p className="error">{errors.root.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;
