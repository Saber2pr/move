/*
 * @Author: saber2pr
 * @Date: 2019-07-22 15:57:30
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-07-22 17:00:56
 */
import { FS } from "@saber2pr/node";
import { join, extname } from "path";

export default (from: string, to: string, excludeExts: string[] = []) =>
  FS.search(join(process.cwd(), from))
    .then(paths => paths.filter(p => !excludeExts.includes(extname(p))))
    .then(paths =>
      Promise.all(
        paths.map(path =>
          FS.readFile(path).then(b => ({
            path,
            text: b.toString()
          }))
        )
      )
    )
    .then(fs =>
      fs.map(({ path, text }) => ({
        path: path.replace(join(process.cwd(), from), join(process.cwd(), to)),
        text
      }))
    )
    .then(fs =>
      Promise.all(fs.map(({ path, text }) => FS.writeFile(path, text)))
    );
