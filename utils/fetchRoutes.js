const createCLient = require('./contentful.js')
const contentfulClient = createCLient.createClient()

const transformer = (data) => {
    let routes = []
    const cleanData = data.items[0].fields.post
    cleanData.forEach((path) => {
        if(path.fields !== undefined) {
            routes.push('blog/' + path.fields.slug)
        }
    })
    return routes
}

const getRoutes = () => {
    return new Promise((resolve, reject) => {
        contentfulClient.getEntries({
            'content_type': 'routes'
        })
        .then(res => {
            let data = transformer(res)
            resolve(data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export default async function fetchAppRoutes() {
    const routes = await getRoutes()
    return routes
}
 