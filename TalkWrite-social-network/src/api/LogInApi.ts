export const Login = async (data, navigate) => {
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
            const { error } = await response.json();
            if (response.status === 400 || response.status === 401) {
                return { status: 'error', message: error.message };
            }
        }

        const { token } = await response.json();
        localStorage.setItem('jwt', token);
        navigate('/home');
        return { status: 'success' };
    } catch (error) {
        console.error('Login error:', error);
        return { status: 'error', message: error.message || 'Something went wrong' };
    }
};
