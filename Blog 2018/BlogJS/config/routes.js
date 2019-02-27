const userController = require('../controllers').user;
const homeController = require('../controllers').home;
const articleControler = require('../controllers').article;


module.exports = (app) => {
    app.get('/', homeController.index);

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);
    app.get('/user/login', userController.loginGet);
    app.post('/user/login', userController.loginPost);

    app.get('/user/logout', userController.logout);

    app.get('/article/create', articleControler.createGet);
    app.post('/article/create', articleControler.createPost);

    app.get('/article/details/:id', articleControler.details);

    app.get('/user/myarticles/', userController.myArticle);

    app.get('/article/edit/:id',articleControler.editGet);
    app.post('/article/edit/:id',articleControler.editPost);

    app.get('/article/delete/:id',articleControler.deleteGet);
    app.post('/article/delete/:id',articleControler.deletePost);
};
