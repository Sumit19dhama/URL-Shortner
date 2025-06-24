const express = require('express');

const {handleGenerateNewShortURL} = require("../Controlers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

module.exports = router;