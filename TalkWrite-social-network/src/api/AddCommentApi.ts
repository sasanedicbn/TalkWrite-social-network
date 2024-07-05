export const AddCommentApi = async (id: string, newComment: { newCommentText: string })=> {
  const baseUrl = 'https://api.hr.constel.co/api/v1';
  const jwt = localStorage.getItem('jwt');

  if (!jwt) return;

  try {
    const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        text: newComment.newCommentText
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('RADUUUUU', data.comment);
    return data.comment;
  } catch (error) {
    console.error('Error:', error);
  }
};
