-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2023 at 09:37 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maid_ease`
--

-- --------------------------------------------------------

--
-- Table structure for table `FavouriteDetails`
--

CREATE TABLE `FavouriteDetails` (
  `FavouriteId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `ServiceProviderId` int(11) NOT NULL,
  `IsFavourite` bit(1) NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `PriceDetails`
--

CREATE TABLE `PriceDetails` (
  `PriceId` int(11) NOT NULL,
  `ServiceProviderId` int(11) NOT NULL,
  `ServiceTypeId` int(11) NOT NULL,
  `Price` float NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ServiceProviderDetails`
--

CREATE TABLE `ServiceProviderDetails` (
  `ServiceProviderId` int(11) NOT NULL,
  `UserDetailId` int(11) NOT NULL,
  `ServiceTypeId` int(11) NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ServiceTypes`
--

CREATE TABLE `ServiceTypes` (
  `ServiceTypeId` int(11) NOT NULL,
  `ServiceTypeName` varchar(255) NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ServiceTypes`
--

INSERT INTO `ServiceTypes` (`ServiceTypeId`, `ServiceTypeName`, `IsActive`, `CreatedDate`, `UpdatedDate`, `CreatedBy`, `UpdatedBy`) VALUES
(1, 'Household Services', b'1', '2023-10-10 19:32:00', '2023-10-10 19:32:00', 'Amala Natu', NULL),
(2, 'PetCare', b'1', '2023-10-10 19:32:00', '2023-10-10 19:32:00', 'Amala Natu', NULL),
(3, 'SeniorCare', b'1', '2023-10-10 19:32:00', '2023-10-10 19:32:00', 'Amala Natu', NULL),
(4, 'Laundry', b'1', '2023-10-10 19:32:00', '2023-10-10 19:32:00', 'Amala Natu', NULL),
(5, 'ChildCare', b'1', '2023-10-10 19:32:00', '2023-10-10 19:32:00', 'Amala Natu', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `StateDetails`
--

CREATE TABLE `StateDetails` (
  `StateId` int(11) NOT NULL,
  `StateName` varchar(255) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `StateDetails`
--

INSERT INTO `StateDetails` (`StateId`, `StateName`, `CreatedDate`, `CreatedBy`) VALUES
(1, 'Alaska', '2023-10-10 19:10:07', NULL),
(2, 'Alabama', '2023-10-10 19:10:07', NULL),
(3, 'Arizona', '2023-10-10 19:10:07', NULL),
(4, 'Arkansas', '2023-10-10 19:10:07', NULL),
(5, 'California', '2023-10-10 19:10:07', NULL),
(6, 'Colorado', '2023-10-10 19:10:07', NULL),
(7, 'Connecticut', '2023-10-10 19:10:07', NULL),
(8, 'Delaware', '2023-10-10 19:10:07', NULL),
(9, 'District of Columbia', '2023-10-10 19:10:07', NULL),
(10, 'Florida', '2023-10-10 19:10:07', NULL),
(11, 'Georgia', '2023-10-10 19:10:07', NULL),
(12, 'Hawaii', '2023-10-10 19:10:07', NULL),
(13, 'Idaho', '2023-10-10 19:10:07', NULL),
(14, 'Illinois', '2023-10-10 19:10:07', NULL),
(15, 'Indiana', '2023-10-10 19:10:07', NULL),
(16, 'Iowa', '2023-10-10 19:10:07', NULL),
(17, 'Kansas', '2023-10-10 19:10:07', NULL),
(18, 'Kentucky', '2023-10-10 19:10:07', NULL),
(19, 'Louisiana', '2023-10-10 19:10:07', NULL),
(20, 'Maine', '2023-10-10 19:10:07', NULL),
(21, 'Maryland', '2023-10-10 19:10:07', NULL),
(22, 'Massachusetts', '2023-10-10 19:10:07', NULL),
(23, 'Michigan', '2023-10-10 19:10:07', NULL),
(24, 'Minnesota', '2023-10-10 19:10:07', NULL),
(25, 'Mississippi', '2023-10-10 19:10:07', NULL),
(26, 'Missouri', '2023-10-10 19:10:07', NULL),
(27, 'Montana', '2023-10-10 19:10:07', NULL),
(28, 'Nebraska', '2023-10-10 19:10:07', NULL),
(29, 'Nevada', '2023-10-10 19:10:07', NULL),
(30, 'New Hampshire', '2023-10-10 19:10:07', NULL),
(31, 'New Jersey', '2023-10-10 19:10:07', NULL),
(32, 'New Mexico', '2023-10-10 19:10:07', NULL),
(33, 'New York', '2023-10-10 19:10:07', NULL),
(34, 'North Carolina', '2023-10-10 19:10:07', NULL),
(35, 'North Dakota', '2023-10-10 19:10:07', NULL),
(36, 'Ohio', '2023-10-10 19:10:07', NULL),
(37, 'Oklahoma', '2023-10-10 19:10:07', NULL),
(38, 'Oregon', '2023-10-10 19:10:07', NULL),
(39, 'Pennsylvania', '2023-10-10 19:10:07', NULL),
(40, 'Puerto Rico', '2023-10-10 19:10:07', NULL),
(41, 'Rhode Island', '2023-10-10 19:10:07', NULL),
(42, 'South Carolina', '2023-10-10 19:10:07', NULL),
(43, 'South Dakota', '2023-10-10 19:10:07', NULL),
(44, 'Tennessee', '2023-10-10 19:10:07', NULL),
(45, 'Texas', '2023-10-10 19:10:07', NULL),
(46, 'Utah', '2023-10-10 19:10:07', NULL),
(47, 'Vermont', '2023-10-10 19:10:07', NULL),
(48, 'Virginia', '2023-10-10 19:10:07', NULL),
(49, 'Washington', '2023-10-10 19:10:07', NULL),
(50, 'West Virginia', '2023-10-10 19:10:07', NULL),
(51, 'Wisconsin', '2023-10-10 19:10:07', NULL),
(52, 'Wyoming', '2023-10-10 19:10:07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `SubscriptionTypes`
--

CREATE TABLE `SubscriptionTypes` (
  `SubscriptionTypeId` int(11) NOT NULL,
  `SubscriptionTypeName` varchar(255) NOT NULL,
  `Price` float NOT NULL,
  `UserRoleId` int(11) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `SubscriptionTypes`
--

INSERT INTO `SubscriptionTypes` (`SubscriptionTypeId`, `SubscriptionTypeName`, `Price`, `UserRoleId`, `CreatedDate`, `CreatedBy`) VALUES
(1, 'Customer Silver', 10, 2, '2023-10-10 19:26:44', NULL),
(2, 'Customer Gold', 12, 2, '2023-10-10 19:26:44', NULL),
(3, 'Customer Diamond', 15, 2, '2023-10-10 19:26:44', NULL),
(4, 'ServiceProvider Silver', 20, 3, '2023-10-10 19:26:44', NULL),
(5, 'ServiceProvider Gold', 22, 3, '2023-10-10 19:26:44', NULL),
(6, 'ServiceProvider Diamond', 25, 3, '2023-10-10 19:26:44', NULL),
(7, 'Admin Subscription', 0, 1, '2023-10-10 19:26:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `UserDetails`
--

CREATE TABLE `UserDetails` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Address1` varchar(255) NOT NULL,
  `Address2` varchar(255) DEFAULT NULL,
  `City` varchar(100) NOT NULL,
  `StateId` int(11) NOT NULL,
  `Country` varchar(100) NOT NULL,
  `ZipCode` varchar(20) NOT NULL,
  `EmailId` varchar(255) NOT NULL,
  `ContactNo` varchar(20) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `SubscriptionTypeId` int(11) NOT NULL,
  `UserRoleId` int(11) NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT NULL,
  `UpdatedBy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `UserRoles`
--

CREATE TABLE `UserRoles` (
  `UserRoleId` int(11) NOT NULL,
  `RoleName` varchar(255) NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `CreatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CreatedBy` varchar(50) DEFAULT current_timestamp(),
  `UpdatedBy` varchar(50) DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserRoles`
--

INSERT INTO `UserRoles` (`UserRoleId`, `RoleName`, `IsActive`, `CreatedDate`, `UpdatedDate`, `CreatedBy`, `UpdatedBy`) VALUES
(1, 'Admin', b'1', '2023-10-10 19:17:13', '2023-10-10 19:17:13', '2023-10-10 15:17:13', '2023-10-10 15:17:13'),
(2, 'Customer', b'1', '2023-10-10 19:19:31', '2023-10-10 19:19:31', '2023-10-10 15:19:31', '2023-10-10 15:19:31'),
(3, 'ServiceProvider', b'1', '2023-10-10 19:19:31', '2023-10-10 19:19:31', '2023-10-10 15:19:31', '2023-10-10 15:19:31'),
(4, 'Advertisement_Sales_Representative', b'1', '2023-10-10 19:19:31', '2023-10-10 19:19:31', '2023-10-10 15:19:31', '2023-10-10 15:19:31'),
(5, 'Manager', b'1', '2023-10-10 19:19:31', '2023-10-10 19:19:31', '2023-10-10 15:19:31', '2023-10-10 15:19:31'),
(6, 'Customer_Support_Executive', b'1', '2023-10-10 19:19:31', '2023-10-10 19:19:31', '2023-10-10 15:19:31', '2023-10-10 15:19:31'),
(7, 'Accountant', b'1', '2023-10-10 19:19:31', '2023-10-10 19:19:31', '2023-10-10 15:19:31', '2023-10-10 15:19:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `FavouriteDetails`
--
ALTER TABLE `FavouriteDetails`
  ADD PRIMARY KEY (`FavouriteId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `ServiceProviderId` (`ServiceProviderId`);

--
-- Indexes for table `PriceDetails`
--
ALTER TABLE `PriceDetails`
  ADD PRIMARY KEY (`PriceId`),
  ADD KEY `ServiceProviderId` (`ServiceProviderId`),
  ADD KEY `ServiceTypeId` (`ServiceTypeId`);

--
-- Indexes for table `ServiceProviderDetails`
--
ALTER TABLE `ServiceProviderDetails`
  ADD PRIMARY KEY (`ServiceProviderId`),
  ADD KEY `ServiceTypeId` (`ServiceTypeId`);

--
-- Indexes for table `ServiceTypes`
--
ALTER TABLE `ServiceTypes`
  ADD PRIMARY KEY (`ServiceTypeId`);

--
-- Indexes for table `StateDetails`
--
ALTER TABLE `StateDetails`
  ADD PRIMARY KEY (`StateId`);

--
-- Indexes for table `SubscriptionTypes`
--
ALTER TABLE `SubscriptionTypes`
  ADD PRIMARY KEY (`SubscriptionTypeId`),
  ADD KEY `UserRoleId` (`UserRoleId`);

--
-- Indexes for table `UserDetails`
--
ALTER TABLE `UserDetails`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `EmailId` (`EmailId`),
  ADD KEY `StateId` (`StateId`),
  ADD KEY `SubscriptionTypeId` (`SubscriptionTypeId`),
  ADD KEY `UserRoleId` (`UserRoleId`);

--
-- Indexes for table `UserRoles`
--
ALTER TABLE `UserRoles`
  ADD PRIMARY KEY (`UserRoleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `FavouriteDetails`
--
ALTER TABLE `FavouriteDetails`
  MODIFY `FavouriteId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PriceDetails`
--
ALTER TABLE `PriceDetails`
  MODIFY `PriceId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ServiceProviderDetails`
--
ALTER TABLE `ServiceProviderDetails`
  MODIFY `ServiceProviderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ServiceTypes`
--
ALTER TABLE `ServiceTypes`
  MODIFY `ServiceTypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `StateDetails`
--
ALTER TABLE `StateDetails`
  MODIFY `StateId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `SubscriptionTypes`
--
ALTER TABLE `SubscriptionTypes`
  MODIFY `SubscriptionTypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `UserDetails`
--
ALTER TABLE `UserDetails`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UserRoles`
--
ALTER TABLE `UserRoles`
  MODIFY `UserRoleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `FavouriteDetails`
--
ALTER TABLE `FavouriteDetails`
  ADD CONSTRAINT `favouritedetails_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `UserDetails` (`UserId`),
  ADD CONSTRAINT `favouritedetails_ibfk_2` FOREIGN KEY (`ServiceProviderId`) REFERENCES `ServiceProviderDetails` (`ServiceProviderId`);

--
-- Constraints for table `PriceDetails`
--
ALTER TABLE `PriceDetails`
  ADD CONSTRAINT `pricedetails_ibfk_1` FOREIGN KEY (`ServiceProviderId`) REFERENCES `ServiceProviderDetails` (`ServiceProviderId`),
  ADD CONSTRAINT `pricedetails_ibfk_2` FOREIGN KEY (`ServiceTypeId`) REFERENCES `ServiceTypes` (`ServiceTypeId`);

--
-- Constraints for table `ServiceProviderDetails`
--
ALTER TABLE `ServiceProviderDetails`
  ADD CONSTRAINT `serviceproviderdetails_ibfk_1` FOREIGN KEY (`ServiceTypeId`) REFERENCES `ServiceTypes` (`ServiceTypeId`);

--
-- Constraints for table `SubscriptionTypes`
--
ALTER TABLE `SubscriptionTypes`
  ADD CONSTRAINT `subscriptiontypes_ibfk_1` FOREIGN KEY (`UserRoleId`) REFERENCES `UserRoles` (`UserRoleId`);

--
-- Constraints for table `UserDetails`
--
ALTER TABLE `UserDetails`
  ADD CONSTRAINT `userdetails_ibfk_1` FOREIGN KEY (`StateId`) REFERENCES `StateDetails` (`StateId`),
  ADD CONSTRAINT `userdetails_ibfk_2` FOREIGN KEY (`SubscriptionTypeId`) REFERENCES `SubscriptionTypes` (`SubscriptionTypeId`),
  ADD CONSTRAINT `userdetails_ibfk_3` FOREIGN KEY (`UserRoleId`) REFERENCES `UserRoles` (`UserRoleId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
