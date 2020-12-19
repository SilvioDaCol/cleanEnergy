let app = require('./config/server');
const rotas = require('./app/routes/routes');

rotas.rotaHome(app);
rotas.rotaEstudantes(app);
rotas.rotaProfessores(app);
rotas.rotaConteudo(app);
rotas.rotaInsereEstudante(app);
rotas.rotaEstudanteSalvar(app);
rotas.rotaInsereProfessor(app);
rotas.rotaProfessorSalvar(app);
rotas.rotaInsereConteudo(app);
rotas.rotaConteudoSalvar(app);