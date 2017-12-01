/**
 * Created by vincent on 17/11/20.
 */
var Mock = require('mockjs')

module.exports = function () {
  return {
    user: Mock.mock({
      'name': 'xjc',
      'age': 18,
      'sex': 'man'
    })
  }
}
