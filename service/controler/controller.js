const Service = require("../model/service");

exports.getServices = async (req, res, next) => {
  try {
    const service = await Service.find();
    res.status(200).json({
      success: true,
      data: service,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}
exports.getService = async (req, res, next) => {

  try {
    const service = await Service.findById(req.params.id);
    if(Service){
      res.status(200).json({
        success: true,
        data: service,
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

exports.createService = async (req, res, next) => {
    try {
      const service = await Service.create(req.body);
      res.status(200).json({
        success: true,
        data: service,
      });
    } catch(err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
}

exports.updateService = async (req, res, next) => {

  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if(service){
      res.status(200).json({
        success: true,
        data: service,
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

exports.deleteService = async (req, res, next) => {

  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if(service){
      res.status(200).json({
        success: true,
        data: service,
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

