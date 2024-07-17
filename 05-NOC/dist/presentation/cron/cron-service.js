"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
//este cron nos sirve para ejecutar el servidor cada segundo mediante esta libreria
//link:  https://www.npmjs.com/package/cron
const cron_1 = require("cron");
class CronService {
    static createJob(cronTime, onTick) {
        const job = new cron_1.CronJob(cronTime, onTick);
        job.start();
        return job;
    }
}
exports.CronService = CronService;
