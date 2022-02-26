CREATE DATABASE  IF NOT EXISTS `l_stands_for_libros` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `l_stands_for_libros`;
-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 45.79.201.214    Database: l_stands_for_libros
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Genres`
--

DROP TABLE IF EXISTS `Genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Genres` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genres`
--

LOCK TABLES `Genres` WRITE;
/*!40000 ALTER TABLE `Genres` DISABLE KEYS */;
INSERT INTO `Genres` VALUES (1,'Fantasía'),(2,'Ciencia ficción'),(3,'Distópico'),(4,'Acción'),(5,'Aventura'),(6,'Misterio'),(7,'Horror'),(8,'Thriller / suspenso'),(9,'Ficción histórica'),(10,'Romance'),(11,'Ficción contemporánea'),(12,'Ficcion literaria'),(13,'Realismo magico'),(14,'Novela gráfica'),(15,'Cuento'),(16,'Memorias y autobiografía'),(17,'Biografía'),(18,'Comida y bebida'),(19,'Arte y Fotografía'),(20,'Autoayuda'),(21,'Historia'),(22,'Viaje'),(23,'Crimen verdadero'),(24,'Humor'),(25,'Ensayos'),(26,'Guía / Cómo hacerlo'),(27,'Religión y espiritualidad'),(28,'Humanidades y Ciencias Sociales'),(29,'Paternidad y familias'),(30,'Tecnología científica'),(31,'Infantil');
/*!40000 ALTER TABLE `Genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductGenre`
--

DROP TABLE IF EXISTS `ProductGenre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductGenre` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `genre_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `ProductGenre_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`),
  CONSTRAINT `ProductGenre_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `Genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductGenre`
--

LOCK TABLES `ProductGenre` WRITE;
/*!40000 ALTER TABLE `ProductGenre` DISABLE KEYS */;
INSERT INTO `ProductGenre` VALUES (39,7,7),(40,7,8),(41,7,9),(42,7,17),(43,7,19),(44,3,4),(45,3,5),(46,3,26),(47,3,28),(48,3,31),(49,3,30),(59,1,3),(60,1,19),(61,1,21),(62,1,27),(63,1,28),(64,2,16),(65,2,17),(66,2,18),(67,2,22),(68,2,24),(69,2,25),(70,2,30),(71,4,2),(72,4,4),(73,4,8),(74,4,11),(75,5,8),(76,5,13),(77,5,20),(78,5,21),(79,5,22),(80,6,18),(81,6,22),(82,6,24),(83,6,25),(84,8,4),(85,8,10),(86,8,11),(87,8,16),(88,8,20),(89,8,31),(90,9,12),(91,9,15),(92,9,22),(93,9,23),(94,9,26),(95,9,27),(96,9,29),(97,10,3),(98,10,4),(99,10,5),(100,10,20),(101,10,28);
/*!40000 ALTER TABLE `ProductGenre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `img_path` varchar(50) DEFAULT 'default.png',
  `name` varchar(255) NOT NULL,
  `author` varchar(50) NOT NULL,
  `isbn` varchar(13) NOT NULL,
  `house` varchar(50) NOT NULL,
  `price` int unsigned NOT NULL,
  `sales` int unsigned DEFAULT '0',
  `rating` int DEFAULT '0',
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'product_img_1644961635547.png','American Marxism','Mark R. Levin','9781501135972','Penguin Random House',50000,0,0,'The seven-time #1 New York Times bestselling author, Fox News star, and radio host Mark R. Levin explains how the dangers he warned against in the “timely yet timeless” (David Limbaugh, author of Jesus Is Risen) bestseller Liberty and Tyranny have come to pass.'),(2,'product_img_1645113388565.jpeg','Crying in H Mart','Michelle Zauner','9780525657743','Dabvine',70500,0,0,'An unflinching, powerful memoir about growing up Korean American, losing her mother, and forging her own identity. In this exquisite story of family, food, grief, and endurance, Michelle Zauner proves herself far more than a dazzling singer, songwriter, and guitarist.'),(3,'educated.jpeg','Educated: A Memoir','Tara Westover','9780099511021','Tagfeed',30000,0,0,'Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her \"head-for-the-hills bag\". In the summer.'),(4,'harlem_shuffle.jpeg','Harlem Shuffle','Colson Whitehead','0385545134','Mymm',9000,0,0,'\"Ray Carney was only slightly bent when it came to being crooked...\" To his customers and neighbors on 125th street, Carney is an upstanding salesman of reasonably priced furniture, making a decent life for himself and his family. He and his wife Elizabeth are expecting their second child...'),(5,'Hillary_clinton.png','State of Terror','Louise Penny & Hillary Rodham Clinton','9783749903276','LiveZ',20000,0,0,'After a tumultuous period in American politics, a new administration has just been sworn in, and to everyone\'s surprise the president chooses a political enemy for the vital position of secretary of state.'),(6,'people_we_meet.png','People We Meet on Vacation','Emily Henry','9781984806758','Voomm',30000,0,0,'Poppy and Alex. Alex and Poppy. They have nothing in common. She\'s a wild child; he wears khakis. She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college many years ago.'),(7,'peril.jpg','Peril','Bob Woodward & Robert Costa','9781982182915','Kimia',70500,0,0,'The transition from President Donald J. Trump to President Joseph R. Biden Jr. stands as one of the most dangerous periods in American history. But as # 1 internationally bestselling author Bob Woodward and acclaimed reporter Robert Costa reveal for the first time.'),(8,'product_img_1643305273759.jpg','The Subtle Art of Not Giving a F*ck','Mark Manson','9780062641540','Topicblab',23200,0,0,'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be \"positive\" all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking'),(9,'theworldtravel.jpg','World Travel: An Irreverent Guide','Anthony Bourdain & Laurie Woolever','9781526630216','Gabspot',90000,0,0,'A guide to some of the world\'s most fascinating places, as seen and experienced by writer, television host, and relentlessly curious traveler Anthony Bourdain.'),(10,'think_again.jpeg','Think Again: The Anger of Knowing What You Don\'t Know','Adam H. Grant','9780593298749','Podcat',65000,0,0,'Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong. Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink their stances and that leaders who admit they don\'t know something and seek critical feedback lead more productive and innovative teams.');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserProduct`
--

DROP TABLE IF EXISTS `UserProduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserProduct` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `quantity` int DEFAULT '1',
  `rating` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `UserProduct_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`),
  CONSTRAINT `UserProduct_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserProduct`
--

LOCK TABLES `UserProduct` WRITE;
/*!40000 ALTER TABLE `UserProduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserProduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `img_path` varchar(50) DEFAULT 'default.png',
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `category` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'profile_pic_1645751164909.jpg','Mario','Castro','vendor','maria.castrico@gmail.com','$2a$10$8l142Fw168WDdqInccjeNe8uOI1YaqNgwlZCN081obw1eU5Omw37O'),(2,'profile-pic_1637890207961.jpeg','Kevin','Simanca','vendor','kevin.simanca@gmail.com','$2a$10$tsnwAebeW3wopjurMBCQg.9uTyzFxQ5LiqQ7mVHbFTe.5yZPwzYjy'),(3,'profile-pic_1637890298959.jpg','Elisaul','García','vendor','elisaul.garcia@gmail.com','$2a$10$9gdQSCWUe4i2x.2OZfPMeux9naSEZMorTX5NFub0nRW.6wiUDDHJ.'),(4,'profile-pic_1637890347724.jpeg','Zabdiel','Blanco','buyer','zabdiel.blanco@gmail.com','$2a$10$CJ9qa2nbngu5K5H5aR7NZu/Hi9sBTW7Fb1nVUA23Fk4RJYAn9OvSK'),(5,'profile_pic_1644962996045.png','Cosme','Fulanito','vendor','cosme@fulanito.com','$2a$10$Ga0M.w97M/bA.OEvQvE4kO3rCAqX5rk4zqQ3ZosCLqYNkLuSQK26C'),(12,'profile_pic_1643332120610.jpeg','FRAN','mantilla','buyer','fran@cohen.com','$2a$10$U.LmvIqBafKgrt33y33bc..kRSO6N12O7JB0PLf207EVyPlAWLAKW'),(17,'default.png','Andrew','Smith','buyer','andrew@smith.com','$2a$10$Qax2xkgyw4nsrv9Y2czd7eC6IekubpC/UF36Cf7Cg9XJFiWm.rxTW'),(18,'profile_pic_1643752108432.jpg','elisaul','garcia','buyer','elisaul-garcia@hotmail.com','$2a$10$IyUILzM0JO126wS352878uLjTMiQ00HvfswhdvVgrh7XvqRYldP22');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('9ef692fd-5e4b-4155-98cf-1c5c7d895f4a','051777521f0d786d45a49090a72b3c37d53128ca10f1a1c0555a17322bf3de1f','2022-02-25 00:30:10.998','20220225003009_introspected_change',NULL,NULL,'2022-02-25 00:30:09.847',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'l_stands_for_libros'
--

--
-- Dumping routines for database 'l_stands_for_libros'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-25 20:02:56
