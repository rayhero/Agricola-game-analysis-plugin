module.exports = {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    agricolaDraftUrl: process.AGRICOLA_DRAFT_URL || 'http://playagricola.com/Agricola/GameLogs/allturnserver.php?x='
};
