module.exports = {
    method: 'GET',
    path: '/{page}',
    handler: function (request, reply) {
        reply.view('sub-pages/' + request.params.page, {
            subPage: true
        });
    }
};
