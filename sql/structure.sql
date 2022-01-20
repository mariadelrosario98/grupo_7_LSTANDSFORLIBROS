DROP DATABASE IF EXISTS `l_stands_for_libros`;
CREATE DATABASE `l_stands_for_libros`;

USE `l_stands_for_libros`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
	`img_path` varchar(50) DEFAULT "default.png",
    `first_name` varchar(50) NOT NULL,
    `last_name` varchar(50) NOT NULL,
    `category` varchar(10) NOT NULL,
    `email` varchar(50) NOT NULL UNIQUE,
    `password` char(60) NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Genres`;
CREATE TABLE `Genres`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Houses`;
CREATE TABLE `Houses`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Authors`;
CREATE TABLE `Authors`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
	`img_path` varchar(50) DEFAULT "default.png",
	`name` varchar(255) NOT NULL,
    `author_id` int UNSIGNED NOT NULL,
    `isbn` varchar(13) NOT NULL,
    `house_id` int UNSIGNED NOT NULL,
    `price` int UNSIGNED NOT NULL,
    `sales` int UNSIGNED DEFAULT 0,
    `rating` int DEFAULT 0,
    `description` text,
	
	PRIMARY KEY (`id`),
    FOREIGN KEY (`author_id`) REFERENCES `Authors`(`id`),
    FOREIGN KEY (`house_id`) REFERENCES `Houses`(`id`)
);

DROP TABLE IF EXISTS `UserProduct`;
CREATE TABLE `UserProduct`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` int UNSIGNED NOT NULL,
    `product_id` int UNSIGNED NOT NULL,
    `quantity` int DEFAULT 1,
    `rating` tinyint UNSIGNED,
	
	PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
    FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`)
);

DROP TABLE IF EXISTS `ProductGenre`;
CREATE TABLE `ProductGenre`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_id` int UNSIGNED NOT NULL,
    `genre_id` int UNSIGNED NOT NULL,
	
	PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`),
    FOREIGN KEY (`genre_id`) REFERENCES `Genres`(`id`)
);

