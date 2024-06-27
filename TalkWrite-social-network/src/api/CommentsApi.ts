
export const CommentsApi = async (id) => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
    const jwt = localStorage.getItem('jwt')

    try {
        const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json()
        console.log('cccccccccccc',data)
        const {comments} = data
        console.log('IZ API Comment', comments)
        return comments
        
       
    } catch (error) {
        console.error('Login error:', error);
        
    }
};
