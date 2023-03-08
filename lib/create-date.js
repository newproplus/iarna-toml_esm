'use strict'
import f from './format-num.js'
// const DateTime = global.Date

class Date_ extends Date {
  constructor(value) {
    super(value)
    this.isDate = true
  }

  toISOString() {
    return `${this.getUTCFullYear()}-${f(2, this.getUTCMonth() + 1)}-${f(2, this.getUTCDate())}`
  }
}

export default value => {
  const date = new Date_(value)
  /* istanbul ignore if */
  if (isNaN(date)) {
    throw new TypeError('Invalid Datetime')
  } else {
    return date
  }
}
