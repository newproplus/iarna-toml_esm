'use strict'
export default (d, num) => {
  num = String(num)
  while (num.length < d) num = '0' + num
  return num
}
