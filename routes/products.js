var express = require("express");

var router = express.Router()


let products  = [
    {id : 1 , Description : "Rattan Egg Basket" , Price : 349 , Stock  : 120 , Category : "NewArrivals" , Image :  'http://localhost:8000/images/home/newarrivals/EggBasket.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/eggbasket' } , 
    {id : 2 , Description : "Rattan Flat Back Hanging Basket" , Price : 249 , Stock  : 85 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/Flat-backWicker.png' , Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/flatbackhangingbasket'} , 
    {id : 3 , Description : "Rattan Basket Flower Planter" , Price : 229 , Stock  : 0 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/Planter.png' , Promos : 0, Sold : 150, Amount: 1, URL: 'http://localhost:3000/flowerplanter'} , 
    {id : 4 , Description : "Rattan Storage Basket (Rounded)" , Price : 499 , Stock  : 85 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/RoundedBasket.png' , Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/roundedbasket'} , 
    {id : 5 , Description : "Rattan Storage Basket" , Price : 499 , Stock  : 75 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/StorageBasket.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/regularbasket'} , 
    {id : 6 , Description : "Rattan Flower Vase Planter" , Price : 229 , Stock  : 0 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/VasePlanter.png' , Promos : 0, Sold : 75, Amount: 1, URL: 'http://localhost:3000/flowervase'}, 
    {id : 7 , Description : "Rattan Inverted UFO Pendant Light Chandelier" , Price : 48 , Stock  : 35 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/iufo.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/invertedufo'} , 
    {id : 8 , Description : "Rattan UFO Pendant Light Chandelier" , Price : 549 , Stock  : 40 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/ufo.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/ufopendant'} , 
    {id : 9 , Description : "Rattan Hat Pendant Light Chandelier" , Price : 599 , Stock  : 35 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/curve.png' , Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/hatpendant'} , 
    {id : 10 , Description : "Rattan Mushroom Pendant Light Chandelier" , Price : 549 , Stock  : 75 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/mushroom.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/mushroom'} , 
    {id : 11 , Description : "Rattan Wide Hat Pendant Light Chandelier" , Price : 549 , Stock  : 48 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/wide.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/widehat'} , 
    {id : 12 , Description : "Rattan Big Pendant Light Chandelier" , Price : 249 , Stock  : 15 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/bigp.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/bigpendant'} , 
    {id : 13 , Description : "Rattan Small Pendant Light Chandelier" , Price : 549 , Stock  : 15 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/smp.png' , Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/smallpendant'} , 
    {id : 14 , Description : "Austria - Bamboo Rattan Fashion Bag" , Price : 1999 , Stock  : 85 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/Austria.png', Promos : 0, Sold : 0 , Amount: 1, URL: 'http://localhost:3000/austriabag'} , 
    {id : 15 , Description : "Ivory - Bamboo Rattan Fashion Bag" , Price : 2349 , Stock  : 150 , Category : "BestSeller3" , Image : 'http://localhost:8000/images/home/best-seller/Ivory.png' , Promos : 0, Sold : 0 , Amount: 1, URL: 'http://localhost:3000/ivorybag'} , 
    {id : 16 , Description : "Pearl - Bamboo Rattan Fashion Bag" , Price : 2249 , Stock  : 100 , Category : "BestSeller3" , Image :'http://localhost:8000/images/home/best-seller/Pearl.png' , Promos : 0, Sold : 0 , Amount: 1, URL: 'http://localhost:3000/pearlbag'} , 
    {id : 17 , Description : "Rattan Duyan Iron-Sitting Relaxing Chair" , Price : 1109 , Stock  : 13 , Category : "BestSeller3" , Image : 'http://localhost:8000/images/home/best-seller/Rattan Duyan.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/rattanduyan'} , 
    {id : 18 , Description : "Natural Bamboo Drinking Cup Mug" , Price : 329 , Stock  : 100 , Category : "BestSeller3" , Image : 'http://localhost:8000/images/home/best-seller/Bamboo Cup.png', Promos : 0, Sold : 0, Amount: 1, URL: 'http://localhost:3000/bamboomug'},
    {id : 19 , Description : "Rattan Beach Round Shoulder Bag" , Price : 789 , Stock  : 0 , Category : "Trending" , Image : 'http://localhost:8000/upload/beach.jpg', Promos : 0, Sold : 25, Amount: 1} ,
    {id : 20 , Description : "Mahogany Hand Carved Philippine Eagle" , Price : 780 , Stock  : 0 , Category : "Trending" , Image : 'http://localhost:8000/upload/mahagony.jpg', Promos : 0, Sold : 10, Amount: 1} 
];

// Create a get function with the given JSON Array.

router.get("/",(req, res ) => {
    res.send(products);
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
        Stock: req.body.Stock,
        Category: req.body.Category,
        Image: req.body.Image,
        Promos: req.body.Promos,
        Sold: req.body.Sold,
    }
    products.push(newEntry);
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


router.get("/stock/:keyword", (req, res) => {
  const { keyword } = req.params;
  const result = products.filter(item=>item.Stock === 0);

  if (result.length > 0) {
   res.status(200).send(result);
  }else{
   res.status(200).send(keyword + " not found!");
  }
});

router.get("/one/:keyword", (req, res) => {
  const { keyword } = req.params;
  const result = products.filter(item=>item.Stock > 99 );

  if (result.length > 0) {
   res.status(200).send(result);
  }else{
   res.status(200).send(keyword + " not found!");
  }
});

router.get("/two/:keyword", (req, res) => {
  const { keyword } = req.params;
  const result = products.filter(item=>item.Stock <= 100 );

  if (result.length > 0) {
   res.status(200).send(result);
  }else{
   res.status(200).send(keyword + " not found!");
  }
});


module.exports = router;

