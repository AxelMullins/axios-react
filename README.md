# Axios - React

- Guia básica de cómo usar axios en react.
- Función asíncrona.

## Explicación del funcionamiento
- Importamos hooks { useState, useEffect }
- Importamos axios

- Creamos estados con el hook `useState` para almacenar `los datos / los errores`
- Creamos una variable para la url. En un sitio dinámico esta puede ser un estado en caso de que cambie la url por alguna acción del usuario.

- Hacemos uso del hook `useEffect`, el mismo no tiene ninguna dependencia que lo maneje, por lo que se va a ejecutar al principio y por única vez.
- Creamos una función `async`.
- En el bloque `try`
    - Creamos una variable en donde vamos a almacenar la respuesta.
    - `await` para esperar la respuesta de la petición usando el método `get` a la url/endpoint.
    - `setData(response.data)` para actualizar el valor de `data`. Es importande colocar `.data` ya que ahi es donde axios guarda la respuesta que necesitamos (pueden chequearlo con un console.log de `response` y otro con `response.data`)
- El bloque `catch`
    - En caso de tener algun error, vamos a recibir ese error y se actualizamos el valor de `errMsg` con `setErrMsg(error.message)` donde `.message` tiene un funcionamiento similar `.data`, ahi vamos a tener un mensaje de el error brindado por axios.
- Opcional agregar un bloque `finally`
    - Este bloque es muy útil en caso de que tengamos que manejar el estado de un `loading`.

- Por último nos queda realizar un `map` al array de objetos `data`
- Se pueden utilizar los valores de los estados para hacer render condicional.

## Librerías:
- [Axios](https://www.npmjs.com/package/axios)
    - `npm i axios`

## Notas 📢
- [Axel Mullins](https://github.com/AxelMullins) 💻
- Encontrame en [LinkedIn](https://www.linkedin.com/in/axel-mullins/)
