const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');

const createItemRoute = require('./createItemRoute.js');
const readShoppingListRoute = require('./readShoppingListRoute.js');
const updateItemRoute = require('./updateItemRoute.js');
const deleteItemRoute = require('./deleteItemRoute.js');
const fakeUserRoute = require('./fakeUserRoute.js');

const router = express.Router();

router.post('/login', require('../routes/loginRoute'));

router.post('/shoppinglist', isLoggedIn, createItemRoute);
router.get('/shoppinglist', isLoggedIn, readShoppingListRoute);
router.get('/fakeUser', fakeUserRoute);
router.put('/shoppinglist/:id', isLoggedIn, updateItemRoute);
router.delete('/shoppinglist/:id', deleteItemRoute);


module.exports = router;