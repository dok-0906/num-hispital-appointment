const Appointment = require("../model/appointment");
const axios = require("axios");

exports.getAppointments = async (req, res, next) => {
  try {
    const appointment = await Appointment.find();
    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.getUserAppointments = async (req, res, next) => {
  try {
    req.query.user_id = req.userId;
    const select = req.query.select;
    console.log(req.query)
    
    const avapointment = await Appointment.find(req.query, select);
  
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
exports.getAppointment = async (req, res, next) => {

  try {
    const appointment = await Appointment.findById(req.params.id);
    if(appointment){
      res.status(200).json({
        success: true,
        data: appointment,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + "Ийм id-тай цаг алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.createAppointment = async (req, res, next) => {
  
    try {
      const response = await axios.get('http://localhost:6565/api/v1/av_appointment/'+req.body.Avappointment_id);
      if(response.data.data.is_app===false){
        req.body.ServiceName = response.data.data.ServiceName;
        req.body.app_date = response.data.data.app_date;
      const appointment = await Appointment.create(req.body);
      axios.put('http://localhost:6565/api/v1/av_appointment/'+req.body.Avappointment_id, {
      is_app: true
      });
      res.status(200).json({
        success: true,
        data: appointment,
      });
    } else {
      res.status(400).json({
        success: false,
        error: "ali xediin zaxialagdsan tsag baina"
      })
    }
    } catch(err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
  
}

exports.updateAppointment = async (req, res, next) => {

  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if(appointment){
      axios.put('http://localhost:6565/api/v1/av_appointment/'+req.body.Avappointment_id, {
      is_app: true
      });
      res.status(200).json({
        success: true,
        data: appointment,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + " Ийм id-тай цаг алга",
      });
    }
    
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.deleteAppointment = async (req, res, next) => {
    
  try {
    const appointment = await Appointment.findById(req.params.id);
    if(appointment){ 
    const apointment = await Appointment.findByIdAndDelete(req.params.id);
    if(apointment){
      axios.put('http://localhost:6565/api/v1/av_appointment/'+appointment.Avappointment_id, {
      is_app: false
      });
      res.status(200).json({
        success: true,
        data: apointment,
      });
    } else {
      res.status(400).json({
        success: false,
        error: req.params.id + "Ийм id-тай захиалах боломжтой цаг алга",
      });
    }
  } else {
    res.status(400).json({
      success: false,
      error: "iim id-tai tsag zaxialga alga",
    });
  }
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

