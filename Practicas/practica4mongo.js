// use practicaMongo4;

// Crear la colección
db.createCollection("alumnos");
db.createCollection("profesores");
db.createCollection("asignaturas");

// Insertar datos
// Alumnos
db.alumnos.insertMany([
  { Núm_Matrícula: 1, Nombre: "Juan Perez", Edad: 21 },
  { Núm_Matrícula: 2, Nombre: "Marta Gomez", Edad: 19 },
  { Núm_Matrícula: 3, Nombre: "Pedro Antenor", Edad: 21 },
  { Núm_Matrícula: 4, Nombre: "Mara Liz", Edad: 20 },
  { Núm_Matrícula: 5, Nombre: "Luis Gonzalez", Edad: 20 },
  { Núm_Matrícula: 6, Nombre: "Tomás Lopez", Edad: 20 },
  { Núm_Matrícula: 7, Nombre: "Ana Top", Edad: 20 },
]);

// Profesores
db.profesores.insertMany([
  {
    Id_P: 101,
    Nombre: "Dario Mene",
    Especialidad: ["Matematico", "Programador"],
    Teléfono: "123456789",
  },
  {
    Id_P: 102,
    Nombre: "Juana Mora",
    Especialidad: ["Programadora"],
    Teléfono: "987654321",
  },
]);

// Asignaturas
db.asignaturas.insertMany([
  {
    Código_asignatura: "M001",
    Nombre: "Matemática",
    Salón: "A",
    Alumnos: ["Juan Perez", "Marta Gomez", "Pedro Antenor"],
    Profesor: "Dario Mene",
  },
  {
    Código_asignatura: "P001",
    Nombre: "Programación",
    Salón: "B",
    Alumnos: ["Marta Gomez", "Pedro Antenor", "Mara Liz", "Luis Gonzalez"],
    Profesor: "Dario Mene",
  },
  {
    Código_asignatura: "L001",
    Nombre: "Lógica",
    Salón: "C",
    Alumnos: ["Luis Gonzalez", "Tomás Lopez", "Ana Top"],
    Profesor: "Juana Mora",
  },
]);

//   Insertar una materia más.
db.asignaturas.insertOne({
  Código_asignatura: "F001",
  Nombre: "Física",
  Salón: "D",
  Alumnos: ["Juan Perez", "Mara Liz", "Tomás Lopez", "Ana Top"],
  Profesor: "Juana Mora",
});

// Agregar a las asignaturas el campo nroAlumnos.
db.asignaturas.updateMany(
  {},
  {
    $set: {
      nroAlumnos: { $size: 0 },
    },
  }
);

// Contar y mostrar la cantidad de alumnos de cada asignatura y cargar uno por uno de las cantidades
db.asignaturas.aggregate([
  {
    $project: {
      Código_asignatura: 1,
      Nombre: 1,
      nroAlumnos: { $size: "$Alumnos" },
    },
  },
]);

// Mostrar el listado de materias que tienen mas de 3 alumnos
db.asignaturas.find({ nroAlumnos: { $gt: 3 } });

// Mostrar el listado de materias que tienen mas de 3 alumnos y cuyo profesor es Dario Mene
db.asignaturas.find({ nroAlumnos: { $gt: 3 }, Profesor: "Dario Mene" });
