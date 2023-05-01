const AvAppointment = require("../model/av_appointment");
const axios = require("axios");

exports.getisApp = async (req, res, next) => {
  try {
  const select = req.query.select;
  delete req.query.select;
  const avapointment = await AvAppointment.find(req.query, select);

    res.status(200).json({
      success: true,
      data: avapointment,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.getAvAppointments = async (req, res, next) => {
  try {
    const avapointment = await AvAppointment.find();
    res.status(200).json({
      success: true,
      data: avapointment,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}
exports.getAvAppointment = async (req, res, next) => {

  try {
    const avapointment = await AvAppointment.findById(req.params.id);
    if(avapointment){
      res.status(200).json({
        success: true,
        data: avapointment,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + "Ийм id-тай захиалах боломжтой цаг алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.createAvAppointment = async (req, res, next) => {

    try {
  const response = await axios.get('http://134.209.96.67:3535/api/v1/service/'+req.body.service_id);
  
  if(response.data.data._id!=req.body.service_id){
    res.status(400).json({
      success: false,
      error: "iim id alga",
    });
    
    } else {
      req.body.ServiceName = response.data.data.ServiceName;
      console.log(req.body.ServiceName);
      const avapointment = await AvAppointment.create(req.body);
        // axios.put('http://134.209.96.67:3535/api/v1/service/'+req.body.service_id, {
        // ServiceName: response.data.data.ServiceName
        // });
        res.status(200).json({
          success: true,
          data: avapointment,
        });
  }
    } catch(err) {
      res.status(400).json({
        success: false,
        error: "iim id alga",
      });
    }
}

exports.updateAvAppointment = async (req, res, next) => {

  try {
    const avapointment = await AvAppointment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if(avapointment){
      res.status(200).json({
        success: true,
        data: avapointment,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + " Ийм id-тай захиалах боломжтой цаг алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.deleteAvAppointment = async (req, res, next) => {

  try {
    const avapointment = await AvAppointment.findByIdAndDelete(req.params.id);
    if(avapointment){
      res.status(200).json({
        success: true,
        data: avapointment,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + "Ийм id-тай захиалах боломжтой цаг алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

