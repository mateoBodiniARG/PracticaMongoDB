// Conéctate a MongoDB
// use nombreDeTuBaseDeDatos;

// Crear la colección de Usuarios
db.createCollection("usuarios");

// Crear la colección de Noticias
db.createCollection("noticias");

// Insertar datos de usuarios
db.usuarios.insertMany([
  {
    nombre: "Juan",
    twitter: "JuanTwit",
    descripcion: "aaa",
    telefonos: ["73128989", "43278944"],
    direccion: {
      calle: "Av. de los Castros",
      numero: "2256",
      cp: "39005",
      ciudad: "Santander",
    },
  },
  {
    nombre: "Frank",
    twitter: "Frank_USE",
    descripcion: "blogger aficionado",
    telefonos: ["73128989", "43278944", "6536256"],
    direccion: {
      calle: "Av. Pelegrini",
      numero: "300",
      cp: "39005",
      ciudad: "Santander",
    },
  },
  {
    nombre: "Peter",
    twitter: "Pete",
    descripcion: "blogger",
    telefonos: ["808080", "4323424", "423232"],
    direccion: {
      calle: "Av. de los Castros",
      numero: "289s",
      cp: "39005",
      ciudad: "Santander",
    },
  },
]);

db.noticias.insertMany([
  {
    titulo: "Noticia de impacto",
    cuerpo: "CUERPO DE LA NOTICIA",
    fecha: "2014-10-21",
    tags: ["A", "B"],
    nombreU: "Juan",
  },
  {
    titulo: "Noticia de impacto2",
    cuerpo: "NOTICIA CB",
    fecha: "2022-10-21",
    tags: ["C", "B"],
    nombreU: "Juan",
  },
  {
    titulo: "Noticia de impacto3",
    cuerpo: "NOTICIA GB",
    fecha: "2022-5-21",
    tags: ["G", "B"],
    nombreU: "Peter",
  },
  {
    titulo: "Noticia de impacto4",
    cuerpo: "NOTICIA ZZ",
    fecha: "2022-5-11",
    tags: ["Z", "Z"],
    nombreU: "Peter",
  },
  {
    titulo: "Noticia de impacto5",
    cuerpo: "NOTICIA xx",
    fecha: "2021-8-21",
    tags: ["X", "X"],
    nombreU: "Frank",
  },
]);

// 5  - Mostrar los usuarios con los detalles de las noticias que escribieron, mostrando cada usuario con cada noticia en forma separada.
db.usuarios.aggregate([
  {
    $lookup: {
      from: "noticias",
      localField: "nombre",
      foreignField: "nombreU",
      as: "noticias",
    },
  },
  {
    $unwind: "$noticias",
  },
]);

// Mostrar las usuarios con los detalles de las noticias que escribieron, mostrando cada usuario el listado de todas sus noticias
db.usuarios.aggregate([
  {
    $lookup: {
      from: "noticias",
      localField: "nombre",
      foreignField: "nombreU",
      as: "noticias",
    },
  },
]);

// Mostrar nombre de usuario, cuenta de twitter y titulo de la notas que escribio
db.usuarios.aggregate([
  {
    $lookup: {
      from: "noticias",
      localField: "nombre",
      foreignField: "nombreU",
      as: "noticias",
    },
  },
  {
    $project: {
      nombre: 1,
      twitter: 1,
      "noticias.titulo": 1,
    },
  },
]);

// 8 - Mostrar cada una de las noticias con el detalle del usuario que la escribió
db.noticias.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "nombreU",
      foreignField: "nombre",
      as: "usuario",
    },
  },
]);

// 8.1 - Mostar  solamente el titulo de la noticia, el nombre de usuario que lo escribio y el twitter del mismo
db.noticias.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "nombreU",
      foreignField: "nombre",
      as: "usuario",
    },
  },
  {
    $project: {
      titulo: 1,
      "usuario.nombre": 1,
      "usuario.twitter": 1,
    },
  },
]);

// 9 - Agregar a los documentos de noticias un campo llamado cantidad de palabras y colocarles valores x
db.noticias.updateMany({}, { $set: { cantidadPalabras: 10 } });

// Usando la instrucción match, mostrar los datos de Juan.
db.usuarios.aggregate([
  {
    $match: {
      nombre: "Juan",
    },
  },
]);

// 10.1 -Usando la instrucción match, mostrar los datos de Juan, mostrando nombre de usuario, cuenta de twitter y titulo de la notas que escribio
db.usuarios.aggregate([
  {
    $match: {
      nombre: "Juan",
    },
  },
  {
    $lookup: {
      from: "noticias",
      localField: "nombre",
      foreignField: "nombreU",
      as: "noticias",
    },
  },
  {
    $project: {
      nombre: 1,
      twitter: 1,
      "noticias.titulo": 1,
    },
  },
]);

// 11 - Usando la instrucción match, mostrar los datos de las noticias de Juan.
db.noticias.aggregate([
  {
    $match: {
      nombreU: "Juan",
    },
  },
]);

// Mostrar nombre de usuario, cuenta de twitter , titulo de la notas que escribió y la cantidad de palabras escritas de Peter
db.usuarios.aggregate([
  {
    $match: {
      nombre: "Peter",
    },
  },
  {
    $lookup: {
      from: "noticias",
      localField: "nombre",
      foreignField: "nombreU",
      as: "noticias",
    },
  },
  {
    $project: {
      nombre: 1,
      twitter: 1,
      "noticias.titulo": 1,
      "noticias.cantidadPalabras": 1,
    },
  },
]);

// 13 - Agregarle las edades a los usuarios
db.usuarios.updateMany({}, { $set: { edad: 20 } });

// 14 - Mostrar nombre, twitter y edad de los usuarios, ordenados por edad.
db.usuarios.find({}, { nombre: 1, twitter: 1, edad: 1 }).sort({ edad: 1 });
