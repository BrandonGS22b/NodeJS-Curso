import { envs } from './config/envs';
import { MongoDatabase } from './data';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';


(async()=> {
  main();
})();

//llamamos la conexion de la base de datos donde la hicimos mongo-database.ts


async function main() {

  await MongoDatabase.connect({
    dbName:envs.MONGO_DB_NAME ,
    mongoUrl:envs.MONGO_URL,
  });


  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}