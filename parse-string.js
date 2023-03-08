import './polyfills_x.js'
import TOMLParser from './lib/toml-parser.js'
import prettyError from './parse-pretty-error.js'

export default parseString

function parseString(str) {
  if (global.Buffer && global.Buffer.isBuffer(str)) {
    str = str.toString('utf8')
  }
  const parser = new TOMLParser()
  try {
    parser.parse(str)
    return parser.finish()
  } catch (err) {
    throw prettyError(err, str)
  }
}
