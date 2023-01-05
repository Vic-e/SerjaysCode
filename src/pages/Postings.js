import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function Postings() {

  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchPostings = async() => {
        const allPosts = await fetch('/posting')
        const data = await allPosts.json()
        setPosts(data)
    }
    fetchPostings()
  }, []);

// ========= UPDATE ===========

  const updatePost = (post) => {
    setUpdatedPost(post)
    handleShow()
  }
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setUpdatedPost((prev)=>{
        return {
            ...prev,
            [name]: value
        }
    })
  }

  const saveUpdatedPost = () => {
    axios.put(`/posting/update/${updatedPost._id}`, updatedPost) 
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err))

    handleClose();
        window.location.reload();
    
}


return (
    <div>
      <h1 className="titleOnPosting">Postings:</h1>

      {/* =============   Modal for the Update Custom order ============= */}
      <div className="update">
      <Modal className="editArea" show={show} onHide={handleClose} animation={true}>
        <Modal.Header >
          <h1>Edit your sitter request:</h1>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <h3>Parent Name:</h3>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="Parent Name"
                name="parentName"
                value={updatedPost.parentName ? updatedPost.parentName : ""}
                onChange={handleChange}
                required
              />
              <h3>Parent Phone Number:</h3>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="Phone Number"
                name="contactNumber"
                value={updatedPost.contactNumber ? updatedPost.contactNumber : ""}
                onChange={handleChange}
                required
              />
              <h3>Parent Email Address:</h3>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="Email"
                name="contactEmail"
                type="email"
                value={updatedPost.contactEmail ? updatedPost.contactEmail : ""}
                onChange={handleChange}
                required
              />
              <h3>Number of Children:</h3>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="Number of children"
                name="numberOfChildren"
                type="number"
                value={updatedPost.numberOfChildren ? updatedPost.numberOfChildren : ""}
                onChange={handleChange}
                required
              />
              <h3>Age of Children:</h3>
                   <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="Age of children"
                name="ageOfChildren"
                value={updatedPost.ageOfChildren ? updatedPost.ageOfChildren : ""}
                onChange={handleChange}
                required
              />
              <h3>Date service needed:</h3>
                   <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="Date"
                name="date"
                type={"datetime-local"}
                value={updatedPost.date ? updatedPost.date : ""}
                onChange={handleChange}
                required
              />
              <br></br>
              <small>*Date reamins the same unless changed*</small>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
 

  
{/* =========== Show postings ============== */}

<div>
    
        {posts.map((post)=>(
            <div className="postingBox">
            <h1  className="postName">{post.parentName}</h1>
            <h4>Sitter needed:</h4>
            <p>{moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <h4>Parent Number:</h4>
            <p>{post.contactNumber}</p>
            <h4>Parent Email:</h4>
            <p>{post.contactEmail}</p>
            <h4>Number of Children:</h4>
            <p>{post.numberOfChildren}</p>
            <h4>Age of Children:</h4>
            <p>{post.ageOfChildren}</p>
            <h2>{post.location}</h2>
            <div className="edit-delete">
            <button className="trash" onClick={()=>updatePost(post)}><img src="https://img.icons8.com/ios/35/FFFFFF/pencil--v1.png"/></button>
            <form action={`/posting/${post._id}?_method=DELETE`} method="POST">
            <button className="trash"><img src="https://img.icons8.com/ios/35/FFFFFF/delete--v1.png"/></button>
                </form>
                </div>
            </div>
        ))}
  
           
    </div>
</div>
)


}