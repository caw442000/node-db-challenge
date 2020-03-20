const router = require("express").Router();

const Resources = require("./resources-model.js");

router.get("/", (req, res) => {
  Resources.find()
    .then(resource => {
      res.status(200).json(resource)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});
router.get("/:id", (req, res) => {

  const { id } = req.params

  Resources.findById(id)
    .then(resource => {
      res.status(200).json(resource)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});

router.post("/", (req, res) => {
  Resources.add(req.body)
    .then(resource => {
      res.status(200).json(resource)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});


module.exports = router;