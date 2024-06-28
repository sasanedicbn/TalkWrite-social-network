

export default async function deletePostApi(postId: string) {
const baseUrl = 'https://api.hr.constel.co/api/v1';
  try {
    const jwt = localStorage.getItem('jwt');
    console.log('trebalo bi da je id za delete',postId)
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
    console.log('status iz delete', status)

    return status;
  } catch (error) {
    console.error(error);
    throw new Error('Could not delete the post.');
  }
}