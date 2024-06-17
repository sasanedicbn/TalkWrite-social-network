export const UserApi = async () => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
    const jwt = localStorage.getItem('jwt')
    try {
        const response = await fetch(`${baseUrl}/accounts/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwt,
            },
        });
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error('Login error:', error);
        return { status: 'error', message: error.message || 'Something went wrong' };
    }
}