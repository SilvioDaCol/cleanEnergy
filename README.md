# cleanEnergy
Sistema de mapeamento de pontos de recarga para carros elétricos

```
Projeto para a disciplina: Desenvolvimento de Sistemas WEB

Curso: Análise e Desenvolvimento de Sistemas

6º semestre 
```
<hr>

#### Setup e testes da API:
1. Criar banco de dados (mySQL): **cleanenergy_db**;
2. Rodar script cleanEnergy_DB.sql no mySQL localizado em ./config;
3. Configurar dados de acesso ao banco em **dbConnectionMY.js**  na pasta ./config;
4. Executar o comando ```node app.js``` 
5. No software **Insomnia**, importar o arquivo **Insomnia_2021-01-14_v2.json** localizado na pasta ./app/assets;
6. Executar as requisições e verificar os resultados obtidos.

<hr>

#### Autenticação:
**Rotas user SEM autenticação**
```
usersRoute.rotaLogin(app);
```

**Rotas postos SEM autenticação**
```
rotaListaPostos
rotaPostosDestaque
rotaPostoDetalhes
```

**Rotas user COM autenticação**
```
rotaCriaUser
rotaGetUserById
rotaGetUserByEmail
rotaDeleteUser
rotaEditaUser
rotaFavoritoUser
rotaListaFavoritosUser
```

**Rotas postos SEM autenticação**
```
rotaCriaPosto
rotaDeletePosto
rotaEditaPosto
rotaGetFeedbacks
rotaCriaFeedback
```

<hr>

## Autores:

[Paulo Belucci](https://github.com/phbelucci)

[Silvio da Col](https://github.com/SilvioDaCol)