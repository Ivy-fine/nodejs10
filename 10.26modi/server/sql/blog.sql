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


-- 导出 db_blog 的数据库结构
DROP DATABASE IF EXISTS `db_blog`;
CREATE DATABASE IF NOT EXISTS `db_blog` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_blog`;

-- 导出  表 db_blog.blogs 结构
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE IF NOT EXISTS `blogs` (
  `bid` int(11) NOT NULL auto_increment,
  `title` char(50) NOT NULL default '0',
  `time` char(150) NOT NULL default '0',
  `content` varchar(5000) NOT NULL default '0',
  `userId` int(11) NOT NULL default '1',
  PRIMARY KEY  (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='博客正文表';

-- 正在导出表  db_blog.blogs 的数据：~4 rows (大约)
DELETE FROM `blogs`;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` (`bid`, `title`, `time`, `content`, `userId`) VALUES
	(1, 'aaaa', '0', 'aaaaaaa', 1),
	(2, 'bbb', '0', 'bbbbbbb', 1),
	(3, 'ccc', '0', 'ccccccc', 2),
	(4, 'dwdadawdwadawd', 'www', 'djklwjdlkawdjlawkjdlawkjdlawkdlawkdlawd', 13);
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;

-- 导出  表 db_blog.comments 结构
DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `cid` int(11) NOT NULL auto_increment,
  `blogId` int(11) NOT NULL,
  `text` char(200) NOT NULL,
  `cuserId` int(11) NOT NULL,
  `ctime` char(100) NOT NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='评论表';

-- 正在导出表  db_blog.comments 的数据：~4 rows (大约)
DELETE FROM `comments`;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` (`cid`, `blogId`, `text`, `cuserId`, `ctime`) VALUES
	(0, 1, 'cccc', 2, '0'),
	(1, 1, 'dddd', 1, '0'),
	(3, 2, 'eee', 1, '0'),
	(4, 1, '13cccccccccc', 13, '111');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- 导出  表 db_blog.user 结构
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL auto_increment,
  `avatar` char(200) NOT NULL default '0',
  `username` char(50) NOT NULL default '0',
  `password` char(50) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='用户信息';

-- 正在导出表  db_blog.user 的数据：~4 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `avatar`, `username`, `password`) VALUES
	(1, 'avatar/6.jpg', 'fff', '123'),
	(2, 'avatar/9.jpg', 'zs', '123321'),
	(13, 'avatar/27.jpg', 'ls', '123321'),
	(14, 'avatar/27.jpg', 'zzz', '123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
