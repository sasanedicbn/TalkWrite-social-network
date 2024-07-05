export const AddPostApi = async (payload: string) => {
    const baseUrl = 'https://api.hr.constel.co/api/v1';
    const jwt = localStorage.getItem('jwt');
  
    if (!jwt) return;
  
    const data = new FormData();
    data.append('text', payload);
  
    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + jwt,
        },
        body: data
      });
  
      if (response.status === 400) {
        // const { error } = await response.json();
        return;
      }
  
      const { post } = await response.json();
      return post;
    } catch (error) {
      console.error('Detalji greške:', error);
      throw new Error('Nije moguće kreirati post.');
    }
  };