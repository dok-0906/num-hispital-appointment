const Doctor = require("../model/doctor");

exports.getDoctors = async (req, res, next) => {
  try {
    const doctor = await Doctor.find();
    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}
exports.getDoctor = async (req, res, next) => {

  try {
    const doctor = await Doctor.findById(req.params.id);
    if(doctor){
      res.status(200).json({
        success: true,
        data: doctor,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + "Ийм id-тай эмч алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.createDoctor = async (req, res, next) => {
    try {
      const doctor = await Doctor.create(req.body);
      res.status(200).json({
        success: true,
        data: doctor,
      });
    } catch(err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
}

exports.updateDoctor = async (req, res, next) => {

  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if(doctor){
      res.status(200).json({
        success: true,
        data: doctor,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + " Ийм id-тай эмч алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.deleteDoctor = async (req, res, next) => {

  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if(doctor){
      res.status(200).json({
        success: true,
        data: doctor,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + "Ийм id-тай эмч алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

