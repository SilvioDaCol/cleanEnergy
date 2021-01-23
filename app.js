let app = require('./config/server');
const usersRoute = require('./app/routes/usersRoutes');
const chargeStationsRoutes = require('./app/routes/chargeStationsRoutes');
const authCheck = require('./config/auth');


// Rotas user SEM autenticação
usersRoute.rotaLogin(app);
usersRoute.rotaCriaUser(app);

// Rotas postos SEM autenticação
chargeStationsRoutes.rotaListaPostos(app);
chargeStationsRoutes.rotaPostosDestaque(app);
chargeStationsRoutes.rotaPostoDetalhes(app);


app.use(authCheck);

// Rotas user COM autenticação
usersRoute.rotaGetUserById(app);
usersRoute.rotaGetUserByEmail(app);
usersRoute.rotaDeleteUser(app);
usersRoute.rotaEditaUser(app);
usersRoute.rotaFavoritoUser(app);
usersRoute.rotaListaFavoritosUser(app);

// Rotas postos SEM autenticação
chargeStationsRoutes.rotaCriaPosto(app);
chargeStationsRoutes.rotaDeletePosto(app);
chargeStationsRoutes.rotaEditaPosto(app);
chargeStationsRoutes.rotaGetFeedbacks(app);
chargeStationsRoutes.rotaCriaFeedback(app);
