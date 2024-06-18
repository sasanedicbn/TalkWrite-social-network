import { useDispatch } from "react-redux";
import { getPosts } from "../store/postsSlice";

// posts
 export const UserPosts = async () => {
 const baseUrl = 'https://api.hr.constel.co/api/v1';
 const jwt = localStorage.getItem('jwt')
 const dispatch = useDispatch()

 try{
  const response = await fetch(`${baseUrl}/posts`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + jwt,
    },
 })
 const data = await response.json()
 dispatch(getPosts(data))
 console.log(data)
 
 }catch(error){
  console.log(error)
 }
}