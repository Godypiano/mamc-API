//VALIDATION
const Joi = require("@hapi/joi");


const registrationValidation = data =>{
    const schema = {

        username:Joi.string().min(6).required(),
        meterNo:Joi.string(),
          phonenumber:Joi.string(), 
      }
      return Joi.validate(data,schema);
}


const loginValidation = data => {
    const schema = {
        username:Joi.string().min(6).required(),
        meterNo:Joi.string().max(10).required(),
         }

    return Joi.validate(data,schema)
}



module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;