const { Router } = require("express");
const Advertisement = require("./model");
// const auth = require('../server/auth/middleware')

const router = new Router();

router.get("/advertisements", (req, res, next) => {
  Advertisement.findAll()
      .then(advertisements => {
        res.status(200).send(advertisements);
      })
      .catch(next);
  });
  
  router.post("/advertisements", (req, res, next) => {
    Advertisement.create(req.body) //sequelize will use this to populate row's fields
      .then(advertisement => res.status(200).send(advertisement))
      .catch(next);
  });

router.get("/advertisements/:id", (req, res, next) => {
  // console.log("What is the received id?", req.params.id);
  Advertisement.findByPk(req.params.id)
  .then(advertisement => {
    if (!advertisement) {
      return res.status(404).send({
        message: "This advertisement is not found"
      });
    } else {
      res.status(200).send(advertisement);
    }
  })
  .catch(err => next(err));
});

router.put('/advertisements/:id', (req, res, next) => {
  Advertisement.findByPk(req.params.id)
  .then(advertisement => advertisement.update(req.body))
  .then(advertisement => res.send(advertisement))
  .catch(next)
})

router.delete('/advertisements/:id', (req, res, next) => 
Advertisement.destroy({ where: { id: req.params.id }})
    .then(number => res.send({ number }))
    .catch(next)
)
  
module.exports = router