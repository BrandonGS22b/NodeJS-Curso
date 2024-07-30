"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const file_system_datasource_1 = require("../infrastructure/datasources/file-system.datasource");
const log_repository_impl_1 = require("../infrastructure/repositories/log.repository.impl");
const fileSystemLogRepository = new log_repository_impl_1.LogRepositoryImpl(new file_system_datasource_1.FileSystemDatasource());
class Server {
    static start() {
        console.log('Server started...');
        //aqui vamos a madar emails
        //aqui se esta ejecutando el servidor o pagina de google
        //CronService.createJob(
        //'*/5 * * * * *',
        //() => {
        //const url = 'https://google.com';
        //new CheckService(
        //fileSystemLogRepository,
        //() => console.log( `${ url } is ok` ),
        //( error ) => console.log( error ),
        //).execute( url );
        // new CheckService().execute( 'http://localhost:3000' );
        //}
        //);
    }
}
exports.Server = Server;
