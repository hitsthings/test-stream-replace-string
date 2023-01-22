# Showing issue with stream-replace-string type declarations

Use `npm run build:normal` to get the error you would get with a normal import.
Use `npm run build:types` to declare the module with a custom typing in the types/ folder that seems to work.

The error I get is:

```
Module '"{...}/node_modules/stream-replace-string/index"' can only be default-imported using the 'allowSyntheticDefaultImports' flagts(1259)
index.d.ts(13, 1): This module is declared with 'export =', and can only be used with a default import when using the 'allowSyntheticDefaultImports' flag.
```
