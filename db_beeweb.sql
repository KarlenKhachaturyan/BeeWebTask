-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2020 at 04:48 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_beeweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(4, 'Karlen', 'normail@gmail.com', '$2b$10$ULPrS/r5UlqSpRqyD65/XenCEEABUvgI1ZpfUZcsPGBju8JrSFHiO', '2020-05-24 06:07:09', '2020-05-24 06:07:09');

-- --------------------------------------------------------

--
-- Table structure for table `workspaces`
--

CREATE TABLE `workspaces` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `subDomain` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workspaces`
--

INSERT INTO `workspaces` (`id`, `userId`, `name`, `subDomain`, `createdAt`, `updatedAt`) VALUES
(17, 4, 'ena', 'ena', '2020-05-24 09:29:04', '2020-05-24 09:29:04'),
(22, 4, 'asd', 'asd', '2020-05-24 09:31:06', '2020-05-24 09:31:06'),
(25, 4, 'asda', 'asd', '2020-05-24 10:07:06', '2020-05-24 10:07:06'),
(30, 4, 'akladsnd', 'subdomain', '2020-05-24 11:55:36', '2020-05-24 11:55:36'),
(31, 4, 'asd', 'subdomain', '2020-05-24 11:57:28', '2020-05-24 11:57:28'),
(35, 4, 'asd', 'asd', '2020-05-24 12:10:11', '2020-05-24 12:10:11'),
(36, 4, 'aeeae', 'aaaa', '2020-05-24 12:59:47', '2020-05-24 12:59:47'),
(37, 4, 'asdasd', 'asdzxczxc', '2020-05-24 13:15:00', '2020-05-24 13:15:00'),
(38, 4, 'asd', 'subdomain1', '2020-05-24 14:11:14', '2020-05-24 14:11:14'),
(39, 4, 'sad', 'subdomain0', '2020-05-24 14:15:43', '2020-05-24 14:15:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workspaces`
--
ALTER TABLE `workspaces`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `workspaces`
--
ALTER TABLE `workspaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
