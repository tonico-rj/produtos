CREATE DATABASE `productsdb`
;

CREATE TABLE `productsdb`.`products` (
	`id` 	 	INT	NOT NULL AUTO_INCREMENT ,
	`name` 		VARCHAR(255)	NOT NULL,
	`price`		FLOAT NOT null,
	`category`  INT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;


CREATE TABLE `productsdb`.`category` (
	`id` 	 	INT	NOT NULL AUTO_INCREMENT ,
	`name` 		VARCHAR(255)	NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;
