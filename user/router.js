const { Router } = require("express");
const User = require("./model");
const Advertisements = require('../advertisement/model')
// const auth = require('../server/auth/middleware')

const router = new Router();

router.get("/users", (_req, res, next) => {
  User.findAll()
      .then(users => {
        res.status(200).send(users);
      })
      .catch(next);
  });
  
  router.post("/users", (req, res, next) => {
    User.create(req.body) //sequelize will use this to populate row's fields
      .then(user => res.status(200).send(user))
      .catch(next);
  });

router.get("/users/:id", (req, res, next) => {
  // console.log("What is the received id?", req.params.id);
  User.findByPk(req.params.id)
  .then(user => {
    if (!user) {
      return res.status(404).send({
        message: "This user is not found"
      });
    } else {
      res.status(200).send(user);
    }
  })
  .catch(err => next(err));
});

router.put('/users/:id', (req, res, next) => {
  User.findByPk(req.params.id)
  .then(user => user.update(req.body))
  .then(user => res.send(user))
  .catch(next)
})

router.delete('/users/:id', (req, res, next) => 
User.destroy({ where: { id: req.params.id }})
    .then(number => res.send({ number }))
    .catch(next)
)

//using the userId here, so we get the ads that belong to userId 1 here. If I only use :id, we are using the id of the advertisement?
router.get('/users/:id/advertisements', (req, res, next) => {
  Advertisements.findAll(
    { where: {id: req.params.id }}
  )
    .then(ad => res.json(ad))
    .catch(next)
})
  
module.exports = router