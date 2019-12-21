const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');
//@desc  GET all bootcamps
//@route GET /api/v1/bootcamps
//access PUBLIC
exports.getBootcamps = async (req, res, next) => {
    try{
        const bootcamps = await Bootcamp.find(); 
        return next(new ErrorResponse("Bootcamp not found with id of ${req.params.id}", 404));
    }catch(err){
        next(err);
    }
    
};

//@desc  GET single bootcamp
//@route GET /api/v1/bootcamps/:id
//access PUBLIC
exports.getBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return next(new ErrorResponse("Bootcamp not found with id of ${req.params.id}", 404));
        }
        res.status(200).json({success: true, data: bootcamp})
    }catch(err){
        next(err);
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
        next(err);
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
            return next(new ErrorResponse("Bootcamp not found with id of ${req.params.id}", 404));
        }
        res.status(200).json({success: true, message: "update  bootcamp", data: bootcamp});
    }catch(err){
        next(err);
    }
};

//@desc  delete all bootcamp
//@route DELETE /api/v1/bootcamps/:id
//access PUBLIC
exports.deleteBootcamp = async(req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp){
            return next(new ErrorResponse("Bootcamp not found with id of ${req.params.id}", 404));
        }
        res.status(200).json({success: true, message: "bootcamp deleted", data: {}});
    }catch(err){
        next(err);
    }
};