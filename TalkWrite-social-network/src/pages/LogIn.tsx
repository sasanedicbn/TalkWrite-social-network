
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../api/LogInApi';

const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

type FormFields = z.infer<typeof schema>;

const LogIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await handleLogin(data, navigate, setError);
    };

    return (
        <div className="logIn-container">
            <h1>TalkWrite</h1>
            <form className="logIn-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input {...register('email')} type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input {...register('password')} type="password" id="password" name="password" />
                </div>
                {errors.root && <p className="error-global">{errors.root.message}</p>}
                <button type="submit" disabled={!isValid} className={!isValid ? 'disabled' : ''}>Submit</button>
            </form>
        </div>
    );
};

export default LogIn;
