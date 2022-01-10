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
  PRIMARY KEY (`user_id`),
)

--
--MySQL enables client sessions to acquire table locks explicitly for the purpose of cooperating with other sessions
--for access to tables, or to prevent other sessions from modifying tables during periods when a session requires exclusive 
--access to them.
--
LOCK TABLES `users` WRITE;
--
--Dumping data into 
--
INSERT INTO `users` VALUES (1,'About.png',"Carl", "Lagerfeld", "Vendor", "carlie@gmail.com", "uhui427257")