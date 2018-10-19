const express = require('express');
const router=express.Router();
const axios = require('axios');

const modelUrl = 'https://three-d-node.herokuapp.com/models';

router.get('/models',(req,res) => {
  return (
    axios.get(modelUrl, {
      params:{
        name: req.query.name,
        paginationNumber: req.query.paginationNumber
      }
    })
      .then(response => res.json(response.data))
      .catch(err => console.log('Error in request'))
  )
});

module.exports = router;
