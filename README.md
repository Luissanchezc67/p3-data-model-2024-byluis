es un modelo de datos de los pacientes y servicios que ofrece la clinica medica se puede agregar cualquier tipo de servicio, con los pacientes los cuales tendran cada uno una historia clinica 

# lanzar Base de Datos
en schema.prisma se crean los modelos de las tablas que almacenaran los datos, para que el archivo dev.db se cree ejecutamos la siguiente linea de comnando en una consola 

bunx prisma db push 

el cual tendria que salir esto una vez hecho

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "dev.db" at "file:./dev.db"

SQLite database dev.db created at file:./dev.db

🚀  Your database is now in sync with your Prisma schema. Done in 17ms

Running generate... (Use --skip-generate to skip the generators)
[0.32ms] ".env"
bun add v1.1.3 (2615dc74)

 installed @prisma/client@5.13.0

 1 package installed [1.96s]

✔ Generated Prisma Client (v5.13.0) to ./node_modules/@prisma/client in 78ms

## ejecutar los scripts
 bun src/xxxxx.ts
 
 xxxxx = reemplace el nombre de cada script

con el comando bun  que ejecutaremos en la consola cada script para ingresar desde el paciente, el doctor y los servicios que ofrece esta clinica medica

###  Rellenado de datos de prueba

ejecutando el comando bunx prisma studio podemos visualizar los datos con mayor orden, y hacer pruebas