let app = require('./config/server');
const rotas = require('./app/routes/routes');
const { rotaEditaPosto } = require('./app/routes/routes');

// rotas.rotaEstudantes(app);
// rotas.rotaProfessores(app);
// rotas.rotaConteudo(app);
// rotas.rotaInsereEstudante(app);
// rotas.rotaEstudanteSalvar(app);
// rotas.rotaInsereProfessor(app);
// rotas.rotaProfessorSalvar(app);
// rotas.rotaInsereConteudo(app);
// rotas.rotaConteudoSalvar(app);

rotas.rotaCriaUser(app);
rotas.rotaListaUser(app);
rotas.rotaDeleteUser(app);
rotas.rotaEditaUser(app);
rotas.rotaFavoritoUser(app);
rotas.rotaListaFavoritosUser(app);
rotas.rotaLogin(app);

rotas.rotaCriaPosto(app);
rotas.rotaListaPostos(app);
rotas.rotaPostosDestaque(app);
rotas.rotaPostoDetalhes(app);
rotas.rotaDeletePosto(app);
rotas.rotaEditaPosto(app);

rotas.rotaListaFeedbacks(app);
rotas.rotaCriaFeedback(app);
