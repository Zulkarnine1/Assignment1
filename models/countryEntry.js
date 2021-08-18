const mongoose = require("mongoose");

const countryEntrySchema = new mongoose.Schema({
  country: { type: String, required: true },
  year: { type: String, required: true },
  area: { type: Number, required: true },
  total_population: { type: Number, required: true },
});

const CountryEntry = mongoose.model("countryentry", countryEntrySchema);
module.exports = CountryEntry;
