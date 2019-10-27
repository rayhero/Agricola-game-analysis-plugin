const axios = require('axios')

export async function getDraftInfoFromUrl(url = '') {
    let proxyServer = 'http://localhost:3000/api/draft'
    let res = await axios.post(proxyServer, { url: url })
    return res.data
}
