

export default async function deletePost(postId: string) {
const baseUrl = 'https://api.hr.constel.co/api/v1';
  try {
    const jwt = localStorage.getItem('jwt');
    const response = await fetch(`${baseUrl}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });

    if (response.status == 400) {
      return;
    }

    await response.json();
    const { status } = response;

    return status;
  } catch (error) {
    console.error(error);
    throw new Error('Could not delete the post.');
  }
}