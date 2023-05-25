const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../Controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);

router.post(
  "/register",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password").isLength({ min: 6 }),
    validarCampos,
  ],
  registrarUsuario
);

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password").isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
);
router.post("/renew", revalidarToken);

module.exports = router;
