const express = require('express');
const {FormData ,Blob}= require('formdata-node');
const axios = require('axios');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');

const storage = multer.memoryStorage(); // Store uploaded file in memory as Buffer
const upload = multer({ storage: storage});



router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const gender = req.body;
        const formData = new FormData();
        const fileBuffer = req.file.buffer;
        const newBlob = new Blob([fileBuffer],{type:req.file.mimetype});
        formData.append('file',newBlob,req.file.originalname)
        formData.append('gender',req.body.gender)
        // console.log(newBlob);
        // console.log(formData);
        const response = await axios.post('https://twolface-foodmodel.hf.space/predictBody', formData,{

            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })
    
        // Handle API response as needed
        console.log(response.data);
        res.send('File uploaded successfully to cloud API');
    } catch (error) {
        console.error('Error uploading file to cloud API:', error);
        res.status(500).send('Failed to upload file to cloud API');
    }
});

module.exports = router;
