const express = require("express");
const router = express.Router();
const stateList = require("../asset/state.json");

// Get a list of all states.
router.get("/", (req, res) => {
  res.send(stateList);
});

// Get a list of states belonging to a specific country.
router.get("/getStatesOfCountry/:countryCode", (req, res) => {
  const states = stateList.filter((value) => {
    return value.countryCode === req.params.countryCode;
  });

  res.send(states);
});

// Get a state by isoCode.
router.get("/getStateByCode/:isoCode", (req, res) => {
  //find the index of state using isoCode provided by user
  const isoCodeIndex = stateList.findIndex((c) => {
    return c.isoCode === req.params.isoCode;
  });

  //if isoCode is not vaild
  if (isoCodeIndex !== -1) {
    res.send(stateList[isoCodeIndex]);
  } else {
    res.send("please provide a valid isoCode");
  }
});

module.exports = router;
