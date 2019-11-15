module.exports = {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    crawlerDomainName: process.env.CRAWLER_DOMAIN_NAME || 'http://localhost:3030/api/'
};
