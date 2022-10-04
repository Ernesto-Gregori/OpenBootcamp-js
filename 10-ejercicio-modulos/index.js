import {suma, multiplica} from './modulos/controller.js';
import chalk from 'chalk';

const log = console.log;

const multiplicar = multiplica(suma(4, 5), suma(1, 2));

console.log(multiplicar)
log(chalk.green(multiplicar));