import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";


export default function Postings() {

  const [posts, setPosts] = useState([]);
//   const [updatedPost, setUpdatedPost] = useState({});


  useEffect(() => {
    const fetchPostings = async() => {
        const allPosts = await fetch('/posting')
        const data = await allPosts.json()
        setPosts(data)
    }
    fetchPostings()
  }, []);


    // DELETE request using fetch with async/await
    // const deletePost = async() => {
    //     axios.delete('/delete/:id')
    //     .then(() => this.setState({ status: 'Delete successful' }));}



  if (!posts.length) return <h3>Loading...</h3>
  
return (
    <div>
    
        {posts.map((post)=>(
            <div className="postingBox">
            <h1>{post.parentName}</h1>
            <p>{moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p>{post.contactNumber}</p>
            <p>{post.contactEmail}</p>
            <p>{post.numberOfChildren}</p>
            <p>{post.ageOfChildren}</p>
            <p>{post.location}</p>
            <form action={`/posting/${post._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
            </div>
        ))}
            <h1>Hello</h1>
           
    </div>
)


}