Enunciado
Crea una aplicación para buscar películas

Ejemplo url = http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

Key public = fc172ce5fcc79d79fafd9f2415175c9c
Key Private = 1e1b33354fe84b57b4d1ff52d4dc205ffa06b695
ts = 1

hash = 886d4a53771cea3fe9cfe46f272ad258

Final URL = http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fc172ce5fcc79d79fafd9f2415175c9c&hash=886d4a53771cea3fe9cfe46f272ad258

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)