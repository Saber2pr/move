# @saber2pr/mv-less

> compile and move less files to anthor directory.

```bash
yarn add @saber2pr/mv-less -D
```

# Usage

```bash
mvLess <fromDir> <toDir>

mvLess src lib
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
| |-style.css
|
|-component1
  |-index.js
  |-style.css

```

# Author

saber2pr
