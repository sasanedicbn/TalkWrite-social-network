import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../api/LogInApi';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

type FormFields = z.infer<typeof schema>;

const LogIn = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const result = await Login(data, navigate);
        console.log(result);
        if (result.status === 'error') {
            setErrorMessage(result.message);
        } else {
            navigate('/home');
        }
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
                {errorMessage && <p className="error-global">{errorMessage}</p>}
                <button type="submit" disabled={!isValid} className={!isValid ? 'disabled' : ''}>Submit</button>
            </form>
        </div>
    );
};

export default LogIn;

