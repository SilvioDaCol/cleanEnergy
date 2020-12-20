/*
DATA DEFINITION LANGUAGE (DDL) FOR CLEANENERGY DATABASE:
 DATABASE: 'cleanenergy_db'
 USER: 'aluno_IFSP'
 PASSWORD: '123456'
*/

CREATE TABLE IF NOT EXISTS `cleanenergy_db`.`users`(
	`id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
	`url_image` VARCHAR(100) NOT NULL
);

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

CREATE TABLE IF NOT EXISTS `cleanenergy_db`.`feedback`(
    `idposto` INT NOT NULL,
    `star1` INT DEFAULT 0,
    `star2` INT DEFAULT 0,
    `star3` INT DEFAULT 0,
    `star4` INT DEFAULT 0,
    `star5` INT DEFAULT 0,

    FOREIGN KEY (`idposto`) REFERENCES `cleanenergy_db`.`chargeStation`(`idposto`)
      ON UPDATE CASCADE
      ON DELETE CASCADE
);