module.exports = {
    method: 'GET',
    path: '/{page}',
    handler: function (request, reply) {
        if (request.path === '/favicon.ico') {
          reply(404);
          return;
        }
        reply.view('sub-pages/' + request.params.page, {
            subPage: true
        });
    }
};
