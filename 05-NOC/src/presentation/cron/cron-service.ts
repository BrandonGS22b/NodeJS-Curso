//este cron nos sirve para ejecutar el servidor cada segundo mediante esta libreria
//link:  https://www.npmjs.com/package/cron
import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;


export class CronService  {


  static createJob( cronTime: CronTime, onTick: OnTick ): CronJob {

    const job = new CronJob( cronTime,onTick );
    
    job.start();
    
    return job;

  }


}

