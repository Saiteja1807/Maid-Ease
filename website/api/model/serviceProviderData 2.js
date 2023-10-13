const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Thankyou@1415',
  database: 'maid_ease'
}); 
connection.connect();

app.get("/serviceProviderList", function(response){
  var sql = "SELECT * FROM ServiceProviderDetails" ;
  connection.query(sql ,function(err, result ){
    if(err)throw err;
    console.log("result : "+JSON.stringify(result));
    response.end(JSON.stringify(result));
    })
    })



// Create a Node.js function that will connect to the MySQL database and perform a join on the table
//var serviceProviderList = "SELECT UserDetails.UserId AS UserId, UserDetails.FirstName AS FirstName, UserDetails.LastName AS LastName, UserDetails.Address1 AS Address1, UserDetails.Address2 AS Address2, UserDetails.City AS City, StateDetails.StateName AS State,UserDetails.ZipCode As ZIpCode, UserDetails.EmailId AS Email, UserDetails.Password AS Password, UserDetails.ContactNo AS ContactNo, ServiceProviderDetails.ImageURL AS ImageURL, ServiceProviderDetails.Description AS Description, ServiceTypes.ServiceTypeName AS ServiceType, PriceDetails.Price AS Price FROM ServiceProviderDetails JOIN UserDetails ON ServiceProviderDetails.UserDetailId = UserDetails.UserId JOIN ServiceTypes ON ServiceProviderDetails.ServiceTypeId = ServiceTypes.ServiceTypeId JOIN PriceDetails ON ServiceProviderDetails.ServiceProviderId = PriceDetails.ServiceProviderId JOIN StateDetails ON StateDetails.StateId = UserDetails.StateId WHERE UserDetails.UserRoledId = 3";
