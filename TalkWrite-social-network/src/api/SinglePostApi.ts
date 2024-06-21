export const SinglePostApi = async (id) => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
    try {
        const jwt = localStorage.getItem('jwt');
        if (!jwt) {
            throw new Error('JWT token not found');
        }

        const response = await fetch(`${baseUrl}/posts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log('Fetch error: ', error);
        throw error;
    }
}


//fetch(`${baseUrl}/posts/${id}` za single post