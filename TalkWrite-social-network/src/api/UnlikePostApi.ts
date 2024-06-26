import { toast } from "react-toastify";


export default async function UnlikePostApi(id: string) {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
  try {
    const jwt = localStorage.getItem('jwt');
    const response = await fetch(`${baseUrl}/posts/${id}/like`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
      },
    });

    if (response.status === 400) {
      const { error } = await response.json();

      toast.error(error.message);
      return;
    }

    await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Could not unlike post.');
  }
}