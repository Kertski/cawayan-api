var express = require("express");

var router = express.Router()


let orders = [
    {id : 1 , Description : "Rattan Egg Basket" , Price : 349, Sold : 0, Amount: 12 , Status: "delivered", Sales: "delivered"} ,

];

// Create a get function with the given JSON Array.

router.get("/",(req, res ) => {
    res.send(orders);
}
);



// Add new entry
router.post('/add', (req, res) => {
  let lastItem = orders[orders.length - 1];
    let newEntry = {
        id: lastItem.id + 1,
        Description: req.body.Description,
        Price: req.body.Price,
        Sold: req.body.Sold,
        Status: req.body.Status,
        Sales: req.body.Sales,
    }
    orders.push(newEntry);
    res.status(200).send( newEntry );
});



module.exports = router;

