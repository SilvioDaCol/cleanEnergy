let app = require('./config/server');
const usersRoute = require('./app/routes/usersRoutes');
const chargeStationsRoutes = require('./app/routes/chargeStationsRoutes');

usersRoute.rotaCriaUser(app);
usersRoute.rotaGetUserById(app);
usersRoute.rotaGetUserByEmail(app);
usersRoute.rotaDeleteUser(app);
usersRoute.rotaEditaUser(app);
usersRoute.rotaFavoritoUser(app);
usersRoute.rotaListaFavoritosUser(app);
usersRoute.rotaLogin(app);

chargeStationsRoutes.rotaCriaPosto(app);
chargeStationsRoutes.rotaListaPostos(app);
chargeStationsRoutes.rotaPostosDestaque(app);
chargeStationsRoutes.rotaPostoDetalhes(app);
chargeStationsRoutes.rotaDeletePosto(app);
chargeStationsRoutes.rotaEditaPosto(app);
chargeStationsRoutes.rotaGetFeedbacks(app);
chargeStationsRoutes.rotaCriaFeedback(app);
