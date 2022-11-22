var express = require("express");

var router = express.Router()


let invoice  = [
    {invoiceNum : "CWYN0001" , name : "Juan Dela Cruz" , totalpcs : 115 , sales  : 26335 , dateinvoice: 11/12/22 } , 
    {invoiceNum : "CWYN0002" , name : "Anton Sanchez" , totalpcs : 100 , sales  : 49900 , dateinvoice: 11/12/22  } , 
    {invoiceNum : "CWYN0003" , name : "Analyn Romero" , totalpcs : 156 , sales  : 85644 , dateinvoice: 11/12/22  } , 
    {invoiceNum : "CWYN0004" , name : "Malou Francisco" , totalpcs : 85 , sales  : 199665, dateinvoice: 11/12/22   } , 
    {invoiceNum : "CWYN0005" , name : "Rodgie Sicat" , totalpcs : 26 , sales  : 12974  , dateinvoice: 11/12/22 } , 
  

    


];

// Create a get function with the given JSON Array.

router.get("/",(req, res ) => {
    res.send(invoice);
}
);









module.exports = router;

