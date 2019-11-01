-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.0.96-community-nt - MySQL Community Edition (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 yk 的数据库结构
DROP DATABASE IF EXISTS `yk`;
CREATE DATABASE IF NOT EXISTS `yk` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `yk`;

-- 导出  表 yk.blog 结构
DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog` (
  `id` int(11) NOT NULL auto_increment,
  `time` char(50) NOT NULL default '0',
  `title` char(50) NOT NULL default '0',
  `author` char(50) NOT NULL default '0',
  `readcount` char(50) NOT NULL default '0',
  `statu` int(11) NOT NULL default '0',
  `importance` int(11) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- 正在导出表  yk.blog 的数据：~6 rows (大约)
DELETE FROM `blog`;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` (`id`, `time`, `title`, `author`, `readcount`, `statu`, `importance`) VALUES
	(1, '2019-10-11', 'aaa', 'aaa', '123', 1, 1),
	(2, '2019-10-22', 'bbb', 'bbb', '222', 2, 2),
	(3, '2019-10-23', 'ccc', 'ccc', '333', 1, 3),
	(5, '666', '666', '666', '666', 2, 2),
	(6, '777', '777', '777', '777', 2, 2),
	(10, 'fff', 'fff', 'ffff', '123', 1, 3),
	(11, 'aaa', 'aaa', 'aa', '123', 1, 3);
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;

-- 导出  表 yk.blogstatus 结构
DROP TABLE IF EXISTS `blogstatus`;
CREATE TABLE IF NOT EXISTS `blogstatus` (
  `sid` int(11) NOT NULL auto_increment,
  `sname` char(50) NOT NULL default '0',
  PRIMARY KEY  (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 正在导出表  yk.blogstatus 的数据：~2 rows (大约)
DELETE FROM `blogstatus`;
/*!40000 ALTER TABLE `blogstatus` DISABLE KEYS */;
INSERT INTO `blogstatus` (`sid`, `sname`) VALUES
	(1, 'draft'),
	(2, 'published');
/*!40000 ALTER TABLE `blogstatus` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
