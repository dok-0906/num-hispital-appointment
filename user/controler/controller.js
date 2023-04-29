const User = require("../model/user");

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = user.getJWT();
    res.status(200).json({
      success: true,
      token,
      data: user,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}
exports.getuserid = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      userid: req.userId,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}
exports.login = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    if(email && password){
      const user = await User.findOne({email}).select("+password");
    if(user) {
      const ok = await user.checkPassword(password);

    if(ok){
      res.status(200).json({
        success: true,
        token: user.getJWT(),
        data: user,
      });
    } else {
      res.status(401).json({
        success: false,
        error: "Имэйл болон нууц үг буруу",
      });
    } 
    } else {
      res.status(401).json({
        success: false,
        error: "Имэйл болон нууц үг буруу",
      });
    }
    } else {
      res.status(400).json({
        success: false,
        error: "Имэйл болон нууц үгээ оруулна уу",
      }); 
    }
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}

exports.getUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}
exports.getUser = async (req, res, next) => {

  try {
    const user = await User.findById(req.params.id);
    if(user){
      res.status(200).json({
        success: true,
        data: user,
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



exports.updateUser = async (req, res, next) => {

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if(user){
      res.status(200).json({
        success: true,
        data: user,
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

exports.deleteUser = async (req, res, next) => {

  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if(user){
      res.status(200).json({
        success: true,
        data: user,
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

