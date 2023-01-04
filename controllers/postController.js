const express = require("express")
const router = express.Router()
const Post = require("../models/postModel")



// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show




//INDEX
router.get("/", (req, res) => {
  // Query model to return all fruits
  Post.find({}, (error, allPosts) => {
    if (!error) {
      res.status(200).json(allPosts)
    } else {
      res.status(400).send(error)
    }
  })
})



//DELETE
router.delete("/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect("/postings")
  })
})

//UPDATE
router.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      parentName: req.body.parentName,
      contactNumber: req.body.contactNumber,
      contactEmail: req.body.contactEmail,
      numberOfChildren: req.body.numberOfChildren,
      ageOfChildren: req.body.ageOfChildren,
      date: req.body.date,
      location: req.body.location
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});


// CREATE
router.post("/", (req, res) => {
 console.log(req.body)
Post.create(req.body, (error, createdPosts) => {
    if (!error) {
      // redirects after creating Post, to the Index page
      res.status(200).redirect("/postings")
    } else {
      res.status(400).send(error)
    }
  })
})







module.exports = router