//@desc  GET all bootcamps
//@route GET /api/v1/bootcamps
//access PUBLIC
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, message: "show all bootcamps"});
};

//@desc  GET all bootcamp
//@route GET /api/v1/bootcamps/:id
//access PUBLIC
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "show  bootcamp"});
};

//@desc  CREATE all bootcamp
//@route POST /api/v1/bootcamps/:id
//access PUBLIC
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "create  bootcamp"});
};

//@desc  Upate all bootcamp
//@route PUT /api/v1/bootcamps/:id
//access PUBLIC
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "update  bootcamp"});
};

//@desc  delete all bootcamp
//@route DELETE /api/v1/bootcamps/:id
//access PUBLIC
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: "delete  bootcamp"});
};