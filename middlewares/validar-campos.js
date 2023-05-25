const express=require('express')
const {validarResult}= require('express-validator');

const validarCampos=(req,res=express.response,next)=>{
    const errors=validarResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }
    next();
}

module.exports={validarCampos}