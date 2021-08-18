// Type definition of Country Entry
exports.type = `

type CountryEntry {
    id: ID 
    country:String!
    year: String!
    area: Int!
    total_population: Int!
}
`;

// Schema for Queries related to CountryEntry
exports.queries = `

type Query {
    getAllCountryEntries: [CountryEntry]
    getCountryEntryById(id:ID): CountryEntry
}

`;

// Schema for Mutations related to CountryEntry
exports.mutations = `

input CountryEntryInput{
    country:String!
    year: String!
    area: Int!
    total_population: Int!
}

input CountryEntryInputForUpdate{
    country:String
    year: String
    area: Int
    total_population: Int
}

type Mutation {
    createCountryEntry(country:CountryEntryInput) : CountryEntry
    updateCountryEntryById(id:ID,country:CountryEntryInputForUpdate) : CountryEntry
    deleteCountryEntryByID(id:ID) : CountryEntry
    
}
`;
