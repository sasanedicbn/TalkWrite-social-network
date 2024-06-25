export default AddPostApi = async function(data, dispatch) {
    const baseUrl = 'https://api.hr.constel.co/api/v1'
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return;
  
    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + jwt,
        },
        body: data,
      });
  
    //   if (response.status == 400) {
    //     const { error } = await response.json();
  
    //   }
  
      const { post } = await response.json();
       console.log('newPost',post)
      return post;
    } catch (error) {
      console.error(error);
      throw new Error('Could not create post.');
    }
  }