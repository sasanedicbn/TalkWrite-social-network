import { getSinglePost } from "../store/postsSlice";

export const SinglePostApi = async (id, dispatch) => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
    const jwt = localStorage.getItem('jwt');

    try {
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
        console.log('datafromAPI', data);
        dispatch(getSinglePost(data));
        // return data;
    } catch (error) {
        console.log('Fetch error: ', error);
        throw error;
    }
}
