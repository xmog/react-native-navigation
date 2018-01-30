const exec = require('shell-utils').exec;

run();

function run() {
  exec.execSync(`typedoc --excludeExternals --excludeNotExported --excludePrivate --entryPoint ./lib/src/index.ts --json ./docs/typedoc.json`);
}
