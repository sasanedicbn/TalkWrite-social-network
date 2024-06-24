import { getComments } from "../store/postsSlice";

export const AddCommentApi = async (id, dispatch,newCommentText) => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
    const jwt = localStorage.getItem('jwt')

    try {
        const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                text: newCommentText
              })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        if(response.ok) {
            console.log('RADUUUUU')
        }
        const data = await response.json()
        dispatch(getComments(data))
       
    } catch (error) {
        console.error('Login error:', error);
        
    }
};
