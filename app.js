let app = require('./config/server');
const usersRoute = require('./app/routes/usersRoute');

usersRoute.rotaCriaUser(app);
usersRoute.rotaListaUser(app);
usersRoute.rotaDeleteUser(app);
usersRoute.rotaEditaUser(app);
usersRoute.rotaFavoritoUser(app);
usersRoute.rotaListaFavoritosUser(app);
usersRoute.rotaLogin(app);