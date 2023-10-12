/*
'maid_ease' is the name of your database.
'root' is the username.
'jahid37094' is the password.
host: 'localhost' specifies the database host.
dialect: 'mysql' tells Sequelize to use MySQL.
port: 3306 is the default port for MySQL.

datatable structure

--drop table users;

CREATE TABLE UserRoles (
    UserRoledId INT AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(255) NOT NULL,
    IsActive BIT NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50),
    UpdatedBy VARCHAR(50)
);

CREATE TABLE StateDetails (
    StateId INT AUTO_INCREMENT PRIMARY KEY,
    StateName VARCHAR(255) NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50)
);

CREATE TABLE SubscriptionTypes (
    SubscriptionTypeId INT AUTO_INCREMENT PRIMARY KEY,
    SubscriptionTypeName VARCHAR(255) NOT NULL,
    Price FLOAT NOT NULL,
    UserRoleId INT NOT NULL,  -- Foriegn Key of UserRoles
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50)
);

CREATE TABLE UserDetails (
    UserId INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Address1 VARCHAR(255) NOT NULL,
    Address2 VARCHAR(255),  -- this can be NULL since it's optional
    City VARCHAR(100) NOT NULL,
    StateId  INT NOT NULL, -- Foriegn Key of StateDetails
    Country VARCHAR(100) NOT NULL,
    ZipCode VARCHAR(20) NOT NULL,
    EmailId VARCHAR(255) UNIQUE NOT NULL,  -- 'UNIQUE' ensures that the email is unique for every user
    ContactNo VARCHAR(20) NOT NULL,
    Password VARCHAR(255) NOT NULL,  -- this will store the hashed password
    SubscriptionTypeId INT NOT NULL,  -- Foriegn Key of SubscriptionTypes
    UserRoledId INT NOT NULL, -- Foriegn Key of UserRoles
    IsActive BIT NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50),
    UpdatedBy VARCHAR(50)
);

CREATE TABLE ServiceTypes (
    ServiceTypeId INT AUTO_INCREMENT PRIMARY KEY,
    ServiceTypeName VARCHAR(255) NOT NULL,
    IsActive BIT NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50),
    UpdatedBy VARCHAR(50)
);

CREATE TABLE ServiceProviderDetails (
    ServiceProviderId INT AUTO_INCREMENT PRIMARY KEY,
    UserDetailId INT NOT NULL,   -- Foriegn Key of UserDetail
    ServiceTypeId INT NOT NULL,  -- Foriegn Key of ServiceType
    IsActive BIT NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50),
    UpdatedBy VARCHAR(50),
    ImageURL VARCHAR(2000)
);

CREATE TABLE PriceDetails (
    PriceId INT AUTO_INCREMENT PRIMARY KEY,
    ServiceProviderId INT NOT NULL,   -- Foriegn Key of ServiceProviderDetail
    ServiceTypeId INT NOT NULL,  -- Foriegn Key of ServiceType
    Price FLOAT NOT NULL,
    IsActive BIT NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50),
    UpdatedBy VARCHAR(50)
);

CREATE TABLE FavouriteDetails (
    FavouriteId INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,  -- Foriegn Key of UserDetail
    ServiceProviderId INT NOT NULL,   -- Foriegn Key of ServiceProviderDetail
    IsFavourite BIT NOT NULL,  
    IsActive BIT NOT NULL,
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CreatedBy VARCHAR(50),
    UpdatedBy VARCHAR(50)
);

*/

/*** INSERT Queries ***/
/*
--StateDetails

INSERT into StateDetails (StateName) values
	('Alaska'),
	('Alabama'),
	('Arizona'),
	('Arkansas'),
	('California'),
	('Colorado'),
	('Connecticut'),
	('Delaware'),
	('District of Columbia'),
	('Florida'),
	('Georgia'),
	('Hawaii'),
	('Idaho'),
	('Illinois'),
	('Indiana'),
	('Iowa'),
	('Kansas'),
	('Kentucky'),
	('Louisiana'),
	('Maine'),
	('Maryland'),
	('Massachusetts'),
	('Michigan'),
	('Minnesota'),
	('Mississippi'),
	('Missouri'),
	('Montana'),
	('Nebraska'),
	('Nevada'),
	('New Hampshire'),
	('New Jersey'),
	('New Mexico'),
	('New York'),
	('North Carolina'),
	('North Dakota'),
	('Ohio'),
	('Oklahoma'),
	('Oregon'),
	('Pennsylvania'),
	('Puerto Rico'),
	('Rhode Island'),
	('South Carolina'),
	('South Dakota'),
	('Tennessee'),
	('Texas'),
	('Utah'),
	('Vermont'),
	('Virginia'),
	('Washington'),
	('West Virginia'),
	('Wisconsin'),
	('Wyoming');

****************

-- UserRoles

INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('Admin',b'1','Manish');
INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('Customer',b'1','Manish');
INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('ServiceProvider',b'1','Manish');
INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('Advertsiment_Sales_Representative',b'1','Manish');
INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('Account_Manager',b'1','Manish');
INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('Manager',b'1','Manish');
INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('Customer_Support_Executive',b'1','Manish');
INSERT INTO UserRoles (RoleName, IsActive, CreatedBy) VALUES ('Accountant',b'1','Manish');

***********

-- SubscriptionTYpes

INSERT INTO SubscriptionTypes (SubscriptionTypeName, Price, UserRoleId, CreatedBy) VALUES ('Customer Silver',10,2,'Rushda Mansuri');
INSERT INTO SubscriptionTypes (SubscriptionTypeName, Price, UserRoleId, CreatedBy) VALUES ('Customer Gold',12,2,'Rushda Mansuri');
INSERT INTO SubscriptionTypes (SubscriptionTypeName, Price, UserRoleId, CreatedBy) VALUES ('Customer Diamond',15,2,'Rushda Mansuri');
INSERT INTO SubscriptionTypes (SubscriptionTypeName, Price, UserRoleId, CreatedBy) VALUES ('ServiceProvider Silver',20,3,'Rushda Mansuri');
INSERT INTO SubscriptionTypes (SubscriptionTypeName, Price, UserRoleId, CreatedBy) VALUES ('ServiceProvider Gold',22,3,'Rushda Mansuri');
INSERT INTO SubscriptionTypes (SubscriptionTypeName, Price, UserRoleId, CreatedBy) VALUES ('ServiceProvider Diamond',25,3,'Rushda Mansuri');
INSERT INTO SubscriptionTypes (SubscriptionTypeName, Price, UserRoleId, CreatedBy) VALUES ('Admin Subscription',0,1,'Rushda Mansuri');

*************

-- ServiceTypes

INSERT INTO ServiceTypes (ServiceTypeName, IsActive, CreatedBy) VALUES ('HouseKeeping', b'1','Rushda Mansuri');
INSERT INTO ServiceTypes (ServiceTypeName, IsActive, CreatedBy) VALUES ('PetCare', b'1','Rushda Mansuri');
INSERT INTO ServiceTypes (ServiceTypeName, IsActive, CreatedBy) VALUES ('SeniorCare', b'1','Rushda Mansuri');
INSERT INTO ServiceTypes (ServiceTypeName, IsActive, CreatedBy) VALUES ('Laundry', b'1','Rushda Mansuri');
INSERT INTO ServiceTypes (ServiceTypeName, IsActive, CreatedBy) VALUES ('ChildCare', b'1','Rushda Mansuri');

**************

-- UserDetails

INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Rushda', 'Mannsuri','32 Minebrook Rd', 'Apt 88-A','Edison', 31, 'United States', '08820', 'mansurirushda7@gmail.com', '8483094128','Rushda@1234','3', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Sai Manish', 'Avasarala','73 Poplar Street', '','Jersey City', 31, 'United States', '08820', 'manish.avasarala@gmail.com', '5513284924','Manish@1234','2', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Sai  Teja', 'Malladi','9 Dayton Drive', '','Edison', 31, 'United States', '08820', 'malladisaitejareddy@gmail.com', '5513448568','SaiTeja@1234','1', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Tahera', 'Shaikh','224 DutchNeck Rd', '','East Windsor', 31, 'United States', '08820', 'tahera.shaikh923@gmail.com', '2012535401','Tahera@1234','1', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Amala', 'Natu','32 Grove Ave', '','Metchan', 31, 'United States', '08820', 'amalanatu2110@gmail.com', '2019206153','Amala@1234','1', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Bhakti', 'Palkar','2022 Dayton St', '','Edison', 31, 'United States', '08820', 'bhakti0209@gmail.com', '5513448186','Bhakti@1234','3', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Jahid', 'Hassan','23 Minebrook Rd', '','Edison', 31, 'United States', '08820', 'jahidhasansaif@gmail.com', '9295867442','Jahid@1234','3', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Nidhi', 'Berde','9 Farmhouse Ave', '','Edison', 31, 'United States', '08820', 'nidhiberde@gmail.com', '9299896698','Nidhi@1234','2', '2', b'1', 'Rushda Mansuri');

**********

*/
