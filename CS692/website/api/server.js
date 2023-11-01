const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRoles = require('./models/userRoles');
const StateDetails = require('./models/StateDetails');
const SubscriptionTypes = require('./models/SubscriptionTypes');
const UserDetails = require('./models/UserDetails');
const ServiceTypes = require('./models/ServiceTypes');
const ServiceProviderDetails = require('./models/ServiceProviderDetails');
const PriceDetails = require('./models/PriceDetails');
const FavouriteDetails = require('./models/FavouriteDetails');
const RatingDetails = require('./models/RatingDetails');
const CartDetails = require('./models/CartDetails'); 
const sequelize = require('./database');
const cookie = require('cookie');
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

const JWT_SECRET = 'your_jwt_secret';

const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await UserDetails.findByPk(decoded.id);
        if (!user) {
            throw new Error('User not found');
        }
        req.user = user;
        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(401).json({ message: 'Please authenticate' });
    }
};

app.post('/register', async (req, res) => {
    const {
        FirstName,
        LastName,
        Address1,
        Address2,
        City,
        StateId,
        Country,
        ZipCode,
        EmailId,
        ContactNo,
        Password,
        SubscriptionTypeId,
        UserRoledId,
        IsActive,
        CreatedBy
    } = req.body;

    const existingUser = await UserDetails.findOne({ where: { EmailId } });
    if (existingUser) {
        return res.status(400).send('Email already registered.');
    }

    const hashedPassword = await bcrypt.hash(Password, 8);

    const user = await UserDetails.create({
        FirstName,
        LastName,
        Address1,
        Address2,
        City,
        StateId : 31,
        Country,
        ZipCode,
        EmailId,
        ContactNo,
        Password: hashedPassword,
        SubscriptionTypeId : 1,
        UserRoledId : 2,
        IsActive : true ,
        CreatedBy : "System"
    });

    res.status(201).json({
        userId: user.UserId,
        email: user.EmailId,
        firstName: user.FirstName,
        lastName: user.LastName
    });
});

app.post('/login', async (req, res) => {
    const { EmailId, Password } = req.body;

    // Try to find the user with the provided email
    const user = await UserDetails.findOne({ where: { EmailId } });

    if (!user) {
        return res.status(404).send('User not found.');
    }

    // Check if the provided password matches the one in the database
    const isPasswordMatch = Password === user.Password;

    if (!isPasswordMatch) {
        return res.status(401).send('Incorrect password.');
    }

    // If all is good, create a JWT token for the user
    const token = jwt.sign({ id: user.UserId }, JWT_SECRET, { expiresIn: '1h' });
    const tokenCookie = cookie.serialize('token', token, {
        httpOnly: true,
        maxAge: 3600000, // 1 hour in milliseconds
        sameSite: 'strict', // Adjust the sameSite value as needed
        secure: process.env.NODE_ENV === 'production', // Enable in production
      });
      
    res.setHeader('Set-Cookie', tokenCookie);
    res.status(200).json({ token, userId: user.UserId });
});

app.get('/user/profile', authenticate, async (req, res) => {
    try {
        // Extract user details from the authenticated user (from the middleware)
        const { UserId, FirstName, LastName, Address1, Address2, City, StateId, Country, ZipCode, EmailId, ContactNo, SubscriptionTypeId, UserRoledId, IsActive, CreatedBy } = req.user;

        // Send the user details as a response
        res.status(200).json({
            UserId,
            FirstName,
            LastName,
            Address1,
            Address2,
            City,
            StateId,
            Country,
            ZipCode,
            EmailId,
            ContactNo,
            SubscriptionTypeId,
            UserRoledId,
            IsActive,
            CreatedBy
        });
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        res.status(500).send('Failed to retrieve user profile.');
    }
});

app.put('/user/profile', authenticate, async (req, res) => {
    try {
        const { UserId } = req.user;
        
        // Assuming UserDetails is the sequelize model
        const updatedUser = await UserDetails.update(req.body, {
            where: { UserId: UserId }
        });

        if (updatedUser[0] === 0) {
            return res.status(404).send('User not found');
        }

        res.status(200).send('User profile updated successfully');
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).send('Failed to update user profile.');
    }
});

app.delete('/user/profile', authenticate, async (req, res) => {
    try {
        const { UserId } = req.user;
        // Assuming UserDetails is the sequelize model
        const result = await UserDetails.destroy({
            where: { UserId: UserId }
        });

        if (!result) {
            return res.status(404).send('User not found');
        }

        res.status(200).send('User profile deleted successfully');
    } catch (error) {
        console.error('Error deleting user profile:', error);
        res.status(500).send('Failed to delete user profile.');
    }
});


app.get('/userroles', (req, res) => {
    UserRoles.findAll()
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            return res.status(500).send('Error retrieving data from the database.');
        });
});

app.get('/statedetails', async (req, res) => {
    try {
        const states = await StateDetails.findAll();
        res.json(states);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/subscriptiontypes', async (req, res) => {
    try {
        const subscriptions = await SubscriptionTypes.findAll();
        res.json(subscriptions);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/userdetails', async (req, res) => {
    try {
        const users = await UserDetails.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});
app.get('/servicetypes', async (req, res) => {
    try {
        const services = await ServiceTypes.findAll();
        res.json(services);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/serviceproviderdetails', async (req, res) => {
    try {
        const providers = await ServiceProviderDetails.findAll();
        res.json(providers);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/pricedetails', async (req, res) => {
    try {
        const prices = await PriceDetails.findAll();
        res.json(prices);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/favouritedetails', async (req, res) => {
    try {
        const favourites = await FavouriteDetails.findAll();
        res.json(favourites);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/serviceproviders', async (req, res) => {
    const serviceProviderListSQL = `
        SELECT 
            UserDetails.UserId AS UserId, 
            UserDetails.FirstName AS FirstName, 
            UserDetails.LastName AS LastName, 
            UserDetails.Address1 AS Address1, 
            UserDetails.Address2 AS Address2, 
            UserDetails.City AS City, 
            StateDetails.StateName AS State,
            UserDetails.ZipCode As ZipCode, 
            UserDetails.EmailId AS Email, 
            UserDetails.Password AS Password, 
            UserDetails.ContactNo AS ContactNo, 
            ServiceProviderDetails.ServiceProviderId AS ServiceProviderId,
            ServiceProviderDetails.ImageURL AS ImageURL, 
            ServiceProviderDetails.Description AS Description, 
            ServiceTypes.ServiceTypeName AS ServiceType, 
            PriceDetails.OriginalPrice AS OriginalPrice,
            PriceDetails.DiscountinPercentage AS DiscountinPercentage,
            PriceDetails.DiscountedPrice AS DiscountedPrice,
            ServiceProviderDetails.Ratings AS Ratings, 
            (CASE WHEN ServiceProviderDetails.Ratings >= 4 THEN true ELSE false END) AS IsHotDeal
        FROM ServiceProviderDetails 
        JOIN UserDetails ON ServiceProviderDetails.UserDetailId = UserDetails.UserId 
        JOIN ServiceTypes ON ServiceProviderDetails.ServiceTypeId = ServiceTypes.ServiceTypeId 
        JOIN PriceDetails ON ServiceProviderDetails.ServiceProviderId = PriceDetails.ServiceProviderId 
        JOIN StateDetails ON StateDetails.StateId = UserDetails.StateId 
        WHERE UserDetails.UserRoledId = 3`;

    try {
        const serviceProviders = await sequelize.query(serviceProviderListSQL, { type: sequelize.QueryTypes.SELECT });
        res.json(serviceProviders);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.post('/favouritedetails', async (req, res) => {
    try {
      const {
        UserId,
        ServiceProviderId,
        IsFavourite,
        IsActive,
        CreatedBy
      } = req.body;
  
      // Create a new record in the FavouriteDetails table
      const newFavourite = await FavouriteDetails.create({
        UserId,
        ServiceProviderId,
        IsFavourite : true,
        IsActive : true,
        CreatedBy : "System"
      });
  
      res.json(newFavourite);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error inserting data into the database.');
    }
  });

app.delete('/favouritedetails/:id', async (req, res, next) => {
    const favouriteId = req.params.id;

    // Check if the record exists before attempting to delete
    const existingFavorite = await FavouriteDetails.findByPk(favouriteId);

    if (!existingFavorite) {
        return res.status(404).json({ message: 'Favorite not found' });
    }

    // Perform the delete operation
    await FavouriteDetails.destroy({
        where: {
            FavouriteId: favouriteId,
        },
    });

    return res.status(204).send(); // Respond with a 204 No Content status for successful deletion
}, (err, req, res, next) => { // Error handling middleware
    console.error(err);
    res.status(500).json({ message: 'Error deleting data from the database.' });
}); 

app.get('/favouriteslist', async (req, res) => {
    const favouriteslistSQL = `
    SELECT
    UD.UserId AS UserId,
    SUD.FirstName AS FirstName,
    SUD.LastName AS LastName,
    SUD.Address1 AS Address1,
    SUD.Address2 AS Address2,
    SUD.City AS City,
    SUD.ZipCode As ZipCode,
    SUD.EmailId AS Email,
    SUD.ContactNo AS ContactNo,
    SPD.ServiceProviderId AS ServiceProviderId,
    SPD.ImageURL AS ImageURL,
    SPD.Description AS Description,
    ST.ServiceTypeName AS ServiceType,
    FD.FavouriteId AS FavouriteId,
    PD.OriginalPrice AS OriginalPrice,
    PD.DiscountinPercentage AS DiscountinPercentage,
    PD.DiscountedPrice AS DiscountedPrice,
    SPD.Ratings AS Ratings, 
    (CASE WHEN SPD.Ratings >= 4 THEN true ELSE false END) AS IsHotDeal
    FROM UserDetails UD
    JOIN FavouriteDetails FD ON UD.UserId = FD.UserId
    JOIN ServiceProviderDetails SPD ON FD.ServiceProviderId = SPD.ServiceProviderId
    JOIN ServiceTypes ST ON SPD.ServiceTypeId = ST.ServiceTypeId
    JOIN PriceDetails PD ON SPD.ServiceProviderId = PD.ServiceProviderId
    JOIN UserDetails SUD ON SPD.UserDetailId = SUD.UserId
    JOIN StateDetails SD ON SD.StateId = SUD.StateId
    WHERE UD.UserRoledId = 2 AND UD.UserId = 1`;

    try {
        const favourites = await sequelize.query(favouriteslistSQL, { type: sequelize.QueryTypes.SELECT });
        res.json(favourites);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/userHistory/:userId', async (req, res) => {
    const userId = req.params.userId;

    const userHistorySQL = `
        SELECT 
            UHD.UserId,
            UHD.Activity,
            UHD.Comments,
            UD.FirstName,
            UD.LastName,
            UD.EmailId,
            UD.ContactNo,
            UHD.ActivityDate,
            UHD.CreatedBy
        FROM UserHistoryDetails UHD
        JOIN UserDetails UD ON UHD.UserId = UD.UserId
        WHERE UHD.UserId = ?`;

    try {
        const userHistory = await sequelize.query(userHistorySQL, {
            replacements: [userId],
            type: sequelize.QueryTypes.SELECT
        });
        res.json(userHistory);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/services/:serviceId', async (req, res) => {
    const serviceId = req.params.serviceId;

    const serviceDetailsSQL = `
        SELECT 
            UserDetails.UserId AS UserId, 
            UserDetails.FirstName AS FirstName, 
            UserDetails.LastName AS LastName, 
            UserDetails.Address1 AS Address1, 
            UserDetails.Address2 AS Address2, 
            UserDetails.City AS City, 
            StateDetails.StateName AS State,
            UserDetails.ZipCode As ZipCode, 
            UserDetails.EmailId AS Email, 
            UserDetails.Password AS Password, 
            UserDetails.ContactNo AS ContactNo, 
            ServiceProviderDetails.ServiceProviderId AS ServiceProviderId,
            ServiceProviderDetails.ImageURL AS ImageURL, 
            ServiceProviderDetails.Description AS Description, 
            ServiceTypes.ServiceTypeName AS ServiceType, 
            PriceDetails.OriginalPrice AS OriginalPrice,
            PriceDetails.DiscountinPercentage AS DiscountinPercentage,
            PriceDetails.DiscountedPrice AS DiscountedPrice,
            ServiceProviderDetails.Ratings AS Ratings, 
            (CASE WHEN ServiceProviderDetails.Ratings >= 4 THEN true ELSE false END) AS IsHotDeal
        FROM ServiceProviderDetails 
        JOIN UserDetails ON ServiceProviderDetails.UserDetailId = UserDetails.UserId 
        JOIN ServiceTypes ON ServiceProviderDetails.ServiceTypeId = ServiceTypes.ServiceTypeId 
        JOIN PriceDetails ON ServiceProviderDetails.ServiceProviderId = PriceDetails.ServiceProviderId 
        JOIN StateDetails ON StateDetails.StateId = UserDetails.StateId 
        WHERE UserDetails.UserRoledId = 3 AND ServiceProviderDetails.ServiceProviderId = ?`;

    try {
        const serviceDetails = await sequelize.query(serviceDetailsSQL, {
            type: sequelize.QueryTypes.SELECT,
            replacements: [serviceId]
        });
        res.json(serviceDetails);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/ratings/:serviceProviderId', async (req, res) => {
    const serviceProviderId = req.params.serviceProviderId; 

    const ratingsSQL = `
        SELECT 
            RatingDetails.RatingsId AS RatingsId,
            RatingDetails.UserId AS UserId,
            RatingDetails.Ratings AS Ratings,
            RatingDetails.Comments AS Comments,
            RatingDetails.ReviewGivenDate AS ReviewGivenDate,
            UserDetails.FirstName AS FirstName,
            UserDetails.LastName AS LastName
        FROM RatingDetails 
        JOIN UserDetails ON RatingDetails.UserId = UserDetails.UserId 
        WHERE RatingDetails.ServiceProviderId = ?`;

    try {
        const ratings = await sequelize.query(ratingsSQL, { 
            type: sequelize.QueryTypes.SELECT,
            replacements: [serviceProviderId]
        });
        res.json(ratings);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.get('/orderhistory/:userId', async (req, res) => {
    const userId = req.params.userId;

    const orderHistorySQL = `
        SELECT
            BD.BookingId AS BookingId,
            BD.UserId AS UserId,
            BD.ServiceProviderId1 AS ServiceProviderId1,
            BD.ServiceProviderId2 AS ServiceProviderId2,
            BD.ServiceProviderId3 AS ServiceProviderId3,
            BD.NetAmount AS NetAmount,
            BD.Tax AS Tax,
            BD.Discount AS Discount,
            BD.TotalPrice AS TotalPrice,
            BD.BookingStartDate AS BookingStartDate,
            BD.BookingEndDate AS BookingEndDate,
            UD.FirstName AS CustFirstName,
            UD.LastName AS CustLastName,
            SPD1.UserDetailId AS SP1UserId,
            USPD1.FirstName AS SP1FirstName,
            USPD1.LastName AS SP1LastName,
            USPD1.Address1 AS SP1Address1,
            USPD1.Address2 AS SP1Address2,
            USPD1.City AS SP1City,
            USPD1.Country AS SP1Country,
            USPD1.ZipCode AS SP1ZipCode,
            USPD1.EmailId AS SP1EmailId,
            USPD1.ContactNo AS SP1ContactNo,
            SPD2.UserDetailId AS SP2UserId,
            USPD2.FirstName AS SP2FirstName,
            USPD2.LastName AS SP2LastName,
            USPD2.Address1 AS SP2Address1,
            USPD2.Address2 AS SP2Address2,
            USPD2.City AS SP2City,
            USPD2.Country AS SP2Country,
            USPD2.ZipCode AS SP2ZipCode,
            USPD2.EmailId AS SP2EmailId,
            USPD2.ContactNo AS SP2ContactNo,
            SPD3.UserDetailId AS SP3UserId,
            USPD3.FirstName AS SP3FirstName,
            USPD3.LastName AS SP3LastName,
            USPD3.Address1 AS SP3Address1,
            USPD3.Address2 AS SP3Address2,
            USPD3.City AS SP3City,
            USPD3.Country AS SP3Country,
            USPD3.ZipCode AS SP3Country,
            USPD3.EmailId AS SP3EmailId,
            USPD3.ContactNo AS SP3ContactNo
        FROM BookingDetails BD 
        JOIN UserDetails UD ON BD.UserId = UD.UserId
        JOIN ServiceProviderDetails SPD1 ON BD.ServiceProviderId1 = SPD1.ServiceProviderId
        LEFT JOIN ServiceProviderDetails SPD2 ON BD.ServiceProviderId2 = SPD2.ServiceProviderId
        LEFT JOIN ServiceProviderDetails SPD3 ON BD.ServiceProviderId3 = SPD3.ServiceProviderId
        JOIN UserDetails USPD1 ON SPD1.UserDetailId = USPD1.UserId
        LEFT JOIN UserDetails USPD2 ON SPD2.UserDetailId = USPD2.UserId
        LEFT JOIN UserDetails USPD3 ON SPD3.UserDetailId = USPD3.UserId
        WHERE  BD.UserId = :userId`;

    try {
        const orderHistory = await sequelize.query(orderHistorySQL, { 
            replacements: { userId: userId },
            type: sequelize.QueryTypes.SELECT 
        });
        res.json(orderHistory);
    } catch (err) {
        res.status(500).send('Error retrieving order history from the database.');
    }
});

app.post('/ratingdetails', async (req, res) => {
    try {
        const {
            UserId,
            ServiceProviderId,
            Ratings,
            Comments,
            ReviewGivenDate,
            IsActive,
            CreatedBy,
            UpdatedBy
        } = req.body;
  
        // Create a new record in the RatingDetails table
        const newRating = await RatingDetails.create({
            UserId,
            ServiceProviderId,
            Ratings,
            Comments,
            ReviewGivenDate: new Date(), 
            IsActive: IsActive !== undefined ? IsActive : true,  
            CreatedDate: new Date(),
            UpdatedDate: new Date(),
            CreatedBy: CreatedBy || "System",
            UpdatedBy: UpdatedBy || "System"
        });
  
        res.json(newRating);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting data into the database.');
    }
});

app.post('/cartdetails', async (req, res) => {
    try {
        const {
            UserId,
            ServiceProviderId,
            AddToCart,
            IsActive,
            CreatedBy,
            UpdatedBy
        } = req.body;
  
        // Create a new record in the CartDetails table
        const newCartDetail = await CartDetails.create({
            UserId,
            ServiceProviderId,
            AddToCart: true,
            IsActive: IsActive !== undefined ? IsActive : true,  
            CreatedDate: new Date(),
            UpdatedDate: new Date(),
            CreatedBy: "System",
            UpdatedBy: ""
        });
  
        res.json(newCartDetail);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting data into the database.');
    }
});

app.get('/cartdetails/:userId', async (req, res) => {
    const userId = req.params.userId;
    const cartDetailsSQL = `
    SELECT
        CD.CartDetailId AS CartDetailId,
        UD.UserId AS UserId,
        SUD.FirstName AS FirstName,
        SUD.LastName AS LastName,
        SUD.Address1 AS Address1,
        SUD.Address2 AS Address2,
        SUD.City AS City,
        SUD.ZipCode As ZipCode,
        SUD.EmailId AS Email,
        SUD.ContactNo AS ContactNo,
        SPD.ServiceProviderId AS ServiceProviderId,
        SPD.ImageURL AS ImageURL,
        SPD.Description AS Description,
        ST.ServiceTypeName AS ServiceType,
        PD.OriginalPrice AS OriginalPrice,
        PD.DiscountinPercentage AS DiscountinPercentage,
        PD.DiscountedPrice AS DiscountedPrice,
        SPD.Ratings AS Ratings,
        (CASE WHEN SPD.Ratings >= 4 THEN true ELSE false END) AS IsHotDeal
    FROM UserDetails UD
    JOIN CartDetails CD ON UD.UserId = CD.UserId
    JOIN ServiceProviderDetails SPD ON CD.ServiceProviderId = SPD.ServiceProviderId
    JOIN ServiceTypes ST ON SPD.ServiceTypeId = ST.ServiceTypeId
    JOIN PriceDetails PD ON SPD.ServiceProviderId = PD.ServiceProviderId
    JOIN UserDetails SUD ON SPD.UserDetailId = SUD.UserId
    JOIN StateDetails SD ON SD.StateId = SUD.StateId
    WHERE UD.UserRoledId = 2 AND UD.UserId = ?`;

    try {
        const cartDetails = await sequelize.query(cartDetailsSQL,
             { replacements: [userId],
                type: sequelize.QueryTypes.SELECT});
        res.json(cartDetails);
    } catch (err) {
        res.status(500).send('Error retrieving data from the database.');
    }
});

app.delete('/cartdetails/:id', async (req, res, next) => {
    const cartId = req.params.id;
    const existingCart = await CartDetails.findByPk(cartId);

    if (!existingCart) {
        return res.status(404).json({ message: 'Cart item not found' });
    }

    await CartDetails.destroy({
        where: {
            CartDetailId: cartId,
        },
    });

    return res.status(204).send(); 
}, (err, req, res, next) => { 
    console.error(err);
    res.status(500).json({ message: 'Error deleting data from the database.' });
}); 


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});