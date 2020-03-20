const router = require("express").Router();

const Projects = require("./projects-model.js");

router.get("/", (req, res) => {
  Projects.find()
    .then(project => {
      res.status(200).json(project)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});
router.get("/:id", (req, res) => {

  const { id } = req.params

  Projects.findById(id)
    .then(project => {
      res.status(200).json(project)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});
router.get("/:id/tasks", (req, res) => {

  const { id } = req.params
  Projects.findBy(id)
    .then(task => {
      res.status(200).json(task)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});


router.post("/", (req, res) => {
  Projects.add(req.body)
    .then(project => {
      res.status(200).json(project)

    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` });
    });
});


module.exports = router;