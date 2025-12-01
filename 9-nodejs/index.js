import express, { json } from 'express'; //importamos express
import mongoose from 'mongoose';
const app = express(); // Crear el servidor ejecutando express
const port = 3000;//crear un puerto
app.use(json());// Middleware para parsear JSON

//Conectar a la base de datos MongoDB

mongoose.connect('mongodb://localhost:27017/miBD')
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos MongoDB:', error);
  });

/**
 * Definición del esquema y modelo de Usuario
 * - nombre: String, requerido, min 3, max 50, solo letras
 * - apellido: String, requerido, min 3, max 50, solo letras
 * - email: String, requerido, único, formato email
 * - password: String, requerido, min 8, max 100, al menos una mayúscula, una minúscula, un número y un carácter especial
 * - eliminado: Boolean, por defecto false (soft delete)
 * - fecha_nacimiento: Date
 * - rol: String, enum ['admin', 'user'], por defecto 'user'
 * - timestamps: createdAt, updatedAt
 */
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ' ]+$/.test(v); // Solo letras
      },
      message: props => `${props.value} no es un nombre válido!`
    },
  },
  apellido: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ' ]+$/.test(v); // Solo letras
      },
      message: props => `${props.value} no es un apellido válido!`
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Formato de email
      },
      message: props => `${props.value} no es un email válido!`
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
    validate: {
      validator: function (v) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v); // Al menos una mayúscula, una minúscula, un número y un carácter especial
      },
      message: props => `La contraseña no cumple con los requisitos mínimos!`
    }
  },
  eliminado: { type: Boolean, default: false },
  fecha_nacimiento: {
    type: Date,
    validate: {
      validator: function (v) {
        //validar que no sea una fecha futura
        return v <= new Date();
      },
      message: props => `La fecha de nacimiento no puede ser futura!`
    }
  },
  rol: { type: String, enum: ['admin', 'user'], default: 'user', lowercase: true },
}, { timestamps: true });










    // Ruta principal
app.get('/', (req, res) => {
  res.json({
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez'
    });
});

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
