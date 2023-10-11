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
    UpdatedBy VARCHAR(50)
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


*/
