const path = require("path")
const fs = require("fs")

const writeFile = (path, contents) => {
  return new Promise((resolve) => {
    fs.writeFile(`${path}`, contents, "utf-8", function (err) {
      if (err) reject("[updateFileContents] write file failed")
      resolve()
    })
  })
}

const DOC_CONTENTS =
  'const template = \'<div id="rsg-root"></div><script src="/styleguide/build/bundle.js"></script>\' \nconst Docs = () => <div dangerouslySetInnerHTML={{ __html: `${template}` }} /> \nexport default Docs'

const FILE_PATH = path.resolve(process.cwd(), "./src/pages/docs.tsx")

const createDocs = () => {
  return writeFile(FILE_PATH, DOC_CONTENTS)
}

createDocs()
