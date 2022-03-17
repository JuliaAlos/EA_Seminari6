*************** MongoDB ***************
https://www.youtube.com/watch?v=pWbMrx5rVBE
https://www.youtube.com/watch?v=lWMemPN9t6Q

Desdel terminal VisualStudio Code:

  npm init
  npm install -D nodemon
  npm install express mongoose dotenv
  npm install cors  -> para poder accedeer a diferentes dominios
                        index.js app.use(cors())

Config:
  Crear index.js
  file -> package.json
      "scripts": {
        "dev": "nodemon ." // . depende del nombre del .js
      },

Desdel terminal VisualStudio Code:

  npm run dev --> levanta el servidor

MongoDB.com:
  Entrar a la conta i crear cluster
  Add New Database User
  Database -> Cluster0 connect -> Choose a connection method
    -> MongoDB Compass (copiar URL i enganxarla a la appMongoDB)
    mongodb+srv://admin:<password>@cluster0.v4ct3.mongodb.net(/test)-> treure test i canviar psw

  Problemes amb el firewall???
   Network Access -> Add IP 0.0.0.0/0
             Comment: desarollo

  Connectarse desde appMongoDB
  CreateDatabase

VisuaStudioCode
  Fitxer variables.env
  Carpeta config