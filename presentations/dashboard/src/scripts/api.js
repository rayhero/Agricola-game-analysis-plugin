const axios = require('axios')

export async function getDraftInfoById(id = '') {
    let url = 'http://localhost:3000/api/draft/' + id
    let res = await axios.get(url)
    return res.data
}
