'use strict'

const config = require('../config')
const store = require('../store')

// const uploadImage = formData => {
//   return $.ajax({
//     method: 'POST',
//     data: formData,
//     url: config.apiUrl + '/image-uploads',
//     contentType: false,
//     processData: false
//   })
// }

// const updateImage = imageURL => {
//   return $.ajax({
//     method: 'PATCH',
//     data: {
//       event: {
//         image: imageURL
//       }
//     },
//     url: config.apiUrl + '/events/' + store.current_event._id
//   })
// }

const createEvent = formData => {
  for (const [key, value] of formData.entries()) {
    console.log(key, value)
  }
  return $.ajax({
    url: config.apiUrl + '/events',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    contentType: false,
    processData: false
  })
}

const updateEvent = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/events/' + store.event_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      event: formData
    }
  })
}

const getAllEvents = function () {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'GET'
  })
}

const deleteEvent = eventId => {
  return $.ajax({
    url: config.apiUrl + '/events/' + eventId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const openEvent = id => {
  store.event_id = id
  return $.ajax({
    url: config.apiUrl + `/events/${id}`
  })
}

module.exports = {
  createEvent,
  getAllEvents,
  deleteEvent,
  updateEvent,
  openEvent
  // uploadImage,
  // updateImage
}
