var recipes = require("../recipes.json");
var router = require("express").Router();

router.get("/step/:id", (req, res, next) => {
  const recipe = recipes.find((x) => x.id == req.params.id);
  if (isNaN(req.params.id)) {
    return res.status(200).send("NOT_FOUND");
  }

  if (recipe) {
    const elapsedTime = req.query.elapsedTime || 0;
    const i = recipe.timers.findIndex((x) => x >= elapsedTime);

    console.log(i);
    return res.status(200).json({ index: i });
  } else {
    return res.status(400).send("NOT_FOUND");
  }
});

module.exports = router;
