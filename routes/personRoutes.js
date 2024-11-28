const express = require('express');
const Person = require('../models/person');
const router = express.Router();



router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data saved');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' });
    }
});



router.get('/:workType', async (req, res) => {
    try {        
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'writer'){
            const response  = await Person.find({work : workType});
            if (response.length === 0) {
                return res.status(404).json({ error: 'Not found' });
            }
            console.log("data fetched");
            res.status(200).json(response);
        } else {
           res.status(404).json({ error: 'invalid work type' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' });
    }
});



router.put('/:id' , async(req , res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const data = await Person.findByIdAndUpdate(personId,updatedPersonData, {
            new:true , 
            runValidators:true
        })
        if (!data) {
            return res.status(404).json({ message: 'data Not found' , status:404});
        }
        console.log("data updated");
        res.status(200).json( {data, status:200 , message:"data is updated" });        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' , status:500});
    }
})



//1


router.delete('/:id' , async(req , res) => {
    try {
        const personId = req.params.id;
        const data = await Person.findByIdAndDelete(personId)
        if (!data) {
            return res.status(404).json({ message: 'data Not found' , status:404});
        }
        console.log("data deleted suuccessfully");
        res.status(200).json( {data, status:200 , message:"data deleted suuccessfully" });        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' , status:500});
    }
})

module.exports = router;