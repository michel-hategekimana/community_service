import Joi  from "joi";

export const signInSchema=Joi.object({
    
    email:Joi.string()
    .email()
    .required()
    .messages({
        "any.required":"email is required",
        "string.email":"email must be a valid email",
       "string.base":"email should be a type of string",
       "string.empty":"email is not allowed to be empty"
    }),
    password:Joi.string()
    .required()
    .min(8)
    .max(10)
   .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/)
   .messages({
             "string.base":"password should be a type of text",
             "string.min":"password should have minimum length of 8",
             
             "string.pattern.base":
             "password must contain atleast one uppercase letter,one lower case letter,one number,one special character",
             "any.required":"password is required"
    }),

});

export const signUpschema=Joi.object({
    names:Joi.string()
    
    .required()
    .messages({
        "any.required":"names is required",
        "string.base":"name should be text",
        "string.empty":"names can not be empty"
    }),
     email:Joi.string()
    .email()
    .required()
    .messages({
        "any.required":"email is required",
        "string.email":"email must be a valid email",
       "string.base":"email should be a type of string",
       "string.empty":"email is not allowed to be empty"
    }),
    password:Joi.string()
    .required()
    .min(8)
   .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/)
   .messages({
             "string.base":"password should be a type of text",
             "string.min":"password should have minimum length of 8",
             "string.pattern.base":
             "password must contain atleast one uppercase letter,one lower case letter,one number,one special character",
             "any.required":"password is required"
    }),
    role:Joi.string()
     .required()
     .valid("admin","provider","client")
     .messages({
        "string.base":"role must be a string",
        "any.required":"role is required",
        "string.empty":"role can not be empty",
        "any.only":'role must be one in this "admin","provider","client" '
     })
    
});
export const createCategorySchema=Joi.object({
        categoryName:Joi.string()
        .required()
        .valid("Plumbing","Painting","Pharmacy","Aplication services","Electrical")
        .messages({
            "string.base":"CategoryName must be a string",
            "string.empty":"CategoryName can not be empty",
            "any.required":"CategoryName is required",
            "any.only":'Category must be one in this "Plumbing","Painting","Pharmacy","Aplication services","Electrical" '
        })

    })