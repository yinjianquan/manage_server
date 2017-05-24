-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-05-22 11:14:53
-- 服务器版本： 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wt-manage`
--

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone` bigint(11) NOT NULL,
  `realName` varchar(32) NOT NULL,
  `nickName` varchar(32) NOT NULL,
  `age` int(3) NOT NULL,
  `nativePlace` varchar(32) NOT NULL,
  `skillTree` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `company` varchar(32) NOT NULL,
  `github` varchar(32) NOT NULL,
  `jurisdiction` varchar(1) NOT NULL,
  `headImg` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `phone`, `realName`, `nickName`, `age`, `nativePlace`, `skillTree`, `password`, `sex`, `company`, `github`, `jurisdiction`, `headImg`) VALUES
(7, 15013795538, '王昭君', '晴天', 20, '汉朝', 'vue,react', '123456', '2', '', 'aaa', '1', 'http://127.0.0.1:7777/images/wangzhaojun.jpg'),
(97, 15013795539, '胡儒清', '老胡', 37, '广西', 'vue,react,webpack,react,nodejs...', '', '1', '沃土web前端学院', 'https://github.com/huruqing', '活', 'http://127.0.0.1:7777/images/portrait.png'),
(98, 13812345679, '狄仁杰', '小狄', 18, '宋朝', '', '', '1', '', '', '', 'http://127.0.0.1:7777/images/direnjie.jpg'),
(108, 13812345671, '诸葛亮', '小猪', 0, '三国', '', '123456', '1', '', '', '', 'http://127.0.0.1:7777/images/zhegeliang.jpg'),
(109, 13800000000, '黄忠', '老黄', 0, '三国', '', '123456', '1', '', '', '', 'http://127.0.0.1:7777/images/huangzhong.jpg'),
(110, 15013795536, '虞姬', '小鸡', 20, '西楚', 'vue,react', '123456', '2', '', 'aaa', '1', 'http://127.0.0.1:7777/images/yuji.jpg'),
(111, 15013795533, '大乔', '三国美女', 20, '三国', 'vue,react', '123456', '2', '', 'aaa', '1', 'http://127.0.0.1:7777/images/daqiao.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
