--
-- CREATING DATABASE
--
CREATE DATABASE  IF NOT EXISTS `LStandsForLibros`;
USE `LStandsForLibros`;

--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
  `user_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_img` varchar(50),
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
)

--
--MySQL enables client sessions to acquire table locks explicitly for the purpose of cooperating with other sessions
--for access to tables, or to prevent other sessions from modifying tables during periods when a session requires exclusive 
--access to them.
--
LOCK TABLES `users` WRITE;
--
--Dumping data into (*)
--
INSERT INTO `users` (user_img, first_name, last_name, category, email, password) VALUES ('user-image1.jpeg',"Maria", "Castro", "Vendor", "maria.castrico@gmail.com", "$2a$10$8l142Fw168WDdqInccjeNe8uOI1YaqNgwlZCN081obw1eU5Omw37O"),
('profile-pic_1637890207961.jpeg',"Kevin", "Simanca", "Vendor", "kevin.simanca@gmail.com", "$2a$10$tsnwAebeW3wopjurMBCQg.9uTyzFxQ5LiqQ7mVHbFTe.5yZPwzYjy"),
('profile-pic_1637890298959.jpg',"Elisaul", "García", "Vendor", "elisaul.garcia@gmail.com", "$2a$10$9gdQSCWUe4i2x.2OZfPMeux9naSEZMorTX5NFub0nRW.6wiUDDHJ."),
('profile-pic_1637890347724.jpeg',"Zabdiel", "Blanco", "buyer", "zabdiel.blanco@gmail.com", "$2a$10$CJ9qa2nbngu5K5H5aR7NZu/Hi9sBTW7Fb1nVUA23Fk4RJYAn9OvSK"),
('default.png',"Cosme", "Fulanito", "Vendor", "grhz@fulfhsfd.com", "$2hghrshthVzbeSVZtdMjbuj9cBVEJPmOhh1yXtYbO37tVUjknNV1u"),
('defafahada.png','Luís','Gonçalves', "Vendor", "vefr@fahhs.com", "$2a$10$g3JINQRgBVzfdgsfcBVEJPmOhh1yXtYbO37tVUjknNV1u"),
('hahahad.png','Bjørn','Hansen', "Vendor", "coahafdh@gsgad.com", "$2a$10$g3JINQRgBVzbeSVZtdMjfgtmOhh1yXtYbO37tVUjknNV1u");

--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `authors`;
CREATE TABLE `authors`(
  `authors_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `author_name` varchar(50) NOT NULL,
   PRIMARY KEY (`authors_id`)
)

LOCK TABLES `authors` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `authors` (author_name) VALUES ('Mr.Happy'),('AC/DC'),('Accept'),('Aerosmith'),('Alanis Morissette'),('Alice In Chains'),('Antônio Carlos Jobim');

--
-- Table structure for table `products`
--
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`(
  `product_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `product_img` varchar(50) NOT NULL,
  `product_name` smallint(6) NOT NULL,
  `isbn` varchar(13) NOT NULL,
  `genre_id` smallint(6) NOT NULL,
  `house_id` varchar(50),
  `price` int NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`product_id`)
)

LOCK TABLES `products` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `products` (product_img, product_name, isbn, genre_id, house_id, price, description) VALUES (1,'Happy ever after.png','Happy ever after',12345679910, "Romance", "Penguin Random House", 45000, "like it");

--
-- Table structure for table `carts`
--
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts`(
  `cart_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_id` smallint(6) NOT NULL,
  `product_id` smallint(6) NOT NULL,
  `quantity` smallint(6) NOT NULL,
  PRIMARY KEY (`cart_id`)
)

LOCK TABLES `carts` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `carts` (user_id, product_id, quantity) VALUES (1,2,1), (3,6,3), (6,4,7);

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres`(
  `genre_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `genre_name` char(50) NOT NULL,
  PRIMARY KEY (`genre_id`)
)

LOCK TABLES `genres` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `genres` (genre_name) VALUES ("Romance");


--
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses`(
  `house_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `house_name` char(50) NOT NULL,
  PRIMARY KEY (`house_id`)
)

LOCK TABLES `houses` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `houses` (house_name) VALUES ("Penguin Random House");