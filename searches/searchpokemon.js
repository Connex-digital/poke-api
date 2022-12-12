// find a particular searchpokemon by name
const perform = async (z, bundle) => {
  const response = await z.request({
    url: `https://pokeapi.co/api/v2/pokemon/${bundle.inputData.name}`,
  });
  // this should return an array of objects (but only the first will be used)
  return response.data
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#searchschema
  key: 'searchpokemon',
  noun: 'Searchpokemon',

  display: {
    label: 'Do a search for you favorite pokemon',
    description: 'Finds a searchpokemon based on name.'
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. Searches need at least one `inputField`.
    inputFields: [
      {key: 'name', required: true, helpText: 'Find the pokemon with this name.'}
    ],

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obvious placeholder values that we can show to any user.
    sample: {
      id: 1,
      name: 'Test'
    },

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      // these are placeholders to match the example `perform` above
      // {key: 'id', label: 'Person ID'},
      // {key: 'name', label: 'Person Name'}
    ]
  }
};
