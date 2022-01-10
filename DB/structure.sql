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
  `user_id` smallint(6) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `user_img` varchar(50),
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
INSERT INTO `users` VALUES (1,'About.png',"Carl", "Lagerfeld", "Vendor", "carlie@gmail.com", "uhui427257")

--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `authors`;
CREATE TABLE `authors`(
  `authors_id` smallint(6) NOT NULL,
  `author_name` varchar(50) NOT NULL,
   PRIMARY KEY (`authors_id`)
)

LOCK TABLES `authors` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `authors` VALUES (1,'Mr.Happy');

--
-- Table structure for table `products`
--
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`(
  `product_id` smallint(6) NOT NULL,
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
INSERT INTO `products` VALUES (1,'Happy ever after.png','Happy ever after',12345679910, "Romance", "Penguin Random House", 45000, "like it");

--
-- Table structure for table `carts`
--
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts`(
  `cart_id` smallint(6) NOT NULL,
  `user_id` smallint(6) NOT NULL,
  `product_id` smallint(6) NOT NULL,
  `quantity` smallint(6) NOT NULL,
  PRIMARY KEY (`cart_id`)
)

LOCK TABLES `carts` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `carts` VALUES (1,1,2,1);

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts`(
  `cart_id` smallint(6) NOT NULL,
  `user_id` smallint(6) NOT NULL,
  `product_id` smallint(6) NOT NULL,
  `quantity` smallint(6) NOT NULL,
  PRIMARY KEY (`cart_id`)
)

LOCK TABLES `carts` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `carts` VALUES (1,1,2,1);

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
CREATE TABLE `genres`(
  `genre_id` smallint(6) NOT NULL,
  `genre_name` char(50) NOT NULL,
  PRIMARY KEY (`genre_id`)
)

LOCK TABLES `genres` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `genres` VALUES (1,"Romance");


--
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses`(
  `house_id` smallint(6) NOT NULL,
  `house_name` char(50) NOT NULL,
  PRIMARY KEY (`house_id`)
)

LOCK TABLES `houses` WRITE;

--
--Dumping data into (*)
--
INSERT INTO `houses` VALUES (1,"Penguin Random House");