import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cucumber = require('cypress-cucumber-preprocessor').default;

export default function (on, config) {

  on('file:preprocessor', cucumber());

};
