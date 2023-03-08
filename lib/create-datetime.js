'use strict'
export default value => {
  const date = new Date(value)
  /* istanbul ignore if */
  if (isNaN(date)) {
    throw new TypeError('Invalid Datetime')
  } else {
    return date
  }
}
