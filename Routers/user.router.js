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

/**
 * @api {get} / Get all the users
 * @apiDescription Get all the users from the .json file
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} all the users.
 *
 */
router.get("/all", userControllers.allUser);

/*akhono update hoyni*/
/**
 * @api {get} / Get all the users
 * @apiDescription Get all the users from the .json file
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} all the users.
 *
 */
router.post("/save", userControllers.userSave);

/*akhono update hoyni*/
/**
 * @api {get} / Get all the users
 * @apiDescription Get all the users from the .json file
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} all the users.
 *
 */
router.post("/update/:id", userControllers.userUpdate);

module.exports = router;
