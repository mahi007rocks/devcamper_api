const Bootcamp = require('../models/Bootcamp');
//@desc  GET all bootcamps
//@route GET /api/v1/bootcamps
//access PUBLIC
exports.getBootcamps = async (req, res, next) => {
    try{
        const bootcamps = await Bootcamp.find(); 
        res.status(200).json({success: true,count: bootcamps.length, data: bootcamps});

    }catch(err){
        res.status(400).json({success: false, error: err});
    }
    
};

//@desc  GET single bootcamp
//@route GET /api/v1/bootcamps/:id
//access PUBLIC
exports.getBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success: false, message: 'Incorrect ID'});
        }
        res.status(200).json({success: true, data: bootcamp})
    }catch(err){
        res.status(400).json({success: false, error: "not found"});
    }
    
};

//@desc  CREATE all bootcamp
//@route POST /api/v1/bootcamps
//access PUBLIC
exports.createBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.create(req.body)
        res.status(200).json({
            success: true, 
            data: bootcamp,
            message: "Bootcamp created"
        });
    }catch(err){
        res.status(400).json({success: false, error: err});
    }
    
};

//@desc  Upate all bootcamp
//@route PUT /api/v1/bootcamps/:id
//access PUBLIC
exports.updateBootcamp = async(req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!bootcamp){
            return res.status(400).json({success: false, message: 'Cant update'});
        }
        
        res.status(200).json({success: true, message: "update  bootcamp", data: bootcamp});
    }catch(err){
        return res.status(400).json({success: false, message: 'Cant update', error: err});
    }
};

//@desc  delete all bootcamp
//@route DELETE /api/v1/bootcamps/:id
//access PUBLIC
exports.deleteBootcamp = async(req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp){
            return res.status(400).json({success: false, message: "cant't find record"});
        }
        
        res.status(200).json({success: true, message: "bootcamp deleted", data: {}});
    }catch(err){
        return res.status(400).json({success: false, message: 'Cant delete', error: err});
    }
};