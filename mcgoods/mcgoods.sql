-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: mcgoods
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.18.04.1

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
-- Table structure for table `App_goodsinfo`
--

DROP TABLE IF EXISTS `App_goodsinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_goodsinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsid` varchar(100) NOT NULL,
  `path1` varchar(100) NOT NULL,
  `path2` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `active` varchar(100) NOT NULL,
  `shipment` varchar(100) NOT NULL,
  `menoy` varchar(100) NOT NULL,
  `oldmenoy` varchar(100) NOT NULL,
  `standard` varchar(100) NOT NULL,
  `choosecolor` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `imgt` varchar(100) NOT NULL,
  `sall` varchar(100) NOT NULL,
  `smallimg` varchar(100) NOT NULL,
  `aveimg` varchar(100) NOT NULL,
  `bigimg` varchar(100) NOT NULL,
  `goodsintroduce` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `otherbarnd` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `App_goodsinfo_goodsid_67905afb_uniq` (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_goodsinfo`
--

LOCK TABLES `App_goodsinfo` WRITE;
/*!40000 ALTER TABLE `App_goodsinfo` DISABLE KEYS */;
INSERT INTO `App_goodsinfo` VALUES (1,'1','床椅寝具','寝具','良良16格彩麻棉隔尿垫(标准加大) 粉色81*60cm','天天特价','杭州1号保税仓发货','63.00','102','images/small11.jpg','#粉色#蓝色','images/ave14.jpg','images/big11.jpg','959','#images/small11.jpg#images/small12.jpg#images/small13.jpg#images/small14.jpg#images/small15.jpg','#images/ave11.jpg#images/ave12.jpg#images/ave13.jpg#images/ave14.jpg#images/ave15.jpg','#images/big11.jpg#images/big12.jpg#images/big13.jpg#images/big14.jpg#images/big15.jpg','#商品名称：良良16格彩麻棉隔尿垫(标准加大) 粉色81*6\",\"产地：中国#images/20160714125155_555_6360409776244208478768563.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri'),(2,'2','洗护用品','宝宝洗浴','哈罗闪婴儿二合一500ml+mini七色小鸭(颜色随机)','天天特价','母婴之家发货','99.00','109','images/small21.jpg','#粉色#蓝色','images/ave21.jpg','images/big21.jpg','543','#images/small21.jpg#images/small22.jpg#images/small23.jpg#images/small24.jpg#images/small25.jpg','#images/ave21.jpg#images/ave22.jpg#images/ave23.jpg#images/ave24.jpg#images/ave25.jpg','#images/big21.jpg#images/big22.jpg#images/big23.jpg#images/big24.jpg#images/big25.jpg','#商品名称：惠氏S-26铂臻幼儿乐3段（12-36月）800g#images/20160616145859_555_6360168610007242895525192.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri'),(3,'3','床椅寝具','寝具','花王婴儿纸尿裤L54片（新老包装交替）','天天特价','杭州1号保税仓发货','125.00','102','images/small21.jpg','#粉色#蓝色','images/ave31.jpg','images/big11.jpg','648','#images/small11.jpg#images/small12.jpg#images/small13.jpg#images/small14.jpg#images/small15.jpg','#images/ave11.jpg#images/ave12.jpg#images/ave13.jpg#images/ave14.jpg#images/ave15.jpg','#images/big11.jpg#images/big12.jpg#images/big13.jpg#images/big14.jpg#images/big15.jpg','#商品名称：良良16格彩麻棉隔尿垫(标准加大) 粉色81*6\",\"产地：中国#images/20160714125155_555_6360409776244208478768563.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri'),(4,'4','床椅寝具','寝具','加拿大PRECIDIO Snack in the Box分隔零食盒 355ml 粉色','天天特价','杭州1号保税仓发货','59.90','102','images/small21.jpg','#粉色#蓝色','images/ave41.jpg','images/big11.jpg','648','#images/small11.jpg#images/small12.jpg#images/small13.jpg#images/small14.jpg#images/small15.jpg','#images/ave11.jpg#images/ave12.jpg#images/ave13.jpg#images/ave14.jpg#images/ave15.jpg','#images/big11.jpg#images/big12.jpg#images/big13.jpg#images/big14.jpg#images/big15.jpg','#商品名称：良良16格彩麻棉隔尿垫(标准加大) 粉色81*6\",\"产地：中国#images/20160714125155_555_6360409776244208478768563.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri'),(5,'5','床椅寝具','寝具','Aptamil爱他美3段幼儿配方奶粉（12-36个月）800g （德国原装进口）新包装','天天特价','杭州1号保税仓发货','199.00','102','images/small21.jpg','#粉色#蓝色','images/ave51.jpg','images/big11.jpg','396','#images/small11.jpg#images/small12.jpg#images/small13.jpg#images/small14.jpg#images/small15.jpg','#images/ave11.jpg#images/ave12.jpg#images/ave13.jpg#images/ave14.jpg#images/ave15.jpg','#images/big11.jpg#images/big12.jpg#images/big13.jpg#images/big14.jpg#images/big15.jpg','#商品名称：良良16格彩麻棉隔尿垫(标准加大) 粉色81*6\",\"产地：中国#images/20160714125155_555_6360409776244208478768563.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri'),(6,'6','床椅寝具','寝具','Yookidoo 音乐喷泉（洗澡鸭子）(颜色随机)','天天特价','杭州1号保税仓发货','209.00','102','images/small21.jpg','#粉色#蓝色','images/ave61.jpg','images/big11.jpg','648','#images/small11.jpg#images/small12.jpg#images/small13.jpg#images/small14.jpg#images/small15.jpg','#images/ave11.jpg#images/ave12.jpg#images/ave13.jpg#images/ave14.jpg#images/ave15.jpg','#images/big11.jpg#images/big12.jpg#images/big13.jpg#images/big14.jpg#images/big15.jpg','#商品名称：良良16格彩麻棉隔尿垫(标准加大) 粉色81*6\",\"产地：中国#images/20160714125155_555_6360409776244208478768563.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri'),(7,'7','床椅寝具','寝具','保税仓：美国Ddrops婴儿维生素D3滴剂2.5ml','天天特价','杭州1号保税仓发货','90.00','102','images/small21.jpg','#粉色#蓝色','images/ave71.jpg','images/big11.jpg','648','#images/small11.jpg#images/small12.jpg#images/small13.jpg#images/small14.jpg#images/small15.jpg','#images/ave11.jpg#images/ave12.jpg#images/ave13.jpg#images/ave14.jpg#images/ave15.jpg','#images/big11.jpg#images/big12.jpg#images/big13.jpg#images/big14.jpg#images/big15.jpg','#商品名称：良良16格彩麻棉隔尿垫(标准加大) 粉色81*6\",\"产地：中国#images/20160714125155_555_6360409776244208478768563.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri'),(8,'8','床椅寝具','寝具','Minimoto小米米15Q小蘑菇长袖 对襟上衣6:12月/康乃馨粉73/48','天天特价','杭州1号保税仓发货','119.00','102','images/small21.jpg','#粉色#蓝色','images/ave81.jpg','images/big11.jpg','648','#images/small11.jpg#images/small12.jpg#images/small13.jpg#images/small14.jpg#images/small15.jpg','#images/ave11.jpg#images/ave12.jpg#images/ave13.jpg#images/ave14.jpg#images/ave15.jpg','#images/big11.jpg#images/big12.jpg#images/big13.jpg#images/big14.jpg#images/big15.jpg','#商品名称：良良16格彩麻棉隔尿垫(标准加大) 粉色81*6\",\"产地：中国#images/20160714125155_555_6360409776244208478768563.jpg','#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围#婴儿枕/抱枕#包巾/抱被/抱#床褥垫/尿垫#床围','#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri#康贝/Combi#小米米/Minim#雅氏#伊诗比蒂#蓓宝#美素佳儿/Fri');
/*!40000 ALTER TABLE `App_goodsinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_goucar`
--

DROP TABLE IF EXISTS `App_goucar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_goucar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `isselect` tinyint(1) NOT NULL,
  `goodsinfo_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `App_goucar_goodsinfo_id_0934ea4b_fk_App_goodsinfo_id` (`goodsinfo_id`),
  KEY `App_goucar_user_id_b982a58c_fk_App_user_id` (`user_id`),
  CONSTRAINT `App_goucar_goodsinfo_id_0934ea4b_fk_App_goodsinfo_id` FOREIGN KEY (`goodsinfo_id`) REFERENCES `App_goodsinfo` (`id`),
  CONSTRAINT `App_goucar_user_id_b982a58c_fk_App_user_id` FOREIGN KEY (`user_id`) REFERENCES `App_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_goucar`
--

LOCK TABLES `App_goucar` WRITE;
/*!40000 ALTER TABLE `App_goucar` DISABLE KEYS */;
INSERT INTO `App_goucar` VALUES (22,9,1,2,5),(23,3,1,1,5);
/*!40000 ALTER TABLE `App_goucar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_lunbo`
--

DROP TABLE IF EXISTS `App_lunbo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_lunbo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_lunbo`
--

LOCK TABLES `App_lunbo` WRITE;
/*!40000 ALTER TABLE `App_lunbo` DISABLE KEYS */;
INSERT INTO `App_lunbo` VALUES (1,'images/20160912154146_10_1090x350.jpg'),(2,'images/20160920164147_10_1090.jpg'),(3,'images/20160922124914_10_1090x350.jpg'),(4,'images/20160927181214_10_1090.jpg'),(5,'images/20160928085547_10_1090x350.jpg');
/*!40000 ALTER TABLE `App_lunbo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_special`
--

DROP TABLE IF EXISTS `App_special`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_special` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part` int(11) NOT NULL,
  `bg_img` varchar(100) NOT NULL,
  `htwo` varchar(100) NOT NULL,
  `spano` varchar(100) NOT NULL,
  `menoy` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_special`
--

LOCK TABLES `App_special` WRITE;
/*!40000 ALTER TABLE `App_special` DISABLE KEYS */;
INSERT INTO `App_special` VALUES (1,1,'images/20160930104414_10_1182.jpg','周年庆奶粉','满888送周庆礼',95),(2,1,'images/20160930102021_10_1182.jpg','周年庆辅食','美味满168减60',4),(3,1,'images/20160930103824_10_1182.jpg','周年庆玩具','1元惊喜疯狂秒',3),(4,1,'images/20160921174014_10_1182x590.jpg','日本贝亲专场','满129送奶瓶刷  满199送香皂',19),(5,1,'images/20160920165227_10_1182x590lk.jpg','乐卡低至178元','金秋出行  便携舒服',178),(6,1,'images/20160929093158_10_1182x590.jpg','国庆放假大清仓','萌宝用品限量秒',96),(7,2,'images/20160413142131_44_95220.jpg','Gerber/嘉宝草莓苹果味星星米饼42g','Gerber/嘉宝草莓苹果味星星米饼可爱小星星造型，入口即花锻炼宝宝手脚协调',45),(8,2,'images/20160308173429_44_70594.jpg','雅培菁智有机3段幼儿配方奶粉900g','雅培菁智有机3段幼儿配方奶粉900g',318),(9,2,'images/20160114132245_44_151580dawangs84.jpg','保税仓：GOO.N大王婴幼儿纸尿裤S84片适...','增加细滑度3D立体压纹添加天然维他命E',113);
/*!40000 ALTER TABLE `App_special` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `App_user`
--

DROP TABLE IF EXISTS `App_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `App_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(80) NOT NULL,
  `username` varchar(80) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `App_user`
--

LOCK TABLES `App_user` WRITE;
/*!40000 ALTER TABLE `App_user` DISABLE KEYS */;
INSERT INTO `App_user` VALUES (5,'atom','阿童木','123456','13476270392');
/*!40000 ALTER TABLE `App_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add lunbo',7,'add_lunbo'),(20,'Can change lunbo',7,'change_lunbo'),(21,'Can delete lunbo',7,'delete_lunbo'),(22,'Can add special',8,'add_special'),(23,'Can change special',8,'change_special'),(24,'Can delete special',8,'delete_special'),(25,'Can add user',9,'add_user'),(26,'Can change user',9,'change_user'),(27,'Can delete user',9,'delete_user'),(28,'Can add goodsinfo',10,'add_goodsinfo'),(29,'Can change goodsinfo',10,'change_goodsinfo'),(30,'Can delete goodsinfo',10,'delete_goodsinfo'),(31,'Can add goucar',11,'add_goucar'),(32,'Can change goucar',11,'change_goucar'),(33,'Can delete goucar',11,'delete_goucar');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(10,'App','goodsinfo'),(11,'App','goucar'),(7,'App','lunbo'),(8,'App','special'),(9,'App','user'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'App','0001_initial','2018-11-01 14:11:03.111921'),(2,'contenttypes','0001_initial','2018-11-01 14:11:03.154337'),(3,'auth','0001_initial','2018-11-01 14:11:03.436414'),(4,'admin','0001_initial','2018-11-01 14:11:03.530490'),(5,'admin','0002_logentry_remove_auto_add','2018-11-01 14:11:03.567615'),(6,'contenttypes','0002_remove_content_type_name','2018-11-01 14:11:03.657925'),(7,'auth','0002_alter_permission_name_max_length','2018-11-01 14:11:03.700316'),(8,'auth','0003_alter_user_email_max_length','2018-11-01 14:11:03.745774'),(9,'auth','0004_alter_user_username_opts','2018-11-01 14:11:03.767664'),(10,'auth','0005_alter_user_last_login_null','2018-11-01 14:11:03.810430'),(11,'auth','0006_require_contenttypes_0002','2018-11-01 14:11:03.816273'),(12,'auth','0007_alter_validators_add_error_messages','2018-11-01 14:11:03.833351'),(13,'auth','0008_alter_user_username_max_length','2018-11-01 14:11:03.900135'),(14,'sessions','0001_initial','2018-11-01 14:11:03.927780'),(15,'App','0002_auto_20181103_0853','2018-11-03 08:53:27.629035'),(16,'App','0002_auto_20181103_0912','2018-11-03 09:12:22.006190'),(17,'App','0002_auto_20181103_0931','2018-11-03 09:31:48.671768'),(18,'App','0003_auto_20181103_0946','2018-11-03 09:46:20.241507'),(19,'App','0004_auto_20181105_1155','2018-11-05 11:55:47.304131'),(20,'App','0002_remove_user_token','2018-11-09 06:48:42.841740'),(21,'App','0003_goucar','2018-11-09 11:38:30.624514');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('26sfshcf94qgd9ktfw7smo0letgi7umy','OGU4NWU0MjJkNjc3NDcyYjVmMTI4NTMyNWQzZjZlMTY3NDI1YzhjYTp7ImFjY291bnQiOiJhdG9tIn0=','2018-11-25 12:13:55.577387');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-12 15:31:26
