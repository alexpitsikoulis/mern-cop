/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the
 * controller you need.
 *
 */
const copApi = require('../models/cop.js')

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const copRouter = express.Router()

/* Step 4
 *
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
copRouter.get('/', (req, res) => {
  copApi.getCops()
    .then(response => {
      res.json(response);
    }).catch(e => {
      res.json(e);
    })
})

copRouter.post('/', (req, res) => {
  copApi.addCop(req.body.cop)
    .then(response => {
      res.json(response);
    }).catch(e => {
      res.json(e);
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  copRouter
}
