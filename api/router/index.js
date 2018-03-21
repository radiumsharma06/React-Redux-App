const express = require('express');
const router=express.Router();
const axios = require('axios');

router.get('/get-from-server',(req,res) => {
  return (
    axios.get(gameData)
      .then(response => res.json(response.data))
      .catch(err => console.log('Error in request'))
  )
});

router.post('/post-to-server',(req,res) => {
  console.log(req.body);
});

module.exports = router;
