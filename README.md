# **Commands used**

npm init -y

npm i typescript

npx tsc --init --rootdir src --outdir lib

npx tsc --watch



Enable sourcemap - to debug

Enable declaration - compiler generates type definitions

Enable declarationMap - allows to navigate from definitions to source code

npx tsc --init --rootdir src --outdir lib --sourceMap --declaration --declarationMap


// Build and generate lib folder

npm run build


// How to run ts file?

1) Compile to js and run it using node
   1) node lib/index.js
2) Or, use ts-node
   1) npx ts-node src/index.ts
