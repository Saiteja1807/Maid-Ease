const express = require('express');
const app = express();
const UserRoles = require('./models/userRoles');
const StateDetails = require('./models/StateDetails');
const SubscriptionTypes = require('./models/SubscriptionTypes');
const UserDetails = require('./models/UserDetails');
const ServiceTypes = require('./models/ServiceTypes');
const ServiceProviderDetails = require('./models/ServiceProviderDetails');
const PriceDetails = require('./models/PriceDetails');
const FavouriteDetails = require('./models/FavouriteDetails');
const sequelize = require('./database');


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
            ServiceProviderDetails.ImageURL AS ImageURL, 
            ServiceProviderDetails.Description AS Description, 
            ServiceTypes.ServiceTypeName AS ServiceType, 
            PriceDetails.Price AS Price 
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



const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
