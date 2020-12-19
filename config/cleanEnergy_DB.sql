/*
DATA DEFINITION LANGUAGE (DDL) FOR CLEANENERGY DATABASE:
 DATABASE: 'cleanenergy_db'
 USER: 'aluno_IFSP'
 PASSWORD: '123456'
*/

CREATE TABLE IF NOT EXISTS `cleanenergy_db`.`chargeStation`(
    `idposto` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `bairro` VARCHAR(50) NOT NULL,
    `cidade` VARCHAR(50) NOT NULL,
    `cep` CHAR(9) NOT NULL,

    -- Coordenadas
    `lat` DOUBLE PRECISION NOT NULL,
    `long` DOUBLE PRECISION NOT NULL,
    `atendimento24` BOOLEAN NOT NULL,
    `imagem` VARCHAR(200) NOT NULL,
    `favorito` INT DEFAULT 0,
    -- ``
    PRIMARY KEY (`idposto`)
);