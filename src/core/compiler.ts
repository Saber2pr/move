/*
 * @Author: saber2pr
 * @Date: 2019-07-22 15:57:30
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-07-22 15:57:30
 */
import { FS } from "@saber2pr/node";
import { join, extname } from "path";
import less from "less";

export default (from: string, to: string) =>
  FS.search(join(process.cwd(), from))
    .then(files =>
      files.filter(file => [".less", ".css"].includes(extname(file)))
    )
    .then(less_files =>
      Promise.all(
        less_files.map(file =>
          FS.readFile(file).then(async b => ({
            path: file,
            output: await less.render(b.toString())
          }))
        )
      )
    )
    .then(fs =>
      fs.map(({ path, output }) => ({
        path: path.replace(join(process.cwd(), from), join(process.cwd(), to)),
        output
      }))
    )
    .then(fs =>
      Promise.all(
        fs.map(({ path, output: { css } }) =>
          FS.writeFile(path.replace(".less", ".css"), css)
        )
      )
    );
