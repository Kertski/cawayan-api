var express = require("express");

var router = express.Router()


let products  = [
    {Id : 1 , Description : "Rattan Egg Basket" , Price : 349 , Stock  : 120 , Category : "NewArrivals" , Image :  'http://localhost:8000/images/home/newarrivals/EggBasket.png', Promos : 0} , 
    {Id : 2 , Description : "Rattan Flat Back Hanging Basket" , Price : 249 , Stock  : 120 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/Flat-backWicker.png' , Promos : 0} , 
    {Id : 3 , Description : "Rattan Basket Flower Planter" , Price : 229 , Stock  : 120 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/Planter.png' , Promos : 0} , 
    {Id : 4 , Description : "Rattan Storage Basket (Rounded)" , Price : 499 , Stock  : 120 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/RoundedBasket.png' , Promos : 0} , 
    {Id : 5 , Description : "Rattan Storage Basket" , Price : 499 , Stock  : 120 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/StorageBasket.png', Promos : 0} , 
    {Id : 6 , Description : "Rattan Flower Vase Planter" , Price : 229 , Stock  : 120 , Category : "NewArrivals" , Image : 'http://localhost:8000/images/home/newarrivals/VasePlanter.png' , Promos : 0}, 
    {Id : 7 , Description : "Rattan Inverted UFO Pendant Light Chandelier" , Price : 499 , Stock  : 100 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/iufo.png', Promos : 0} , 
    {Id : 8 , Description : "Rattan UFO Pendant Light Chandelier" , Price : 549 , Stock  : 100 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/ufo.png', Promos : 0} , 
    {Id : 9 , Description : "Rattan Hat Pendant Light Chandelier" , Price : 599 , Stock  : 100 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/curve.png' , Promos : 0} , 
    {Id : 10 , Description : "Rattan Mushroom Pendant Light Chandelier" , Price : 549 , Stock  : 100 , Category : "BestSeller1" , Image : 'http://localhost:8000/images/home/best-seller/mushroom.png', Promos : 0} , 
    {Id : 11 , Description : "Rattan Wide Hat Pendant Light Chandelier" , Price : 549 , Stock  : 100 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/wide.png', Promos : 0} , 
    {Id : 12 , Description : "Rattan Big Pendant Light Chandelier" , Price : 249 , Stock  : 100 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/bigp.png', Promos : 0} , 
    {Id : 13 , Description : "Rattan Small Pendant Light Chandelier" , Price : 549 , Stock  : 100 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/smp.png' , Promos : 0} , 
    {Id : 14 , Description : "Austria - Bamboo Rattan Fashion Bag" , Price : 1999 , Stock  : 100 , Category : "BestSeller2" , Image : 'http://localhost:8000/images/home/best-seller/Austria.png', Promos : 0} , 
    {Id : 15 , Description : "Ivory - Bamboo Rattan Fashion Bag" , Price : 2349 , Stock  : 100 , Category : "BestSeller3" , Image : 'http://localhost:8000/images/home/best-seller/Ivory.png' , Promos : 0} , 
    {Id : 16 , Description : "Pearl - Bamboo Rattan Fashion Bag" , Price : 2249 , Stock  : 100 , Category : "BestSeller3" , Image :'http://localhost:8000/images/home/best-seller/Pearl.png' , Promos : 0} , 
    {Id : 17 , Description : "Rattan Duyan Iron-Sitting Relaxing Chair" , Price : 1109 , Stock  : 100 , Category : "BestSeller3" , Image : 'http://localhost:8000/images/home/best-seller/Rattan Duyan.png', Promos : 0} , 
    {Id : 18 , Description : "Natural Bamboo Drinking Cup Mug" , Price : 329 , Stock  : 100 , Category : "BestSeller3" , Image : 'http://localhost:8000/images/home/best-seller/Bamboo Cup.png', Promos : 0} , 

    


];

router.get("/",(req, res ) => {
    res.send(products);
}
);

router.get("/description/:keyword", (req, res) => {
    const { keyword } = req.params;
    const result = description.filter(item=>item.description.toLowerCase().includes(keyword));
    res.status(200).send( result.length > 0 ? result :"No similar products found!");
});


module.exports = router;