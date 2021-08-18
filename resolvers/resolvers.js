const CountryEntry = require("../models/countryEntry");

const resolvers = {
  // Query resolvers
  Query: {
    getAllCountryEntries: async () => {
      return await CountryEntry.find();
    },
    getCountryEntryById: async (_, args, context, info) => {
      return await CountryEntry.findById(args.id);
    },
  },
  // Mutations resolvers
  Mutation: {
    createCountryEntry: async (_, args, context, info) => {
      const { country, year, area, total_population } = args.country;
      const entry = new CountryEntry({
        country,
        year,
        area,
        total_population,
      });

      await entry.save();
      return entry;
    },
    updateCountryEntryById: async (_, args, context, info) => {
      // Deconstructing the input country
      const { name, year, area, total_population } = args.country;
      // Getting the country entry doc to be updated
      const entry = await CountryEntry.findById(args.id);
      // Checking which attributes to be updated
      if (name !== undefined) entry.name = name;
      if (year !== undefined) entry.year = year;
      if (area !== undefined) entry.area = area;
      if (total_population !== undefined) entry.total_population = total_population;

      // saving the updates and returning the entry
      await entry.save();
      return entry;
    },
    deleteCountryEntryByID: async (_, args, context, info) => {
      // Getting and removing the entry
      const entry = await CountryEntry.findById(args.id);
      entry.remove();
      return entry;
    },
  },
};

module.exports = resolvers;
