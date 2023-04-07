const express = require("express");
const router = express.Router();
const cityList = require("../asset/city.json");

// Get a list of all cities.
router.get("/", (req, res) => {
  const pageNo = req.query.pageNo;
  if (!pageNo) {
    res.send("pageNo is required");
  }
  const cities = cityList.slice(pageNo * 1000 - 1000, pageNo * 1000);
  res.send(cities);
});

// Get a list of cities belonging to a specific state and country.
router.get("/getCitiesOfState", (req, res) => {
  const countryCode = req.query.countryCode;
  const stateCode = req.query.stateCode;

  if ((!countryCode, !stateCode)) {
    res.send("countryCode and stateCode is required");
  }

  const cities = cityList.filter((value) => {
    return value.countryCode === countryCode && value.stateCode === stateCode;
  });
  res.send(cities);
});

// Get a list of cities belonging to a specific country.
router.get("/getCitiesOfCountry", (req, res) => {
  const countryCode = req.query.countryCode;
  if (!countryCode) {
    res.send("countryCode is required");
  }
  const cities = cityList.filter((value) => {
    return value.countryCode === countryCode;
  });
  res.send(cities);
});

module.exports = router;
