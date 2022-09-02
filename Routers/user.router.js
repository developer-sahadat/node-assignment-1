const express = require("express");
const userControllers = require("../Controllers/user.controllers");
const router = express.Router();
/**
 * @api {get} / A random user
 * @apiDescription Provides a random user data from a .json file
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} a random user data.
 *
 */
router.get("/random", userControllers.randomUser);

module.exports = router;
