# rollup-incremental-multi 

To test Rollup incremental plugin with multi entry plugin.

Currently get the issue:

```
'virtual:multi-entry.js' is imported by virtual:multi-entry.js?incremental-entry.js, but could not be resolved – treating it as an external dependency
{
  code: 'ERROR',
  error: Error: 'virtual:multi-entry.js' is imported as an external by virtual:multi-entry.js?incremental-entry.js, but is already an existing non-external module id
```

## Install

> Tested on node 12 and 14

```
  npm install
```

## Run as rollup config

```
  npm run dev
```

## Run as rollup programatically

```
  npm start
```