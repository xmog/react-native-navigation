const _ = require('lodash');
const Typedoc = require('typedoc');
const path = require('path');

const API_PATH = path.resolve(`${__dirname}/../docs/api`);

run();

function run() {
  // const modulePath = 'Navigation';

  // const reflections = readReflections(modulePath);

  // const theModule = reflections.children[0];
  // const theClass = theModule.children[0];

  createMarkdown(require(`./temp.json`));
}

function createMarkdown(theClass) {
  const methods = getMethods(theClass);

}

function getMethods(theClass) {
  return _.filter(theClass.children, (child) => child.kind === Typedoc.ReflectionKind.Method);
}

function readReflections(modulePath) {
  const tsconfig = require(`${__dirname}/../tsconfig`);

  const typedocApp = new Typedoc.Application({
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    includeDeclarations: true,
    module: 'commonjs',
    readme: 'none',
    target: 'ES6',
    ...tsconfig.compilerOptions
  });

  return typedocApp.serializer.projectToObject(
    typedocApp.convert(
      typedocApp.expandInputFiles(
        [`${__dirname}/../lib/src/${modulePath}.ts`]
      )
    )
  );
}
