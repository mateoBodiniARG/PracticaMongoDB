// Crear base de datos
// use Practica1Mongo

// ver base de datos
// show db

// Crear una coleccion
db.createCollection("usuarios");

// Insertar un documento en una coleccion
db.usuarios.insert({
  nombre: "Juan",
  apellidos: "Perez",
  edad: 25,
  domicilio: "Calle 1",
});

// Insertar documentos en una coleccion
db.usuarios.insertMany([
  { nombre: "Maria", apellidos: "Lopez", edad: 30, domicilio: "Calle 2" },
  { nombre: "Pedro", apellidos: "Gomez", edad: 35, domicilio: "Calle 3" },
  { nombre: "Ana", apellidos: "Garcia", edad: 40, domicilio: "Calle 4" },
]);

// Insertar un elemento devinido previamente
item1 = {
  nombre: "Carlos",
  apellidos: "Perez",
  edad: 25,
  domicilio: "Calle 1",
};
db.usuarios.insert(item1);

// Modificar un valor de un documento
db.usuarios.updateOne({ nombre: "Juan" }, { $set: { edad: 26 } });

// Modificar varios valores
db.usuarios.updateMany(
  { nombre: "Juan" },
  { $set: { edad: 26 }, $set: { domicilio: "Calle 5" } }
);

// Crear una base de datos llamada biblioteca
// use biblioteca

// 2 - Crear una colección llamada socios
db.createCollection("socios");

// 3 - Crear una colección llamada libros
db.createCollection("libros");

// 4 - Mostrar todos las colecciones de la base de datos biblioteca
// show collections

// 5 - Insertar los siguientes documentos en la colección libros
// codigo: 1,
//     nombre: 'El aleph',
//     autor: 'Borges',
//     editoriales: ['Planeta','Siglo XXI']
// codigo: 2,
//     nombre: 'Martin Fierro',
//     autor: 'Jose Hernandez',
//     editoriales: ['Planeta']
// codigo: 3,
//       nombre: 'Aprenda PHP',
//       autor: 'Mario Molina',
//       editoriales: ['Planeta']
// codigo: 4,
//       nombre: 'Java en 10 minutos',
//       autor: 'Barros Sergio',
//       editoriales: ['Planeta','Siglo XXI']

db.libros.insertMany([
  {
    codigo: 1,
    nombre: "El aleph",
    autor: "Borges",
    editoriales: ["Planeta", "Siglo XXI"],
  },
  {
    codigo: 2,
    nombre: "Martin Fierro",
    autor: "Jose Hernandez",
    editoriales: ["Planeta"],
  },
  {
    codigo: 3,
    nombre: "Aprenda PHP",
    autor: "Mario Molina",
    editoriales: ["Planeta"],
  },
  {
    codigo: 4,
    nombre: "Java en 10 minutos",
    autor: "Barros Sergio",
    editoriales: ["Planeta", "Siglo XXI"],
  },
]);

