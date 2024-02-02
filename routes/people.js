const express = require("express");
const router = express.Router();
const people = require("../controller/people")

router.get('/', people.getAllPeople);
router.get('/:id', people.getPeople);

module.exports = router;