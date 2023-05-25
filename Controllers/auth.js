const express=require('express');
const Usuario=require('../models/Usuario');
const { validationResult } = require('express-validator');

const createdUsers = [];
const registeredUsers = [];

const registrarUsuario = (req, res = express.request) => {
    const {email, password} = req.body;

    const createdUsers = registeredUsers.find(
        (usuario) => usuario.email === email && usuario.password === password
      );

    if (createdUsers) {
        res.json({
            ok: true,
            message: 'Usuario registrado exitosamente',
            email,
            password,
        });
    } else {
        res.status(400).json({
            ok: false,
            message: 'Email y/o contraseña incorrectos'
        })
    }
    registeredUsers.push({email, password});
};

const crearUsuario = async(req,res = express.request ) => {
    const { name, email, password } = req.body

    try{
        const usuario=new Usuario(req, body);
        await usuario.save();

        res.status(200).json({
            ok:true,
            usuario,
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
        ok:false,
        error,
    })}

    
    
}

const loginUsuario = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

const revalidarToken = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

module.exports = {
    registrarUsuario,
    loginUsuario,
    crearUsuario,
    revalidarToken
}