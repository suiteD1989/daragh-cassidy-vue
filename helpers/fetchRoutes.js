import { createClient } from '~/plugins/contentful'

const contentfulClient = createClient()
const fetchRoutes = new Promise((resolve, reject) => {
    contentfulClient.getEntries({
        'content_type': 'routes',
    })
    .then(res => {
        resolve(res.items[0].fields.post)
    })
    .catch(err => {
        console.log(err)
        reject(err)
    })
}) 

export default {
    fetchRoutes
}