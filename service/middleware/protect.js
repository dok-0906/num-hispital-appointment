const jwt = require("jsonwebtoken");
// const User = require("../model/user");

exports.protect = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

    if (token) {
      const tokenObj = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = tokenObj.id;
      req.Role = tokenObj.role;
      console.log(tokenObj);
      next();
    } else {
      res.status(400).json({
        success: false,
        error: "Токен байхгүй байна.",
      });
    }
    } else {
      res.status(401).json({
        success: false,
        error: "Энэ үйлдлийг хийхэд таны эрх хүрэхгүй байна. Та эхлээд логин хийнэ үү",
      });
    }
  
  } catch(err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
}


exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.Role)) {
      next();
    } else {
      res.status(403).json({
        success: false,
        error: "Таны эрх [" + req.Role + "] энэ үйлдлийг гүйцэтгэхэд хүрэлцэхгүй!",
      });
    }
  };
};