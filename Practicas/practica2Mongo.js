// 1 - Creo una base de datos llamada personas
// use personas

// 2 - Creo una colección dentro de personas llamada amigos
db.createCollection("amigos");

// Insertamos los datos de 5 personas cuyos datos son: nombre, apellido, edad, aficciones (futbol, tenis, musica, pintura, etc), telefonos(puede ser más de uno), dirección (compuesta por calle, nro, ciudad),amigos (compuesto por nombre y edad).
db.amigos.insertMany([
  {
    Nombre: "Marisa",
    Apellidos: "García",
    Edad: 18,
    Aficiones: ["senderismo", "tenis", "pintura"],
    telefonos: ["73128989", "43278944"],
    direccion: {
      calle: "Av. de los Castros",
      numero: "2256",
      ciudad: "Santander",
    },
    Amigos: [
      {
        Nombre: "Monica",
        Edad: 20,
      },
    ],
  },
  {
    Nombre: "Luís",
    Apellidos: "Martinez",
    Edad: 18,
    Aficiones: ["fútbol", "senderismo", "tenis"],
    telefonos: ["808080", "4323424", "423232"],
    direccion: {
      calle: "Mitre",
      numero: "289s",
      ciudad: "Rosario",
    },
    Amigos: [
      {
        Nombre: "Monica",
        Edad: 20,
      },
      {
        Nombre: "Andrés",
        Edad: 24,
      },
    ],
  },
  {
    Nombre: "Luís",
    Apellidos: "Martinez",
    Edad: 28,
    Aficiones: ["natación", "culturismo"],
    telefonos: ["808080", "4323424", "423232"],
    direccion: {
      calle: "Mitre",
      numero: "289s",
      ciudad: "Rosario",
    },
    Amigos: [
      {
        Nombre: "Juan",
        Edad: 40,
      },
      {
        Nombre: "Antonio",
        Edad: 52,
      },
    ],
  },
  {
    Nombre: "Joaquin",
    Apellidos: "Rodriguez",
    Edad: 29,
    Aficiones: ["fútbol", "natación"],
    direccion: {
      calle: "Sarmiento",
      numero: "289",
      ciudad: "Rosario",
    },
    Amigos: [
      {
        Nombre: "Andrés",
        Edad: 24,
      },
    ],
  },
]);

// 4 - Mostrar todos los datos de la colección en forma legible
db.amigos.find();

// 5 - Se desea ver personas mayores de 25 años
db.amigos.find({ Edad: { $gt: 25 } });

// 6 - Mostrar el nombre, apellido y edad de las personas que se llamen Marisa
db.amigos.find({ Nombre: "Marisa" }, { Nombre: 1, Apellidos: 1, Edad: 1 });

// 7 -Mostrar nombre y apellidos de los mayores de 25 años
db.amigos.find({ Edad: { $gt: 25 } }, { Nombre: 1, Apellidos: 1 });

// 8 - Insertar un documento mas solamente que tenga nombre, edad y aficciones
db.amigos.insertOne({
  Nombre: "Sergio",
  Edad: 18,
  Aficiones: ["fútbol", "tenis"],
});

// 9 - Mostrar los nombres de las personas que no tengan amigos
db.amigos.find({ Amigos: { $exists: false } }, { Nombre: 1 });

// 10  -Mostrar nombre y aficiones de las personas que tienen mas de 17 años
db.amigos.find({ Edad: { $gt: 17 } }, { Nombre: 1, Aficiones: 1 });

// 11 - Mostrar las personas que juegan al tenis
db.amigos.find({ Aficiones: "tenis" });

// 12 - Mostrar las personas mayores a 17 años y que juegan al tenis
db.amigos.find({ Edad: { $gt: 17 }, Aficiones: "tenis" });

// 12A-  Mostrar las personas mayores a 28 años o que juegan al tenis
db.amigos.find({ $or: [{ Edad: { $gt: 28 } }, { Aficiones: "tenis" }] });

// 13 - Agregar los siguientes campos
// Primer registro, profesión: Desarrollador y mail: Desarrollador@gmail.com
db.amigos.updateOne(
  { Nombre: "Marisa" },
  { $set: { profesion: "Desarrollador", mail: "Desarrollador@gmail.com" } }
);

// 14 -Modificar el apellido de Juan a Gomez
// NO MATCHED
db.amigos.updateOne({ nombre: "Juan" }, { $set: { Apellidos: "Gomez" } });
// El campo "nombre" y "apellido" se encuentran dentro de un array llamado "Amigos", esta es la solucion:
db.amigos.updateOne(
  { "Amigos.Nombre": "Juan" },
  { $set: { "Amigos.$.Apellidos": "Gomez" } }
);

// 15 - Crear una variable y asignarle el siguiente json
// {
//      "Nombre" : "Juan",
//     "Apellidos" : "Perez",
//     "Edad" : 29.0,
//     "Aficiones" : [
//         "fútbol",
//         "natación” ],
//         "Amigos" : [
//         {
//             "Nombre" : "Luis",
//             "Edad" : 18.0
//         }
//     ]
// }
let nuevoAmigo = {
  Nombre: "Juan",
  Apellidos: "Perez",
  Edad: 29.0,
  Aficiones: ["fútbol", "natación"],
  Amigos: [
    {
      Nombre: "Luis",
      Edad: 18.0,
    },
  ],
};
db.amigos.insertOne(nuevoAmigo);

db.amigos.insertOne(nuevoAmigo);

// 16 - Agregarle una nueva aficion: Voley a todos los que tengan más de 20 años
db.amigos.updateMany({ Edad: { $gt: 20 } }, { $push: { Aficiones: "Voley" } });

// 17 - Sacarle la aficion futbol a todos los que tengan más de 20 años
db.amigos.updateMany({ Edad: { $gt: 20 } }, { $pull: { Aficiones: "fútbol" } });

// 18 - Al documento agregado en el punto 15, agregarle la siguiente dirección:
// calle: "Sarmiento",numero:333, ciudad:Rosario
db.amigos.updateOne(
  { Nombre: "Juan" },
  {
    $set: {
      direccion: {
        calle: "Sarmiento",
        numero: 333,
        ciudad: "Rosario",
      },
    },
  }
);

// 19 - Agregarle el siguiente amigo al documento anterior:
// Carolina, 20 años
db.amigos.updateOne(
  { Nombre: "Juan" },
  {
    $push: {
      Amigos: {
        Nombre: "Carolina",
        Edad: 20,
      },
    },
  }
);

// 20 - Modificar el documento anterior eliminando los campos que tiene agregando solamente la profesión de Desarrollador (tener en cuenta que tenemos que mantener nombre y apellido)
db.amigos.updateOne(
  { Nombre: "Juan", Apellidos: "Perez" },
  {
    $set: {
      Edad: null,
      Aficiones: null,
      Amigos: null,
      profesion: "Desarrollador",
    },
  }
);
//   21 - Eliminar el último documento creado
db.amigos.deleteOne({ Nombre: "Juan" });

// 22 - Mostrar los nombres de las personas de este documento junto a la ciudad donde viven
db.amigos.find({}, { Nombre: 1, "direccion.ciudad": 1 });

// 23 - Agregarle a los documentos de las personas que son de Rosario, el campo “Habitantes:2000000”
db.amigos.updateMany(
  { "direccion.ciudad": "Rosario" },
  { $set: { "direccion.Habitantes": 2000000 } }
);

// 24 - Modificar las edades de las personas registrados en el documento aumentando la edad en 1
db.amigos.updateMany({}, { $inc: { Edad: 1 } });

// 25 - Mostrar los documentos ordenados de menor a mayor por edades
db.amigos.find().sort({ Edad: 1 });

// 26 - Mostrar los campos nombre y edad de los documentos ordenados de mayor a menor por edades
db.amigos.find({}, { Nombre: 1, Edad: 1 }).sort({ Edad: -1 });
