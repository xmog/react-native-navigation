const exec = require('shell-utils').exec;

run();

function run() {
  exec.execSync(`typedoc
  --excludeExternals
  --excludePrivate
  --mode modules
  --entryPoint ./lib/src/Navigation
  --out ./docs/temp/
  ./lib/src
  `);
}
// --json ./docs/typedoc.json
