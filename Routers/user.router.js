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

/**
 * @api {save} / Save a random user
 * @apiDescription Save a user in the .json file
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} all the users.
 *
 */
router.post("/save", userControllers.userSave);

/**
 * @api {PATCH} / Update a random user
 * @apiDescription Update a user's information in the .json file using its id
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} all the users.
 *
 */
router.patch("/update/:id", userControllers.userUpdate);

/**
 * @api {PATCH} / update multiple users
 * @apiDescription Update multiple users' information in the .json file
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} all the users.
 *
 */
router.patch("/bulk-update", userControllers.updateMultipleUsers);

/**
 * @api {DELETE} / Delete a user
 * @apiDescription Delete a user from the .json file using its id
 * @apiPermission User
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess {Object[]} all the users.
 *
 */
router.delete("/delete", userControllers.deleteUser);

module.exports = router;
