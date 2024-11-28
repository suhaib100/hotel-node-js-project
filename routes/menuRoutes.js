const express = require('express');
const MenuItem = require('../models/MenuItem');
const Person = require('../models/person');
const router = express.Router();




router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new MenuItem(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
});




router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data saved');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
});





router.get('/:tasteType', async (req, res) => {
    try {        
        const tasteType = req.params.tasteType;
        if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
            const response  = await MenuItem.find({taste : tasteType});
            if (response.length === 0) {
                return res.status(404).json({ message: 'data Not found', status: 404});
            }
            console.log("data fetched");
            res.status(200).json(response);
        } 
        else {
           res.status(404).json({ message: 'invalid taste type' , status: 404 });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
});




module.exports=router;