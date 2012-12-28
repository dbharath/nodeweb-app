-- MySQL dump 10.13  Distrib 5.1.66, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: webapp
-- ------------------------------------------------------
-- Server version	5.1.66-0ubuntu0.11.10.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `friends` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(9) DEFAULT NULL,
  `friend_id` mediumint(9) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friends`
--

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (1,1,2),(2,1,3),(3,1,4),(4,1,5),(5,1,8),(6,1,8),(7,1,11),(8,1,11),(9,1,8),(10,1,8),(11,1,11),(12,1,11),(13,1,10),(14,1,10),(15,1,14),(16,1,14),(17,1,13),(18,1,13),(19,1,20),(20,1,15),(21,1,18),(22,1,20),(23,1,18),(24,1,23),(25,1,25),(26,23,1),(27,23,1),(28,23,25),(29,23,25),(30,23,24),(31,23,24),(32,23,11),(33,23,11),(34,23,9),(35,23,9),(36,23,2),(37,23,2),(38,23,4),(39,23,4),(40,23,12),(41,23,12),(42,27,5),(43,27,5),(44,1,24),(45,1,24),(46,1,28),(47,1,28),(48,1,24),(49,1,24),(50,1,28),(51,1,28),(52,1,7),(53,1,7),(54,1,7),(55,1,9),(56,1,9),(57,1,12),(58,1,12),(59,1,26),(60,1,26),(61,1,27),(62,1,27),(63,1,16),(64,1,16),(65,1,22),(66,1,22),(67,1,22),(68,1,21),(69,1,16),(70,23,5),(71,23,5),(72,23,5),(73,23,5),(74,23,5),(75,23,5),(76,23,5),(77,23,5),(78,23,7),(79,23,13);
/*!40000 ALTER TABLE `friends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pp_runner`
--

DROP TABLE IF EXISTS `pp_runner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pp_runner` (
  `id` mediumint(9) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(9) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pp_runner`
--

LOCK TABLES `pp_runner` WRITE;
/*!40000 ALTER TABLE `pp_runner` DISABLE KEYS */;
/*!40000 ALTER TABLE `pp_runner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` mediumint(9) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `firstname` varchar(255) NOT NULL DEFAULT '',
  `lastname` varchar(255) NOT NULL DEFAULT '',
  `middlename` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `oldpassword` varchar(255) DEFAULT NULL,
  `primaryphone` varchar(255) DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isactive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'piy@uo.com','peeyush','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-26 11:29:00','2012-12-26 11:29:00',1),(2,'piy@uio.com','amit','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-26 11:36:46','2012-12-26 11:36:46',1),(4,'iu@ui.com','pou','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-26 11:37:55','2012-12-26 11:37:55',1),(5,'julie.jul@gmail.com','julie','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-26 11:46:13','2012-12-26 11:46:13',1),(7,'f@q.com','k','',NULL,'f@q.com',NULL,NULL,NULL,NULL,'2012-12-26 12:20:03','2012-12-26 12:20:03',1),(8,'k@f.com','k','',NULL,'k@f.com',NULL,NULL,NULL,NULL,'2012-12-26 12:35:33','2012-12-26 12:35:33',1),(9,'k@w.com','k','',NULL,'k@w.com',NULL,NULL,NULL,NULL,'2012-12-26 12:36:26','2012-12-26 12:36:26',1),(10,'l@hh.com','l','',NULL,'l@hh.com',NULL,NULL,NULL,NULL,'2012-12-26 12:37:52','2012-12-26 12:37:52',1),(11,'k@ww.com','k','',NULL,'k@ww.com',NULL,NULL,NULL,NULL,'2012-12-26 12:39:52','2012-12-26 12:39:52',1),(12,'k@j.com','k','',NULL,'k@j.com',NULL,NULL,NULL,NULL,'2012-12-26 12:40:47','2012-12-26 12:40:47',1),(13,'l@c.com','l','',NULL,'k@j.com',NULL,NULL,NULL,NULL,'2012-12-26 12:42:00','2012-12-26 12:42:00',1),(14,'k@m.com','k','',NULL,'k@m.com',NULL,NULL,NULL,NULL,'2012-12-26 12:42:49','2012-12-26 12:42:49',1),(15,'jkj@r.com','k','',NULL,'jkj@r.com',NULL,NULL,NULL,NULL,'2012-12-26 12:47:28','2012-12-26 12:47:28',1),(16,'kkk@kk.com','k','',NULL,'kkk@kk.com',NULL,NULL,NULL,NULL,'2012-12-26 12:50:27','2012-12-26 12:50:27',1),(18,'jjj@jj.com','ll','',NULL,'jjj@jj.com',NULL,NULL,NULL,NULL,'2012-12-26 12:52:23','2012-12-26 12:52:23',1),(20,'aaa@aa.com','k','',NULL,'aaa@aa.com',NULL,NULL,NULL,NULL,'2012-12-26 12:53:43','2012-12-26 12:53:43',1),(21,'piy@uyi.com','Peeyush','',NULL,'12345678',NULL,NULL,NULL,NULL,'2012-12-26 12:56:44','2012-12-26 12:56:44',1),(22,'k@kk.com','k','',NULL,'k@kk.com',NULL,NULL,NULL,NULL,'2012-12-26 12:57:45','2012-12-26 12:57:45',1),(23,'peeyushsrivastava03@gmail.com','Peeyush','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-27 06:09:40','2012-12-27 06:09:40',1),(24,'peeyush01@gmail.com','Peeyush','',NULL,'1224567',NULL,NULL,NULL,NULL,'2012-12-27 11:37:19','2012-12-27 11:37:19',1),(25,'Vikash.kumar@gmail.com','Vikash','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-27 11:38:54','2012-12-27 11:38:54',1),(26,'p@p.com','peeyush','',NULL,'12345678',NULL,NULL,NULL,NULL,'2012-12-27 11:47:05','2012-12-27 11:47:05',1),(27,'piu@uii.com','Peeyush','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-27 13:07:38','2012-12-27 13:07:38',1),(28,'abaghel@u.com','amrata','',NULL,'1234567',NULL,NULL,NULL,NULL,'2012-12-27 20:44:08','2012-12-27 20:44:08',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_message`
--

DROP TABLE IF EXISTS `user_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_message` (
  `id` mediumint(9) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(9) DEFAULT NULL,
  `message` text,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_message`
--

LOCK TABLES `user_message` WRITE;
/*!40000 ALTER TABLE `user_message` DISABLE KEYS */;
INSERT INTO `user_message` VALUES (1,1,'Hey user I am updating it..','2012-12-28 09:47:38','2012-12-28 09:47:38'),(2,2,'hiii','2012-12-28 09:50:38','2012-12-28 09:52:13'),(3,14,'hiii','2012-12-28 09:50:38','2012-12-28 09:57:18'),(4,1,'Drilll down....!!!\n        ','2012-12-28 10:06:24','2012-12-28 10:06:24'),(5,1,'log... k...\n        ','2012-12-28 10:08:20','2012-12-28 10:08:20');
/*!40000 ALTER TABLE `user_message` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-12-28 17:49:37
