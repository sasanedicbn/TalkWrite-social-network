

 export const UserPosts = async () => {
 const baseUrl = 'https://api.hr.constel.co/api/v1';
 const jwt = localStorage.getItem('jwt')

 try{
  const response = await fetch(`${baseUrl}/posts`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
    },
 })
 const data = await response.json()
 return data
 
 }catch(error){
  console.log(error)
 }
}