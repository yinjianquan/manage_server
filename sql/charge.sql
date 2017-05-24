-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-05-22 11:14:28
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
-- 表的结构 `charge`
--

CREATE TABLE `charge` (
  `id` int(11) NOT NULL,
  `type` int(1) NOT NULL,
  `date` varchar(32) NOT NULL,
  `amount` int(11) NOT NULL,
  `remark` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `charge`
--

INSERT INTO `charge` (`id`, `type`, `date`, `amount`, `remark`) VALUES
(2, 0, '2017-5-12', 500, '聚餐'),
(3, 0, '2017-5-12', 300, '聚会'),
(10, 1, '2017-5-12', 5000, '缴纳会费'),
(13, 1, '2017-5-12', 10000, '捡到的'),
(39, 0, '2017-5-12', 1000, '聚餐'),
(40, 0, '2017-5-12', 200, '聚餐2'),
(41, 0, '2017-5-14', 20000, '聚会'),
(42, 1, '未知', 0, '未知');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `charge`
--
ALTER TABLE `charge`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `charge`
--
ALTER TABLE `charge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
