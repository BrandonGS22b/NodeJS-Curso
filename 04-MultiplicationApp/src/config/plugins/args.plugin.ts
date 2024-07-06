//tenemos que instalar =npm i --save-dev @types/yargs

import yargs from 'yargs';



import { hideBin } from 'yargs/helpers';

export const yarg = yargs(process.argv)
.parseAsync()