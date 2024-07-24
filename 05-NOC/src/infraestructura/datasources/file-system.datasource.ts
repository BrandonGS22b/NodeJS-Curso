import fs from 'fs';
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogServerLevel } from "../../domain/entities/log.entity";
import path from 'path';




export class FileSystemDatasource implements LogDatasource{
    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-all.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';

    constructor() {
        this.createLogsFile();
    }
        private createLogsFile = () => {
            if (!fs.existsSync(this.logPath)){
                fs.mkdirSync(this.logPath);
        }
        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(path =>{
            if (!fs.existsSync(path)) return;
                fs.writeFileSync(path, '');

        });
        
    }

    async savelog(newLog: LogEntity): Promise<void> {

        const logAsJson = `${JSON.stringify(newLog)} \n` ;

        fs.appendFileSync(this.logPath, `${JSON.stringify(newLog)}\n`);
        if (newLog.level === LogServerLevel.low) return ; 

        if (newLog.level === LogServerLevel.medium) 
            fs.appendFileSync(this.mediumLogsPath, `${JSON.stringify(newLog)}\n`);
        
        if (newLog.level === LogServerLevel.high)
            fs.appendFileSync(this.highLogsPath, `${JSON.stringify(newLog)}\n`);

    }
    getLogs(serverityLevel: LogServerLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }


}