'use strict'
import f from './format-num.js'

class Time extends Date {
  constructor(value) {
    super(`0000-01-01T${value}Z`)
    this.isTime = true
  }

  toISOString() {
    return `${f(2, this.getUTCHours())}:${f(2, this.getUTCMinutes())}:${f(2, this.getUTCSeconds())}.${f(3, this.getUTCMilliseconds())}`
  }
}

export default value => {
  const date = new Time(value)
  /* istanbul ignore if */
  if (isNaN(date)) {
    throw new TypeError('Invalid Datetime')
  } else {
    return date
  }
}
