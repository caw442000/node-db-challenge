const router = require("express").Router();

const Tasks = require("./tasks-model");

router.get("/", (req, res) => {
  Tasks.find()
    .then(task => {
      res.status(200).json(task)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});
router.get("/:id", (req, res) => {

  const { id } = req.params

  Tasks.findById(id)
    .then(task => {
      res.status(200).json(task)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});

router.post("/", (req, res) => {
  Tasks.add(req.body)
    .then(task => {
      res.status(200).json(task)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});


module.exports = router;