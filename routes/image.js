var express = require("express");

var router = express.Router()


let products  = [
    {Id : 1 , Description : "Rattan Egg Basket" , Price : 349 , Stock  : 120 , Category : "NewArrivals" , Image :  "../public/images/home/newarrivals/EggBasket.png" , Promos : 0} , 
    {Id : 2 , Description : "Rattan Flat Back Hanging Basket" , Price : 249 , Stock  : 120 , Category : "NewArrivals" , Image : "url" , Promos : 0} , 
    {Id : 3 , Description : "Rattan Basket Flower Planter" , Price : 229 , Stock  : 120 , Category : "NewArrivals" , Image : "url" , Promos : 0} , 
    {Id : 4 , Description : "Rattan Storage Basket (Rounded)" , Price : 499 , Stock  : 120 , Category : "NewArrivals" , Image : "url" , Promos : 0} , 
    {Id : 5 , Description : "Rattan Storage Basket" , Price : 499 , Stock  : 120 , Category : "NewArrivals" , Image : "url" , Promos : 0} , 
    {Id : 6 , Description : "Rattan Flower Vase Planter" , Price : 229 , Stock  : 120 , Category : "NewArrivals" , Image : "url" , Promos : 0} 

    


];

router.get("/",(req, res ) => {
    res.send(products);
}
);




module.exports = router;