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
  --theme node_modules/typedoc-markdown-theme/bin
  --out ./docs/temp/
  ./lib/src
  `);
}
// --json ./docs/typedoc.json
