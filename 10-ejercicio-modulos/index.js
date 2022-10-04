import {suma, multiplica} from './modulos/controller.js';
import chalk from 'chalk';

const log = console.log;

const sum = suma(4, 5);
console.log(sum);

const multiplicar = multiplica(1, 2);
log(chalk.green(multiplicar));