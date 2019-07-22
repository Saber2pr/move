# @saber2pr/move

> move files to anthor directory.

```bash
yarn add @saber2pr/move -D
```

# Usage

```bash
move <fromDir> <toDir> ...<excludeExt>

move src lib .ts # exclude .ts file

move src lib .ts .js # exclude .ts .js file
```

# Why

tsc compiler cannot help you to copy files which's extname is not '.ts' to outDir.

here is one case:

from

```
src
|-component1
| |-index.ts
| |-style.less
|
|-component1
  |-index.ts
  |-style.less
```

to

```
lib
|-component1
| |-index.js
| |-style.less
|
|-component1
  |-index.js
  |-style.less

```

you can

```bash
# compile typescript.
tsc

# move files.
move src lib .ts
```

# Author

saber2pr
