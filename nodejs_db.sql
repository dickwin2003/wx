/*
Navicat MySQL Data Transfer

Source Server         : 111.230.29.226
Source Server Version : 50720
Source Host           : 111.230.29.226:3306
Source Database       : nodejs_db

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2017-12-25 23:45:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for client
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `address` varchar(400) CHARACTER SET utf8 DEFAULT NULL,
  `mobile` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `tel` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `qq` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `weixin` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES ('1', '刘半仙', '荣超19栋', '13800138000', '1349903000', '4949393', null);
INSERT INTO `client` VALUES ('2', '刘子千', '百合19栋', '23333', '3333', '3333', null);
INSERT INTO `client` VALUES ('3', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL COMMENT '类型',
  `name` varchar(200) DEFAULT NULL,
  `unit` varchar(40) DEFAULT NULL COMMENT '单位',
  `price` decimal(10,0) DEFAULT NULL,
  `spec` varchar(200) DEFAULT NULL,
  `model` varchar(200) DEFAULT NULL,
  `note` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('1', null, '门窗', null, '100', '100x100', null, null);
INSERT INTO `item` VALUES ('2', null, '门窗', null, '200', '200x200', null, null);
INSERT INTO `item` VALUES ('3', null, '地板', null, '1000', '2000', null, null);
INSERT INTO `item` VALUES ('4', null, '大铁门', '扇', '2000', '200x200', null, null);
INSERT INTO `item` VALUES ('7', '1', '大铁门', '扇', '2000', '200x200', null, null);
INSERT INTO `item` VALUES ('8', '1', '大铁门', '扇', '2000', '200x200', null, null);

-- ----------------------------
-- Table structure for order_food
-- ----------------------------
DROP TABLE IF EXISTS `order_food`;
CREATE TABLE `order_food` (
  `nid` int(100) NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(30) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `food_name` varchar(30) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `last_order_time` datetime DEFAULT NULL,
  `uid` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_food
-- ----------------------------

-- ----------------------------
-- Table structure for order_priv
-- ----------------------------
DROP TABLE IF EXISTS `order_priv`;
CREATE TABLE `order_priv` (
  `order_date` date DEFAULT NULL,
  `last_order_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_priv
-- ----------------------------

-- ----------------------------
-- Table structure for order_rice
-- ----------------------------
DROP TABLE IF EXISTS `order_rice`;
CREATE TABLE `order_rice` (
  `n_id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(30) DEFAULT NULL,
  `uname` varchar(50) DEFAULT NULL,
  `d_date` date DEFAULT NULL,
  `d_create` datetime DEFAULT NULL,
  `ts` tinyint(1) DEFAULT '0',
  `food_name` varchar(1000) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `dining_id` int(11) DEFAULT NULL,
  `dining_name` varchar(100) DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `is_pay` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_rice
-- ----------------------------

-- ----------------------------
-- Table structure for order_status
-- ----------------------------
DROP TABLE IF EXISTS `order_status`;
CREATE TABLE `order_status` (
  `d_date` date NOT NULL,
  `b_close` tinyint(1) DEFAULT '0',
  `ts` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`d_date`,`ts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_status
-- ----------------------------

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `p_name` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `charger` int(11) DEFAULT '0' COMMENT '跟进人',
  `status` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '关联user表id',
  `discount` float DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES ('1', '荣超花园改造', '1', '1', '1', '95');
INSERT INTO `project` VALUES ('2', '百合花园改造', '2', '1', '1', '99');
INSERT INTO `project` VALUES ('3', '国展改造', '3', '1', '1', '95');
INSERT INTO `project` VALUES ('13', '5tr', '1', '2', '3', '89');
INSERT INTO `project` VALUES ('14', '14d', '3', '23', '0', '3');
INSERT INTO `project` VALUES ('15', '14d', '3', '23', '0', '3');
INSERT INTO `project` VALUES ('16', '14d', '3', '23', '0', '3');
INSERT INTO `project` VALUES ('17', '5tr', '1', '2', '0', '89');
INSERT INTO `project` VALUES ('18', '5tr', '1', '2', '0', '89');
INSERT INTO `project` VALUES ('19', '5tr', '1', '2', '0', '89');

-- ----------------------------
-- Table structure for project_ref
-- ----------------------------
DROP TABLE IF EXISTS `project_ref`;
CREATE TABLE `project_ref` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `itemid` int(11) DEFAULT NULL,
  `qty` double DEFAULT NULL COMMENT '数量',
  `status` int(11) DEFAULT NULL,
  `confirm` int(11) DEFAULT NULL COMMENT '员工确认',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of project_ref
-- ----------------------------
INSERT INTO `project_ref` VALUES ('1', '1', '1', '1', '0', '0');
INSERT INTO `project_ref` VALUES ('2', '1', '2', '24', '0', '0');
INSERT INTO `project_ref` VALUES ('3', '1', '3', null, '0', '0');

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', 'nodejs1');
INSERT INTO `test` VALUES ('2', 'nodejs2');
INSERT INTO `test` VALUES ('3', '23');
INSERT INTO `test` VALUES ('4', '21');
INSERT INTO `test` VALUES ('5', '33');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loginid` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `u_name` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `lastlogintime` datetime DEFAULT NULL,
  `role` int(11) DEFAULT NULL COMMENT '角色',
  `passwords` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '管理员', '2017-10-17 23:27:19', '1', '5f4dcc3b5aa765d61d8327deb882cf99');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_name` varchar(30) DEFAULT NULL,
  `userId` varchar(30) DEFAULT NULL,
  `nick_name` varchar(30) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL,
  `user_pwd` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('test', '1', 'tst', '0', 'test');
