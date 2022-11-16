var express = require("express");

var router = express.Router()

let customers  = [
    { id: 1, firstname: "Juan", lastname:"dela Cruz", email: "juandelacruz@gmail.com", contact: 09123456789, address: "Brgy. Sta. Cruz"},
    { id: 1, firstname: "Maria", lastname:"Santon", email: "mariasantos@gmail.com", contact: 09987654321, address: "Brgy. Sta. Maria"}
]


router.get("/",(req, res ) => {
    res.send(customers);
}
);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let customer = customers.find((item) => {
      return item.id === Number(id);
  });
  res.status(200).send(customer ? customer : {status: "Record not found!"});
});

router.post('/add', (req, res) => {
    let newEntry = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact: req.body.email,
        address: req.body.address,
    }
    customers.push(newEntry);
    res.status(200).send( newEntry );
});

 router.delete("/:id",(req, res)=>{
  const { id } = req.params;
  customers = customers.filter(item=>item.id != Number(id));

  res.status(200).send({status: "Record " + id + " has been deleted.", id: id});

});

router.put("/:id", (req, res)=>{
  const { id } = req.params;

  let customers = customers.find((item) => {
      return item.id === Number(id);
  });

  
  customers.id = req.body.id;
  customers.firstname = req.body.firstname;
  customers.lastname = req.body.lastname;
  customers.contact = req.body.contact;
  customers.email = req.body.email;
  customers.address = req.body.address;

  res.status(200).send( customers );

});

router.get("/count/all", (req, res) => {
  res.status(200).send({total:customers.length});
  
});

module.exports = router;