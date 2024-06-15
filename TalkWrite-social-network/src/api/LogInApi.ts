

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

        if (!response.ok) {
            const errorData = await response.json();
            let errorMessage = 'Login failed';

            if (response.status === 400) {
                errorMessage = errorData.message || 'Bad request';
            } else if (response.status === 401) {
                errorMessage = 'Unauthorized';
            } else if (errorData.message) {
                errorMessage = errorData.message;
            }

            throw new Error(errorMessage);
        }

        const result = await response.json();
        navigate('/home');
        return result;
    } catch (error) {
        console.error('Login error:', error);
        setError("root", {
            type: "manual",
            message: error.message || "Something went wrong",
        });
    }
};
