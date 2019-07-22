# @saber2pr/move

> move files to anthor directory.

```bash
yarn add @saber2pr/move -D
```

# Usage

```bash
move <fromDir> <toDir> ...<excludeExt>

move src lib .ts # exclude .tsx file

move src lib .ts .js # exclude .tsx .js file
```

# Why

tsc compiler cannot help you to copy files which's extname is not '.ts' or '.tsx' to outDir.

here is one case:

from

```
src
|-component1
| |-index.tsx
| |-style.less
|
|-component1
  |-index.tsx
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

# move files exclude .ts and .tsx files.
move src lib .ts .tsx
```

# Author

saber2pr
