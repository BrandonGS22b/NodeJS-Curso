export enum LogServerLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',


};


export class LogEntity {
    public level: LogServerLevel;  //Enum
    public message: string;
    public createdAt: Date;

    constructor(message: string, createdAt: Date, level: LogServerLevel){
        this.message = message;
        this.createdAt = new Date();
        this.level = level;

    }


};