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
    ImageURL VARCHAR(2000),
    Description VARCHAR(5000)
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

***** Customer Record *******
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Rushda', 'Mannsuri','32 Minebrook Rd', 'Apt 88-A','Edison', 31, 'United States', '08820', 'mansurirushda7@gmail.com', '8483094128','Rushda@1234','3', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Sai Manish', 'Avasarala','73 Poplar Street', '','Jersey City', 31, 'United States', '08820', 'manish.avasarala@gmail.com', '5513284924','Manish@1234','2', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Sai  Teja', 'Malladi','9 Dayton Drive', '','Edison', 31, 'United States', '08820', 'malladisaitejareddy@gmail.com', '5513448568','SaiTeja@1234','1', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Tahera', 'Shaikh','224 DutchNeck Rd', '','East Windsor', 31, 'United States', '08820', 'tahera.shaikh923@gmail.com', '2012535401','Tahera@1234','1', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Amala', 'Natu','32 Grove Ave', '','Metchan', 31, 'United States', '08820', 'amalanatu2110@gmail.com', '2019206153','Amala@1234','1', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Bhakti', 'Palkar','2022 Dayton St', '','Edison', 31, 'United States', '08820', 'bhakti0209@gmail.com', '5513448186','Bhakti@1234','3', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Jahid', 'Hassan','23 Minebrook Rd', '','Edison', 31, 'United States', '08820', 'jahidhasansaif@gmail.com', '9295867442','Jahid@1234','3', '2', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Nidhi', 'Berde','9 Farmhouse Ave', '','Edison', 31, 'United States', '08820', 'nidhiberde@gmail.com', '9299896698','Nidhi@1234','2', '2', b'1', 'Rushda Mansuri');

***** Laundry Record ******

INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Alex', 'Smith','97 Lincoln Hwy', '#27','Edison', 31, 'United States', '08820', 'alexsmith@gmail.com', '7325481558','AlexSmith@1234','5', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Denny', 'Gomes','137 Stelton Rd', '#135','Piscataway', 31, 'United States', '08820', 'dennygomes@gmail.com', '7324740091','DennyGomes@1234','6', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Kim', 'Charlie','108 Lincoln Ave', '','Dunellen', 31, 'United States', '08812', 'kimdevis@gmail.com', '7324241202','KimDevis@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Tony', 'Stark','210 North Ave', '','Dunellen', 31, 'United States', '08812', 'tonystark@gmail.com', '7345678929','TonyStark@1234','6', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Meghan', 'Markle','519 Avenel St', '','Avenel', 31, 'United States', '08820', 'meghanmarkle@gmail.com', '732326969','MeghanMarkle@1234','5', '3', b'1', 'Rushda Mansuri');

***** PetCare Record ******

INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Asad', 'Shaikh','288 Lincoln Blvd', '','Middlesex', 31, 'United States', '08820', 'asadshaikh@gmail.com', '7325481558','AsadShaikh@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Faishal', 'Bagban','265 NJ-10 East', '','Whippany', 31, 'United States', '07981', 'faishalbagban@gmail.com', '9736061101','FaishalBagban@1234','6', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Amira', 'Patel','27 S Plainfield Ave', '','South Plainfield', 31, 'United States', '07080', 'amirapatel@gmail.com', '7324241202','AmiraPatel@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Amisha', 'Patel','534 Washington St', '','Westfield', 31, 'United States', '07090', 'AmishaPatel@gmail.com', '6464797472','AmishaPatel@1234','6', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Manish', 'Shah','4 Gifford Rd', '','Somerset', 31, 'United States', '08873', 'manishshah@gmail.com', '7323198857','ManishShah@1234','5', '3', b'1', 'Rushda Mansuri');


****** HouseKeeping Record ******

INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Mina', 'Goyal','1250 NJ-27', '','Colonia', 31, 'United States', '07067', 'minapatel@gmail.com', '8482891134','MinaPatel@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Naved', 'Khan','180 Talmadge Rd', '#15','Edison', 31, 'United States', '8817', 'navedkhan@gmail.com', '7328127929','NavedKhan@1234','6', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Molly', 'Patel','2235 Morris Ave', '1st Floor','Union', 31, 'United States', '07083', 'mollypatel@gmail.com', '9089675888','MollyPatel@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Nisha', 'Sheth','560 Springfield Ave', 'Suite 12M','Westfield', 31, 'United States', '07090', 'nisasheth@gmail.com', '9089197142','NishaSheth@1234','6', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Pratik', 'Shah','4 Gifford Rd', '','Somerset', 31, 'United States', '08821', 'pratikshah@gmail.com', '7323181460','PratikShah@1234','5', '3', b'1', 'Rushda Mansuri');

***** SeniorCare Record ******

INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Ameera', 'Patel','573 Pavonia Ave', '','Jersey City', 31, 'United States', '07306', 'ameerapatel@gmail.com', '7324241202','AmeeraPatel@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('John', 'Patel','594 Newark Ave', '','Jersey City', 31, 'United States', '07080', 'johnpatel@gmail.com', '7324241202','johnPatel@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Jaimin', 'Patel','732 Newark Ave', '','Jersey City', 31, 'United States', '07080', 'jaiminpatel@gmail.com', '7324241202','jaiminPatel@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Ali', 'Patel','35 Journal Square Plaza', '','Jersey City', 31, 'United States', '07306', 'alipatel@gmail.com', '7324241202','AliPatel@1234','7', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Anish', 'Patel','28 Paterson St', '','Jersey City', 31, 'United States', '07307', 'anishpatel@gmail.com', '7324241202','AnishPatel@1234','7', '3', b'1', 'Rushda Mansuri');

****** ChildCare Record *******

INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Rohit', 'Sharma','444 Central Avenue', '','Jersey City', 31, 'United States', '07307', 'rohitsharma@gmail.com', '2012171441','rohitsharma@1234','5', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Virat', 'Kohli','76 Congress Street', '','Jersey City', 31, 'United States', '07306', 'viratkohli@gmail.com', '2012171441','viratkohli@1234','5', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Rahul', 'Kumar','76 Congress Street', '','Jersey City', 31, 'United States', '07306', 'rahul@gmail.com', '2012171441','rahul@1234','5', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Raj', 'Shah','379 Palisade Ave', '','Jersey City', 31, 'United States', '07306', 'raj@gmail.com', '2012171441','raj@1234','5', '3', b'1', 'Rushda Mansuri');
INSERT INTO UserDetails (FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, Password, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy) VALUES ('Anna', 'Shah','165 Hutton St', '','Jersey City', 31, 'United States', '07307', 'annashah@gmail.com', '2016568066','AnnaShah@1234','5', '3', b'1', 'Rushda Mansuri');

***********

-- ServiceProviderDetails

INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (9,4,b'1','Rushda Mansuri', '/images/laundry1.jpeg','In the realm of laundry services, one name shines brightly in the nearby area: a beacon of excellence, consistently earning the highest ratings from satisfied customers. This establishment has set itself apart by delivering impeccable service that goes above and beyond expectations. What truly sets them apart is their unwavering dedication to quality. Each garment that passes through their capable hands receives meticulous care, ensuring it emerges fresh, clean, and flawlessly pressed. Their attention to detail is unparalleled, and they take pride in handling even the most delicate fabrics with precision and expertise. Beyond technical proficiency, this laundromat has forged a reputation for exceptional customer service. The staff exudes warmth and professionalism, creating an environment that makes clients feel valued and comfortable. Whether its a friendly smile or a willingness to go the extra mile, they consistently prove that their customers satisfaction is their top priority.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (10,4,b'1','Rushda Mansuri', '/images/laundry2.jpeg','In the realm of laundry services, one name shines brightly in the nearby area: a beacon of excellence, consistently earning the highest ratings from satisfied customers. This establishment has set itself apart by delivering impeccable service that goes above and beyond expectations. What truly sets them apart is their unwavering dedication to quality. Each garment that passes through their capable hands receives meticulous care, ensuring it emerges fresh, clean, and flawlessly pressed. Their attention to detail is unparalleled, and they take pride in handling even the most delicate fabrics with precision and expertise. Beyond technical proficiency, this laundromat has forged a reputation for exceptional customer service. The staff exudes warmth and professionalism, creating an environment that makes clients feel valued and comfortable. Whether its a friendly smile or a willingness to go the extra mile, they consistently prove that their customers satisfaction is their top priority.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (11,4,b'1','Rushda Mansuri', '/images/laundry3.jpeg', 'In the realm of laundry services, one name shines brightly in the nearby area: a beacon of excellence, consistently earning the highest ratings from satisfied customers. This establishment has set itself apart by delivering impeccable service that goes above and beyond expectations. What truly sets them apart is their unwavering dedication to quality. Each garment that passes through their capable hands receives meticulous care, ensuring it emerges fresh, clean, and flawlessly pressed. Their attention to detail is unparalleled, and they take pride in handling even the most delicate fabrics with precision and expertise. Beyond technical proficiency, this laundromat has forged a reputation for exceptional customer service. The staff exudes warmth and professionalism, creating an environment that makes clients feel valued and comfortable. Whether its a friendly smile or a willingness to go the extra mile, they consistently prove that their customers satisfaction is their top priority.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (12,4,b'1','Rushda Mansuri', '/images/laundry4.jpeg', 'In the realm of laundry services, one name shines brightly in the nearby area: a beacon of excellence, consistently earning the highest ratings from satisfied customers. This establishment has set itself apart by delivering impeccable service that goes above and beyond expectations. What truly sets them apart is their unwavering dedication to quality. Each garment that passes through their capable hands receives meticulous care, ensuring it emerges fresh, clean, and flawlessly pressed. Their attention to detail is unparalleled, and they take pride in handling even the most delicate fabrics with precision and expertise. Beyond technical proficiency, this laundromat has forged a reputation for exceptional customer service. The staff exudes warmth and professionalism, creating an environment that makes clients feel valued and comfortable. Whether its a friendly smile or a willingness to go the extra mile, they consistently prove that their customers satisfaction is their top priority.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (13,4,b'1','Rushda Mansuri', '/images/laundry5.jpeg', 'In the realm of laundry services, one name shines brightly in the nearby area: a beacon of excellence, consistently earning the highest ratings from satisfied customers. This establishment has set itself apart by delivering impeccable service that goes above and beyond expectations. What truly sets them apart is their unwavering dedication to quality. Each garment that passes through their capable hands receives meticulous care, ensuring it emerges fresh, clean, and flawlessly pressed. Their attention to detail is unparalleled, and they take pride in handling even the most delicate fabrics with precision and expertise. Beyond technical proficiency, this laundromat has forged a reputation for exceptional customer service. The staff exudes warmth and professionalism, creating an environment that makes clients feel valued and comfortable. Whether its a friendly smile or a willingness to go the extra mile, they consistently prove that their customers satisfaction is their top priority.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (14,2,b'1','Rushda Mansuri', '/images/PetCare1.jpeg', 'This esteemed pet care service goes beyond the basics, offering a range of enriching activities and services tailored to each individual pets needs and preferences. Whether its a soothing massage, engaging playtime, or specialized dietary considerations, they leave no stone unturned in providing a holistic and fulfilling experience. Furthermore, this establishment is an advocate for responsible pet ownership and environmental stewardship. They actively participate in initiatives that promote animal welfare and sustainable practices. Overall, this top-rated pet care service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding pet care experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (15,2,b'1','Rushda Mansuri', '/images/PetCare2.jpeg', 'This esteemed pet care service goes beyond the basics, offering a range of enriching activities and services tailored to each individual pets needs and preferences. Whether its a soothing massage, engaging playtime, or specialized dietary considerations, they leave no stone unturned in providing a holistic and fulfilling experience. Furthermore, this establishment is an advocate for responsible pet ownership and environmental stewardship. They actively participate in initiatives that promote animal welfare and sustainable practices. Overall, this top-rated pet care service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding pet care experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (16,2,b'1','Rushda Mansuri', '/images/PetCare3.jpeg', 'This esteemed pet care service goes beyond the basics, offering a range of enriching activities and services tailored to each individual pets needs and preferences. Whether its a soothing massage, engaging playtime, or specialized dietary considerations, they leave no stone unturned in providing a holistic and fulfilling experience. Furthermore, this establishment is an advocate for responsible pet ownership and environmental stewardship. They actively participate in initiatives that promote animal welfare and sustainable practices. Overall, this top-rated pet care service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding pet care experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (17,2,b'1','Rushda Mansuri', '/images/PetCare4.jpeg', 'This esteemed pet care service goes beyond the basics, offering a range of enriching activities and services tailored to each individual pets needs and preferences. Whether its a soothing massage, engaging playtime, or specialized dietary considerations, they leave no stone unturned in providing a holistic and fulfilling experience. Furthermore, this establishment is an advocate for responsible pet ownership and environmental stewardship. They actively participate in initiatives that promote animal welfare and sustainable practices. Overall, this top-rated pet care service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding pet care experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (18,2,b'1','Rushda Mansuri', '/images/PetCare5.jpeg', 'This esteemed pet care service goes beyond the basics, offering a range of enriching activities and services tailored to each individual pets needs and preferences. Whether its a soothing massage, engaging playtime, or specialized dietary considerations, they leave no stone unturned in providing a holistic and fulfilling experience. Furthermore, this establishment is an advocate for responsible pet ownership and environmental stewardship. They actively participate in initiatives that promote animal welfare and sustainable practices. Overall, this top-rated pet care service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding pet care experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (19,1,b'1','Rushda Mansuri', '/images/Housekeeping1.jpg', 'The housekeeping team is comprised of dedicated professionals who approach their work with diligence and care. They are not only skilled in the technical aspects of cleaning, but also possess a keen understanding of organizing spaces for maximum comfort and functionality. The services reliability is another hallmark. Homeowners can trust that their scheduled cleaning appointments will be met promptly and efficiently. This consistency fosters a sense of trust and peace of mind. Moreover, this top-rated housekeeping service in the nearby area is committed to environmentally-friendly practices. They use eco-conscious cleaning products and implement sustainable techniques, demonstrating a commendable dedication to a healthier planet.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (20,1,b'1','Rushda Mansuri', '/images/Housekeeping2.jpg', 'The housekeeping team is comprised of dedicated professionals who approach their work with diligence and care. They are not only skilled in the technical aspects of cleaning, but also possess a keen understanding of organizing spaces for maximum comfort and functionality. The services reliability is another hallmark. Homeowners can trust that their scheduled cleaning appointments will be met promptly and efficiently. This consistency fosters a sense of trust and peace of mind. Moreover, this top-rated housekeeping service in the nearby area is committed to environmentally-friendly practices. They use eco-conscious cleaning products and implement sustainable techniques, demonstrating a commendable dedication to a healthier planet.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (21,1,b'1','Rushda Mansuri', '/images/Housekeeping3.jpg', 'The housekeeping team is comprised of dedicated professionals who approach their work with diligence and care. They are not only skilled in the technical aspects of cleaning, but also possess a keen understanding of organizing spaces for maximum comfort and functionality. The services reliability is another hallmark. Homeowners can trust that their scheduled cleaning appointments will be met promptly and efficiently. This consistency fosters a sense of trust and peace of mind. Moreover, this top-rated housekeeping service in the nearby area is committed to environmentally-friendly practices. They use eco-conscious cleaning products and implement sustainable techniques, demonstrating a commendable dedication to a healthier planet.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (22,1,b'1','Rushda Mansuri', '/images/Housekeeping4.jpg', 'The housekeeping team is comprised of dedicated professionals who approach their work with diligence and care. They are not only skilled in the technical aspects of cleaning, but also possess a keen understanding of organizing spaces for maximum comfort and functionality. The services reliability is another hallmark. Homeowners can trust that their scheduled cleaning appointments will be met promptly and efficiently. This consistency fosters a sense of trust and peace of mind. Moreover, this top-rated housekeeping service in the nearby area is committed to environmentally-friendly practices. They use eco-conscious cleaning products and implement sustainable techniques, demonstrating a commendable dedication to a healthier planet.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (23,1,b'1','Rushda Mansuri', '/images/Housekeeping5.jpg', 'The housekeeping team is comprised of dedicated professionals who approach their work with diligence and care. They are not only skilled in the technical aspects of cleaning, but also possess a keen understanding of organizing spaces for maximum comfort and functionality. The services reliability is another hallmark. Homeowners can trust that their scheduled cleaning appointments will be met promptly and efficiently. This consistency fosters a sense of trust and peace of mind. Moreover, this top-rated housekeeping service in the nearby area is committed to environmentally-friendly practices. They use eco-conscious cleaning products and implement sustainable techniques, demonstrating a commendable dedication to a healthier planet.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (24,5,b'1','Rushda Mansuri', '/images/ChildCare1.jpg', 'The facility itself is designed to be a stimulating and secure environment. It offers age-appropriate play areas, cozy resting spots, and carefully curated learning materials. Safety measures are rigorously enforced, ensuring that parents can trust their child is in capable and caring hands. This esteemed childcare service goes beyond the basics, offering a range of enriching activities and educational programs tailored to each childs unique interests and needs. Whether its fostering creativity, encouraging socialization, or promoting cognitive development, they leave no stone unturned in providing a holistic and nurturing experience. Furthermore, this establishment is an advocate for open communication with parents, ensuring they are kept informed about their childs progress and activities. Overall, this top-rated childcare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding childcare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (25,5,b'1','Rushda Mansuri', '/images/ChildCare2.jpg', 'The facility itself is designed to be a stimulating and secure environment. It offers age-appropriate play areas, cozy resting spots, and carefully curated learning materials. Safety measures are rigorously enforced, ensuring that parents can trust their child is in capable and caring hands. This esteemed childcare service goes beyond the basics, offering a range of enriching activities and educational programs tailored to each childs unique interests and needs. Whether its fostering creativity, encouraging socialization, or promoting cognitive development, they leave no stone unturned in providing a holistic and nurturing experience.Furthermore, this establishment is an advocate for open communication with parents, ensuring they are kept informed about their childs progress and activities. Overall, this top-rated childcare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding childcare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (26,5,b'1','Rushda Mansuri', '/images/ChildCare3.jpg', 'The facility itself is designed to be a stimulating and secure environment. It offers age-appropriate play areas, cozy resting spots, and carefully curated learning materials. Safety measures are rigorously enforced, ensuring that parents can trust their child is in capable and caring hands. This esteemed childcare service goes beyond the basics, offering a range of enriching activities and educational programs tailored to each childs unique interests and needs. Whether its fostering creativity, encouraging socialization, or promoting cognitive development, they leave no stone unturned in providing a holistic and nurturing experience. Furthermore, this establishment is an advocate for open communication with parents, ensuring they are kept informed about their childs progress and activities. Overall, this top-rated childcare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding childcare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (27,5,b'1','Rushda Mansuri', '/images/ChildCare4.jpg', 'The facility itself is designed to be a stimulating and secure environment. It offers age-appropriate play areas, cozy resting spots, and carefully curated learning materials. Safety measures are rigorously enforced, ensuring that parents can trust their child is in capable and caring hands. This esteemed childcare service goes beyond the basics, offering a range of enriching activities and educational programs tailored to each childs unique interests and needs. Whether its fostering creativity, encouraging socialization, or promoting cognitive development, they leave no stone unturned in providing a holistic and nurturing experience. Furthermore, this establishment is an advocate for open communication with parents, ensuring they are kept informed about their childs progress and activities. Overall, this top-rated childcare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding childcare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (28,5,b'1','Rushda Mansuri', '/images/ChildCare5.jpg', 'The facility itself is designed to be a stimulating and secure environment. It offers age-appropriate play areas, cozy resting spots, and carefully curated learning materials. Safety measures are rigorously enforced, ensuring that parents can trust their child is in capable and caring hands. This esteemed childcare service goes beyond the basics, offering a range of enriching activities and educational programs tailored to each childs unique interests and needs. Whether its fostering creativity, encouraging socialization, or promoting cognitive development, they leave no stone unturned in providing a holistic and nurturing experience. Furthermore, this establishment is an advocate for open communication with parents, ensuring they are kept informed about their childs progress and activities. Overall, this top-rated childcare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what a truly outstanding childcare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (29,3,b'1','Rushda Mansuri', '/images/SeniorCare1.jpg', ' The facility is designed to be a comfortable and inviting home away from home for seniors. It offers spacious and accessible living areas, well-maintained gardens, and a range of amenities tailored to promote physical and mental well-being. Safety measures are paramount, ensuring a secure and nurturing environment for seniors. This top-rated SeniorCare service goes beyond just basic care; it provides a comprehensive range of services to address the physical, emotional, and social needs of seniors. From nutritious meal plans to engaging activities and healthcare coordination, they provide a holistic and fulfilling experience that respects individual preferences and abilities. Moreover, this establishment is an advocate for open communication with families, ensuring they are kept well-informed about their loved ones progress and activities. Overall, this SeniorCare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what an outstanding SeniorCare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (30,3,b'1','Rushda Mansuri', '/images/SeniorCare2.jpg', ' The facility is designed to be a comfortable and inviting home away from home for seniors. It offers spacious and accessible living areas, well-maintained gardens, and a range of amenities tailored to promote physical and mental well-being. Safety measures are paramount, ensuring a secure and nurturing environment for seniors. This top-rated SeniorCare service goes beyond just basic care; it provides a comprehensive range of services to address the physical, emotional, and social needs of seniors. From nutritious meal plans to engaging activities and healthcare coordination, they provide a holistic and fulfilling experience that respects individual preferences and abilities. Moreover, this establishment is an advocate for open communication with families, ensuring they are kept well-informed about their loved ones progress and activities. Overall, this SeniorCare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what an outstanding SeniorCare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (31,3,b'1','Rushda Mansuri', '/images/SeniorCare3.jpg', ' The facility is designed to be a comfortable and inviting home away from home for seniors. It offers spacious and accessible living areas, well-maintained gardens, and a range of amenities tailored to promote physical and mental well-being. Safety measures are paramount, ensuring a secure and nurturing environment for seniors. This top-rated SeniorCare service goes beyond just basic care; it provides a comprehensive range of services to address the physical, emotional, and social needs of seniors. From nutritious meal plans to engaging activities and healthcare coordination, they provide a holistic and fulfilling experience that respects individual preferences and abilities. Moreover, this establishment is an advocate for open communication with families, ensuring they are kept well-informed about their loved ones progress and activities. Overall, this SeniorCare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what an outstanding SeniorCare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (32,3,b'1','Rushda Mansuri', '/images/SeniorCare4.jpg', ' The facility is designed to be a comfortable and inviting home away from home for seniors. It offers spacious and accessible living areas, well-maintained gardens, and a range of amenities tailored to promote physical and mental well-being. Safety measures are paramount, ensuring a secure and nurturing environment for seniors. This top-rated SeniorCare service goes beyond just basic care; it provides a comprehensive range of services to address the physical, emotional, and social needs of seniors. From nutritious meal plans to engaging activities and healthcare coordination, they provide a holistic and fulfilling experience that respects individual preferences and abilities. Moreover, this establishment is an advocate for open communication with families, ensuring they are kept well-informed about their loved ones progress and activities. Overall, this SeniorCare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what an outstanding SeniorCare experience should be.');
INSERT INTO ServiceProviderDetails (UserDetailId, ServiceTypeId, IsActive, CreatedBy, ImageURL, Description) VALUES (33,3,b'1','Rushda Mansuri', '/images/SeniorCare5.jpg', ' The facility is designed to be a comfortable and inviting home away from home for seniors. It offers spacious and accessible living areas, well-maintained gardens, and a range of amenities tailored to promote physical and mental well-being. Safety measures are paramount, ensuring a secure and nurturing environment for seniors. This top-rated SeniorCare service goes beyond just basic care; it provides a comprehensive range of services to address the physical, emotional, and social needs of seniors. From nutritious meal plans to engaging activities and healthcare coordination, they provide a holistic and fulfilling experience that respects individual preferences and abilities. Moreover, this establishment is an advocate for open communication with families, ensuring they are kept well-informed about their loved ones progress and activities. Overall, this SeniorCare service in the nearby area stands as a paragon of excellence. Their stellar ratings are a testament to their exceptional care, and they continue to set the standard for what an outstanding SeniorCare experience should be.');

*************

-- PriceDetails

INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (1,4,49.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (2,4,39.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (3,4,29.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (4,4,29.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (5,4,35.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (6,2,59.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (7,2,129.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (8,2,129.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (9,2,69.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (10,2,79.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (11,1,49.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (12,1,35.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (13,1,29.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (14,1,229.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (15,1,235.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (16,5,259.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (17,5,129.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (18,5,129.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (19,5,169.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (20,5,289.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (21,3,69.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (22,3,99.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (23,3,89.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (24,3,99.99,b'1','Rushda Mansuri');
INSERT INTO PriceDetails (ServiceProviderId, ServiceTypeId, Price, IsActive, CreatedBy) VALUES (25,3,95.99,b'1','Rushda Mansuri');

*************

-- FavouriteDetails
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (1,1,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (1,2,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (1,3,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (3,4,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (3,5,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (3,6,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (4,7,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (4,8,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (4,9,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (5,10,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (5,11,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (5,12,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (6,13,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (6,14,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (6,15,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (7,16,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (7,17,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (7,18,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (8,19,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (8,20,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (8,21,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (2,22,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (2,23,b'1', b'1', 'Rushda Mansuri');
INSERT INTO FavouriteDetails (UserId, ServiceProviderId, IsFavourite, IsActive, CreatedBy) VALUES (2,24,b'1', b'1', 'Rushda Mansuri');


*/
