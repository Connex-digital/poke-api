


const findSearchpokemon = require("./searches/searchpokemon");
const findSearchpokemonencounters = require("./searches/searchpokemonencounters");
module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  // If you want your trigger to show up, you better include it here!
  triggers: {},

  // If you want your searches to show up, you better include it here!
  searches: {
    [findSearchpokemon.key]: findSearchpokemon,
    [findSearchpokemonencounters.key]: findSearchpokemonencounters
  },

  // If you want your creates to show up, you better include it here!
  creates: {},

  resources: {},
};
