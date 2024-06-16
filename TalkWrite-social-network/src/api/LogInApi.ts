

export const handleLogin = async (data, navigate, setError) => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';

    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(data, navigate, setError)
        if (!response.ok) {
            const errorData = await response.json();
            let errorMessage = 'Login failed';

            if (response.status === 400) {
                console.log(response.status)
                errorMessage = errorData.message || 'Incorect password';
            } else if (response.status === 401) {
                errorMessage = 'Unauthorized';
            } else if (errorData.message) {
                errorMessage = errorData.message;
            }

            throw new Error(errorMessage);
        }

        const {token} = await response.json();
        navigate('/home');
        console.log(token)
        localStorage.setItem('jwt', token)
    } catch (error) {
        console.error('Login error:', error);
        setError("root", {
            type: "manual",
            message: error.message || "Something went wrong",
        });
    }
};
