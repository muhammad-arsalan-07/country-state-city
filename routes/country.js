const express = require("express");
const router = express.Router();
const countryList = require("../asset/country.json");

// Get a list of all countries.
router.get("/", (req, res) => {
  res.send(countryList);
});

// Get a country by isoCode.
router.get("/getCountryByCode/:isoCode", (req, res) => {
  //find the index of isoCode provided by user
  const isoCodeIndex = countryList.findIndex((c) => {
    return c.isoCode === req.params.isoCode;
  });

  //if isoCode is not vaild
  if (isoCodeIndex !== -1) {
    res.send(countryList[isoCodeIndex]);
  } else {
    res.send("please provide a valid isoCode");
  }
});

module.exports = router;
