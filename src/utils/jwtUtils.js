import jwt from "jsonwebtoken"

export function generateToken(id){
    return  jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"1d"})
};

export function decodToken(token){
    return jwt.verify(token.trim(),process.env.SECRET_KEY)
}