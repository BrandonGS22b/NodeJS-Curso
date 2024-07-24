import { LogEntity, LogServerLevel } from "../entities/log.entity";


export abstract class LogDatasource{
    abstract savelog(log: LogEntity): Promise<void>;
    abstract getLogs(serverityLevel: LogServerLevel): Promise<LogEntity[]>;


}