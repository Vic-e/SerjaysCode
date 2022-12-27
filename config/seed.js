require('dotenv').config();
require('./database');
const Posts = require('../models/postModel') ;


(async function() {

  const posts = await Posts.create(
    [
      {
        parentName: "Serjay Parks",
        contactNumber: "565-555-2451",
        contactEmail: "sp@email.com",
        numberOfChildren: "2",
        ageOfChildren: "1, 5",
        date: "2023-01-10T21:30",
        location: "NYC",
      }
    ],
    // (err, data) => {
    //   res.redirect("/");
    // }
  );
console.log(posts)
})();