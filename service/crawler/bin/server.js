var app = require('./app');

var PORT = parseInt(process.env.PORT || 3030);
app.listen(PORT, function () {
    console.info('server finish starting at ', new Date());
    console.info('Server is running, port: ', PORT);

    process.on('uncaughtException', function (err) {
        console.error('Caught exception: ', err.stack);
    });
    process.on('unhandledRejection', function (reason, p) {
        console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack);
    });
});
