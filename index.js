const express = require("express");
const cors = require("cors")
const app = express();
const port = 5000;

app.use(cors())
app.use("/countries", require("./routes/country"));
app.use("/states", require("./routes/state"));
app.use("/cities", require("./routes/city"));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
