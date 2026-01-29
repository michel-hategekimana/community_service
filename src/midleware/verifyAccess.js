// import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";
import { decodToken } from "../utils/jwtUtils.js";

export function VerifyAcces(passRoles) {
  return async (req, res, next) => {
    const token = req.headers["auth-token"];

    if (!token) {
      return res.status(404).json({ message: "Not authorized" });
    } else {
      try {
        const decodedToken = decodToken(token);
        const user = await User.findById(decodedToken.id);
        if (!user) {
          return res
            .status(401)
            .json({ status: 401, message: "Unauthenticated" });
        } else {
          if (!passRoles.includes(user.role)) {
            return res
              .status(403)
              .json({ status: 403, message: "Unauthorized" });
          } else {
            req.user = user;
            return next();
          }
        }
       
      } catch (error) {
        if ((error.name = "JsonWebTokenError")) {
          return res
            .status(401)
            .json({ message: "Invalid token or Expired token" });
        } else {
          return res.status(500).json({ message: `error is ${error}` });
        }
      }
    }
  };
}
