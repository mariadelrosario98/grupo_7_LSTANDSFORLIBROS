DROP DATABASE IF EXISTS `l_stands_for_libros`;
CREATE DATABASE `l_stands_for_libros`;

USE `l_stands_for_libros`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
	`img_path` varchar(50) DEFAULT "default.png",
    `first_name` varchar(50) NOT NULL,
    `last_name` varchar(50) NOT NULL,
    `category` varchar(10) NOT NULL,
    `email` varchar(50) NOT NULL,
    `password` char(60) NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `rating` int NOT NULL,
    `sales` int UNSIGNED NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `authors`;
CREATE TABLE `authors`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
	
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
	`img_path` varchar(50) DEFAULT "default.png",
	`name` varchar(50) NOT NULL,
    `author_id` int UNSIGNED NOT NULL,
    `isbn` varchar(13) NOT NULL,
	`genre_id` int UNSIGNED NOT NULL,
    `house_id` int UNSIGNED NOT NULL,
    `price` int UNSIGNED NOT NULL,
    `sales` int UNSIGNED NOT NULL,
    `description` text,
	
	PRIMARY KEY (`id`),
    FOREIGN KEY (`author_id`) REFERENCES `authors`(`id`),
    FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`),
    FOREIGN KEY (`house_id`) REFERENCES `houses`(`id`)
);

DROP TABLE IF EXISTS `user_product`;
CREATE TABLE `user_product`(
	`id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` int UNSIGNED NOT NULL,
    `product_id` int UNSIGNED NOT NULL,
	
	PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);