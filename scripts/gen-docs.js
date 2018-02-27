const _ = require('lodash');
const path = require('path');
const exec = require('shell-utils').exec;

const reflectionsPath = path.resolve('./../docs/reflections/');

run();

function run() {
  const modulePath = 'Navigation';

  generateJsonReflections(modulePath);
  
  const theModule = require(`${reflectionsPath}/${modulePath}`).children[0];
  const theClass = theModule.children[0];
  const methodIds = _.find(theClass.groups, (g) => g.title === 'Methods').children;

}

function generateJsonReflections(modulePath) {
  exec.execSync(`typedoc
  --excludeExternals
  --excludePrivate
  --excludeProtected
  --includeDeclarations
  --module commonjs
  --readme none
  --target ES6
  --theme markdown
  --json ${reflectionsPath}/${modulePath}.json
  ./lib/src/${modulePath}.ts
  `);
}

// exec.execSync(`typedoc
// --excludeExternals
// --excludePrivate
// --excludeProtected
// --includeDeclarations
// --module commonjs
// --readme none
// --target ES6
// --theme markdown
// --out ./docs/api/
// ./lib/src
// `);
// --json ./docs/typedoc.json
