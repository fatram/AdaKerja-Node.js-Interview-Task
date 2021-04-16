-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2021 at 04:13 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `askbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `user_id`, `message`, `timestamp`) VALUES
(2, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(3, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(4, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(5, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(6, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(7, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(8, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(9, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(10, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(11, 2147483647, 'March 21, 1996', '0000-00-00 00:00:00'),
(12, 2147483647, 'Fatur', '2021-04-16 12:49:24'),
(13, 2147483647, 'March 21, 1996', '2021-04-16 12:49:39'),
(14, 2147483647, 'fatur', '0000-00-00 00:00:00'),
(15, 2147483647, 'fatur', '0000-00-00 00:00:00'),
(16, 2147483647, 'fatur', '0000-00-00 00:00:00'),
(17, 2147483647, 'fatur', '0000-00-00 00:00:00'),
(18, 2147483647, 'fatur', '0000-00-00 00:00:00'),
(19, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(20, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(21, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(22, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(23, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(24, 2147483647, 'March 25, 1888', '0000-00-00 00:00:00'),
(25, 2147483647, 'No', '0000-00-00 00:00:00'),
(26, 2147483647, 'March 25, 1888', '0000-00-00 00:00:00'),
(27, 2147483647, 'No', '0000-00-00 00:00:00'),
(28, 2147483647, 'March 25, 1888', '0000-00-00 00:00:00'),
(29, 2147483647, 'Yes', '0000-00-00 00:00:00'),
(30, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(31, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(32, 2147483647, 'March 25, 1972', '0000-00-00 00:00:00'),
(33, 2147483647, 'No', '0000-00-00 00:00:00'),
(34, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(35, 2147483647, 'March 1, 2222', '0000-00-00 00:00:00'),
(36, 2147483647, 'No', '0000-00-00 00:00:00'),
(37, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(38, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(39, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(40, 2147483647, 'Fatur', '0000-00-00 00:00:00'),
(41, 2147483647, 'March 21, 1998', '0000-00-00 00:00:00'),
(42, 2147483647, 'Yes', '0000-00-00 00:00:00'),
(43, 2147483647, 'YES', '0000-00-00 00:00:00'),
(44, 2147483647, 'yes', '0000-00-00 00:00:00'),
(45, 2147483647, 'no', '0000-00-00 00:00:00'),
(46, 2147483647, 'yes', '0000-00-00 00:00:00'),
(47, 2147483647, 'yes', '0000-00-00 00:00:00'),
(48, 2147483647, 'yes', '0000-00-00 00:00:00'),
(49, 2147483647, 'yes', '0000-00-00 00:00:00'),
(50, 2147483647, 'yes', '0000-00-00 00:00:00'),
(51, 2147483647, 'March 15, 2000', '0000-00-00 00:00:00'),
(52, 2147483647, 'No', '0000-00-00 00:00:00'),
(53, 2147483647, 'April 15, 1222', '0000-00-00 00:00:00'),
(54, 2147483647, 'Yes', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `id` bigint(20) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`id`, `first_name`, `birthday`) VALUES
(3644152112380847, 'Fatur', '1222-04-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
