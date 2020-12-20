let app = require('./config/server');
const usersRoute = require('./app/routes/usersRoute');

usersRoute.rotaCriaUser(app);
usersRoute.rotaGetUserById(app);
usersRoute.rotaGetUserByEmail(app);
usersRoute.rotaDeleteUser(app);
usersRoute.rotaEditaUser(app);
usersRoute.rotaFavoritoUser(app);
usersRoute.rotaListaFavoritosUser(app);
usersRoute.rotaLogin(app);