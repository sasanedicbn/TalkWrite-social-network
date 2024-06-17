

export const handleLogin = async (data, navigate) => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';

    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
      
        if (!response.ok) {
            const {status, error} = await response.json();
            // let errorMessage = 'Login failed';

            if (response.status === 400) {
                console.log(response.status)
                console.log(status,error)
              return {status,error}
        }
    }
        const {token} = await response.json();
        navigate('/home');
        console.log(token)
        localStorage.setItem('jwt', token)
    } catch (error) {
        console.error('Login error:', error);
    }
};
