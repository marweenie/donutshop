-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2024 at 11:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donutdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `donuts`
--

CREATE TABLE `donuts` (
  `ID` int(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(128) NOT NULL,
  `Price` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donuts`
--

INSERT INTO `donuts` (`ID`, `Name`, `Description`, `Price`) VALUES
(1, 'Glazed Donut', 'A classic glazed donut with a sweet finish.', '1.50'),
(2, 'Chocolate Donut', 'Rich chocolate frosting on a soft donut.', '2.00'),
(3, 'Birthday Cake Donut', 'Birthday cake flavor with delish frosting.', '2.00'),
(4, 'Jelly Donut', 'Filled with raspberry jelly and dusted with sugar.', '2.25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donuts`
--
ALTER TABLE `donuts`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donuts`
--
ALTER TABLE `donuts`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
