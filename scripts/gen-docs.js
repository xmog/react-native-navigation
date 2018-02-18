const exec = require('shell-utils').exec;
run();

function run() {
  exec.execSync(`typedoc
  --excludeExternals
  --excludePrivate
  --excludeProtected
  --includeDeclarations
  --mode modules
  --readme none
  --target ES6
  --json ./docs/typedoc.json
  ./lib/src
  `);
}
// --out ./docs/temp/
