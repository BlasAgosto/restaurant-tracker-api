// require dependencies
const express = require('express')
const passport = require('passport')
// const rest = require('../models/rest')
// create an express router object
const router = express.Router()
// require event model
const Restaurant = require('../models/rest')
// require custom error handlers
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
// import Rest

// ========================================================================================================//
// ========================================[[ I N D E X  ]]===================================================//
// ========================================================================================================//

const requireToken = passport.authenticate('bearer', { session: false })
// Index: GET /events return all the events
router.get('/add-rests', requireToken, (req, res, next) => {
  // fetch all the events from mongodb
  Restaurant.find({ owner: req.user.id })
  // use mongoose toObject on each event to include virtuals
    .then((restaurant) => restaurant.map((restaurant) => restaurant.toObject()))
  // send response 200 with events to client
    .then((restaurant) => res.json({ restaurant: restaurant }))
  // on error run next middleware
    .catch(next)
})
// ========================================================================================================//
// ========================================[[ C R E A T E ]]===================================================//
// ========================================================================================================//
// CREATE
// POST /examples
router.post('/add-rests', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  // console.log(req)
  const myRestaurant = req.body.restaurant
  myRestaurant.owner = req.user.id
  // console.log('capital R' + Restaurant)

  Restaurant.create(myRestaurant)
  // respond to successful `create` with status 201 and JSON of new "example"
    .then((restaurant) => {
      // console.log('lowercase R' + restaurant)
      res.status(201).json({ restaurant: restaurant.toObject() })
    })
  // if an error occurs, pass it off to our error handler
  // the error handler needs the error message and the `res` object so that it
  // can send an error message back to the client
    .catch(next)
})

// ========================================================================================================//
// ========================================[[ S H O W ]]===================================================//
// ========================================================================================================//

// Show: GET /events/100 return a event
router.get('/add-rests/:id', requireToken, (req, res, next) => {
  // get id of event from params
  const id = req.params.id
  // fetching event by its id
  // Event.findById(id)
  Restaurant.find({ owner: req.user.id, _id: id })
  // handle 404 error if no event found
    .then(handle404)
  // respond with json of the event
  // use mongoose toObject on event to include virtuals
    .then((restaurant) => res.json({ restaurant: restaurant[0].toObject() }))
  // on error continue to error handling middleware
    .catch(next)
})

// ========================================================================================================//
// ========================================[[ D E L E T E ]]===================================================//
// ========================================================================================================//
// Destroy: DELETE /events/:id delete the event
router.delete('/your-rests/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  Restaurant.findById(id)
  // handle 404 error if no event found
    .then(handle404)
    .then((event) => requireOwnership(req, event))
  // delete event from mongodb
    .then((event) => {
      event.deleteOne()
    })
  // send 204 if successful
    .then(() => res.sendStatus(204))
  // on error go to next middleware
    .catch(next)
})

// ========================================================================================================//
// ========================================[[ U P D A T E ]]===================================================//
// ========================================================================================================//
module.exports = router
router.patch('/your-rests/:id', requireToken, (req, res, next) => {
  delete req.body.updateData.owner

  Restaurant.findById(req.params.id)
    .then(handle404)
    .then((restaurant) => {
      requireOwnership(req, restaurant)

      return restaurant.updateOne(req.body.updateData)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// // Update: PATCH /events/:id
// router.patch('/your-rests/:id', requireToken, (req, res, next) => {
//   // get id of event from params
//   const id = req.params.id
//   // get event data from request
//   const eventData = req.body.restaurant
//   // fetching event by its id
//   Restaurant.findById(id)
//   // handle 404 error if no event found
//     .then(handle404)
//     .then((restaurant) => requireOwnership(req, restaurant))
//   // update event
//     .then((restaurant) => {
//       // updating event object
//       // with eventData
//       Object.assign(restaurant, eventData)
//       // save event to mongodb
//       return restaurant.save()
//     })
//   // if successful return 204
//     .then(() => res.sendStatus(204))
//   // on error go to next middleware
//     .catch(next)
// })
