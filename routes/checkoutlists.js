var express = require("express");

var router = express.Router()

let checkoutlists = [
    {id : 1 , Price : 0 , Shipping : 0 , Discount : 0 , Total : 0}
]
// Create a get function with the given JSON Array.

router.get("/",(req, res ) => {
    res.send(checkoutlists);
}
);

//2. Create a get function using id

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let checkout= checkoutlists.find((item) => {
      return item.id === Number(id);
  });
  res.status(200).send(checkout ? checkout : {status: "Record not found!"});
});


// Add new entry
router.post('/add', (req, res) => {
    let newEntry = {
        id: req.body.id,
        Price: req.body.Price,
        Shipping: req.body.Shipping,
        Discount: req.body.Discount,
        Total: req.body.Total,
    }
    checkoutlists.push(newEntry);
    res.status(200).send( newEntry );
});

router.post("/:id", (req, res) =>{
  let lastItem = checkoutlists[checkoutlists.length - 1];
  let data = {
    id: lastItem.id + 1,
    Price: req.body.Price,
    Shipping: req.body.Shipping,
    Discount: req.body.Discount,
    Total: req.body.Total,
  };
  checkoutlists.push(data);
  res.status(200).send( data );
});

 router.delete("/:id",(req, res)=>{
  const { id } = req.params;
  products = products.filter(item=>item.id != Number(id));

  res.status(200).send({status: "Record " + id + " has been deleted.", id: id});

});

router.put("/:id", (req, res)=>{
  const { id } = req.params;

  let prod = checkoutlists.find((item) => {
      return item.id === Number(id);
  });

  prod.id = req.body.id;
  prod.Price = req.body.Description;
  prod.Shipping = req.body.Price;
  prod.Discount = req.body.Category;
  prod.Total = req.body.Image;

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

