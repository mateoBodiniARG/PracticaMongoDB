## Operadores relacionales:

1. **$eq (Equal - Igual):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo es igual al valor especificado.
   - _Ejemplo:_ `db.libros.find({precio: {$eq: 20}});`

2. **$ne (Not Equal - No igual):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo no es igual al valor especificado.
   - _Ejemplo:_ `db.libros.find({precio: {$ne: 20}});`

3. **$gt (Greater Than - Mayor que):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo es mayor que el valor especificado.
   - _Ejemplo:_ `db.libros.find({precio: {$gt: 20}});`

4. **$lt (Less Than - Menor que):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo es menor que el valor especificado.
   - _Ejemplo:_ `db.libros.find({precio: {$lt: 20}});`

5. **$gte (Greater Than or Equal - Mayor o igual que):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo es mayor o igual al valor especificado.
   - _Ejemplo:_ `db.libros.find({precio: {$gte: 20}});`

6. **$lte (Less Than or Equal - Menor o igual que):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo es menor o igual al valor especificado.
   - _Ejemplo:_ `db.libros.find({precio: {$lte: 20}});`

7. **$in (In - En):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo está en el conjunto especificado.
   - _Ejemplo:_ `db.libros.find({categoria: {$in: ["Ficción", "Misterio"]}});`

8. **$nin (Not In - No en):**

   - _Función:_ Se utiliza para seleccionar documentos donde el valor del campo no está en el conjunto especificado.
   - _Ejemplo:_ `db.libros.find({categoria: {$nin: ["Romance", "Ciencia Ficción"]}});`

   ## Detalles de $lookup

- from: Especifica la colección con la que estás realizando la unión, que es "noticias" en este caso.

- localField: Indica el campo en la colección actual (usuarios) que se usará para hacer la unión. En este caso, estás usando el campo "nombre" de la colección de usuarios.

- foreignField: Indica el campo en la colección con la que estás realizando la unión (noticias) que se utilizará para hacer la unión. Aquí, estás usando el campo "nombreU" de la colección de noticias.

- as: Especifica el nombre del nuevo campo que se creará en los documentos de la colección actual (usuarios). Este nuevo campo contendrá los resultados de la unión, que en este caso se llama "noticias".
