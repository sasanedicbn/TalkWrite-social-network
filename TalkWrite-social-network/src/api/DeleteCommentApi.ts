// src/api/DeleteCommentApi.js
export default async function deleteCommentApi(postId,commentId) {
  const baseUrl = 'https://api.hr.constel.co/api/v1';
  try {
    const jwt = localStorage.getItem('jwt');
    const response = await fetch( `${baseUrl}/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });

    if (response.status == 400) {
      return;
    }

    const { status } = response;

    return status;
  } catch (error) {
    console.error(error);
    throw new Error('Could not delete the comment.');
  }
}
