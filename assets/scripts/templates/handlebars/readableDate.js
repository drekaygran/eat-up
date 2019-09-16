'use strict'

const moment = require('moment')

const readableDate = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm a')
}

module.exports = readableDate
