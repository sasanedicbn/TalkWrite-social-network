import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
    email: string,
    password: string,
}

const LogIn = () => {
  const {register, handleSubmit} = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }
  return (
    <div className="logIn-container" onSubmit={handleSubmit(onSubmit)}>
      <h1>TalkWrite</h1>
      <form className="logIn-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input {...register('email')} type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input {...register('password')} type="password" id="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;
