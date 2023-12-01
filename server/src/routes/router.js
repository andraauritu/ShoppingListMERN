const express = require('express');
// const isLoggedIn = require('../middleware/isLoggedIn');
const passport = require('passport');

const createItemRoute = require('./createItemRoute.js');
const readShoppingListRoute = require('./readShoppingListRoute.js');
const updateItemRoute = require('./updateItemRoute.js');
const deleteItemRoute = require('./deleteItemRoute.js');
const fakeUserRoute = require('./fakeUserRoute.js');
const loginRoute = require('./loginRoute.js');
const registerRoute = require('./registerRoute.js');
const router = express.Router();

router.post('/login', loginRoute); //this is the route for doing a POST request to the /login endpoint, in order to login,
router.post('/shoppinglist', createItemRoute);
router.get('/shoppinglist', /* isLoggedIn, */ readShoppingListRoute);
router.get('/fakeUser', fakeUserRoute);
router.put('/shoppinglist/:id', updateItemRoute);
router.delete('/shoppinglist/:id', deleteItemRoute);
router.post('/register', registerRoute);

module.exports = router;