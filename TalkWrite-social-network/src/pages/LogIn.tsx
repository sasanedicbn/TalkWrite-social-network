import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../api/LogInApi';
import { useDispatch, useSelector } from 'react-redux';
import { showSpinner, hideSpinner } from '../store/Globall/SpinnerSlice'; 
import { RootState } from '../store/store'; 
import Spinner from '../store/Globall/Spinner';
import { FormFieldsLogIn, schemaLogIn } from '../validation/validation';

const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { isValid } } = useForm<FormFieldsLogIn>({
    resolver: zodResolver(schemaLogIn),
    mode: 'onChange'
  });

  const isSpinnerVisible = useSelector((state: RootState) => state.spinner.loading);
// spinner popravit setSpinner
  const onSubmit: SubmitHandler<FormFieldsLogIn> = async (data) => {
    dispatch(showSpinner()); 
    try {
      const result = await Login(data);
      console.log(result);
      if (result.status === 'error') {
        setErrorMessage(result.message);
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred during login.');
    } finally {
      dispatch(hideSpinner()); 
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
        <button type="submit" disabled={!isValid || isSpinnerVisible} className={!isValid || isSpinnerVisible ? 'disabled' : ''}>Submit</button>
        {isSpinnerVisible && <Spinner />} 
      </form>
    </div>
  );
};

export default LogIn;
