var express = require("express");

var router = express.Router()


let orders = [
    {id : 1 , Description : "Rattan Egg Basket" , Price : 349 , Image :  'https://cawayan.onrender.com/images/home/newarrivals/EggBasket.png', Promos : 0, Sold : 0, Amount: 1}

]
// Create a get function with the given JSON Array.

router.get("/",(req, res ) => {
    res.send(orders);
}
);

//2. Create a get function using id

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let order= orders.find((item) => {
      return item.id === Number(id);
  });
  res.status(200).send(order ? order : {status: "Record not found!"});
});


// Add new entry
router.post('/add', (req, res) => {
  let lastItem = orders[orders.length - 1];
    let newEntry = {
        id: lastItem.id + 1,
        Description: req.body.Description,
        Price: req.body.Price,
        Stock: req.body.Stock,
        Sold: req.body.Sold,
        Status: req.body.Status,
        Sales: req.body.Sales,
    }
    orders.push(newEntry);
    res.status(200).send( newEntry );
});

router.post("/:id", (req, res) =>{
  let lastItem = orders[orders.length - 1];
  let data = {
    id: lastItem.id + 1,
    Description: req.body.Description,
    Price: req.body.Price,
    Stock: req.body.Stock,
    Image: req.body.Image,
    Amount: req.body.Amount,
  };
  orders.push(data);
  res.status(200).send( data );
});

 router.delete("/:id",(req, res)=>{
  const { id } = req.params;
  products = products.filter(item=>item.id != Number(id));

  res.status(200).send({status: "Record " + id + " has been deleted.", id: id});

});

router.put("/:id", (req, res)=>{
  const { id } = req.params;

  let prod = orders.find((item) => {
      return item.id === Number(id);
  });

  prod.id = req.body.id;
  prod.Description = req.body.Description;
  prod.Price = req.body.Price;
  prod.Category = req.body.Category;
  prod.Image = req.body.Image;

  res.status(200).send( prod );

});

router.get("/count/all", (req, res) => {
  res.status(200).send({total:products.length});
  
});

router.get("/Description/:keyword", (req, res) => {
  const { keyword } = req.params;
  const result = products.filter(item=>item.Description.toLowerCase().includes(keyword));

  if (result.length > 0) {
   res.status(200).send(result );
  }else{
   res.status(200).send(keyword + " not found!");
  }
});





module.exports = router;

