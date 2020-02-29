const contentful = require('contentful')
const keys = require('../contentful.json')
var config = {
  space: keys.CTF_SPACE_ID,
  accessToken: keys.CTF_CDA_ACCESS_TOKEN
}

export default function createClient () {
  return contentful.createClient(config)
}