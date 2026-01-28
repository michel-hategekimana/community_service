import jwt from "jsonwebtoken";

export function VerifyAcces(passRole) {
  return (req, res, next) => {
    const token = req.headers["auth-token"];
  
    if (!token) {
      return res.status(404).json({ message: "Not authorized" });
    } else {
      try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY, {expiresIn: "1d"});
        req.user = verifyToken.user;
        if (passRole != verifyToken.user.role) {
          return res.status(401).json({ message: "please you don't have access" });
        }else{
            return next()
        }
      } catch (error) {
        if ((error.name = "JsonWebTokenError")) {
          return res.status(401).json({ message: "Invalid token or Expired token" });
        } else {
          return res.status(500).json({ message: `error is ${error}` });
        }
      }
    }
  };
}
