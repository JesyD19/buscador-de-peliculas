# Buscador de Películas - Node.js

## Descripción

Esta aplicación permite filtrar y ordenar una lista de películas desde la terminal usando Node.js. Se pueden buscar películas por título, filtrar por tags y ordenar por cualquier propiedad (como título, rating o tags).

## Archivos

- `index.js`: Recibe y procesa los argumentos desde la terminal, delegando las acciones a `pelis.js`.
- `pelis.js`: Lee el archivo JSON y expone funciones para interactuar con los datos de las películas.
- `pelis.json`: Contiene la colección de películas en formato JSON.

## Uso

Ejemplos de comandos:

Mostrar todas las películas:

```bash
node index.js
```

Ordenar por título alfabéticamente:

```bash
node index.js --sort title
```

Ordenar por rating de manera ascendente:

```bash
node index.js --sort rating
```

Ordenar por tags usando el primer tag de cada película:

```bash
node index.js --sort tags
```

Buscar películas que contengan "matrix" en el título:

```bash
node index.js --search matrix
```

Filtrar películas por tag "thriller":

```bash
node index.js --tag thriller
```

## Tests con AVA

Usamos AVA para hacer tests rápidos y simples.

### Instalación

Si no tienes AVA instalado, corre:

```bash
pnpm add -D ava
```

## Ejecutar tests

Para correr todos los tests:

```bash
pnpm ava
```

o

```bash
pnpm test
```

Nota: Para que pnpm test funcionen, asegurate de tener este script en tu package.json:

"scripts": {
"test": "ava"
}

## Reinstalar dependencias

Si tienes problemas con los tests, prueba reinstalar las dependencias con:

```bash
pnpm install
```

## Notas

El programa es case insensitive para búsquedas y filtros.
El archivo pelis.json debe estar en el mismo directorio que los otros archivos.
Se usa fs.readFileSync(\_\_dirname + "/pelis.json", "utf-8") para leer el archivo JSON.

## Autor

Jesica Domínguez Alderete - apx
