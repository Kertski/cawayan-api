var express = require("express");

var router = express.Router()


let orders = [
    {id : 1 , Description : "Rattan Egg Basket" , Price : 349, Sold : 0, Amount: 1} , 

];

// Create a get function with the given JSON Array.

router.get("/",(req, res ) => {
    res.send(orders);
}
);

//2. Create a get function using id

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let product = products.find((item) => {
      return item.id === Number(id);
  });
  res.status(200).send(product ? product : {status: "Record not found!"});
});


// Add new entry
router.post('/add', (req, res) => {
    let newEntry = {
        id: req.body.id,
        Description: req.body.Description,
        Price: req.body.Price,
        Sold: req.body.Sold,
        Amount: req.body.Amount,
    }
    orders.push(newEntry);
    res.status(200).send( newEntry );
});

//Admin ADD

router.post("/:id", (req, res) =>{
  let lastItem = products[products.length - 1];
  let data = {
    id: lastItem.id + 1,
    Description: req.body.Description,
    Price: req.body.Price,
    Stock: req.body.Stock,
    Category: req.body.Category,
    Image: req.body.Image,
    Promos: req.body.Promos,
    Sold: req.body.Sold,
  };
  products.push(data);
  res.status(200).send( data );
});



 // Delete

 router.delete("/:id",(req, res)=>{
  const { id } = req.params;
  products = products.filter(item=>item.id != Number(id));

  res.status(200).send({status: "Record " + id + " has been deleted.", id: id});

});



  //Update


router.put("/:id", (req, res)=>{
  const { id } = req.params;

  let prod = products.find((item) => {
      return item.id === Number(id);
  });

  
  prod.Description = req.body.Description;
  prod.Price = req.body.Price;
  prod.Stock = req.body.Stock;
  prod.Category = req.body.Category;
  prod.Image = req.body.Image;
  prod.Promos = req.body.Promos;
  prod.Sold = req.body.Sold;

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

