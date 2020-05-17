const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  router.delete("/api/delete", function(req, res) {
    burger.deleteAll(function(data) {
      let hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.post("/api/duplicates", function(req, res) {
    burger.checkForDuplicates(
      "burger_name = '" + req.body.burger_name+"'"
    , function(result) {
      if(result.length > 0){
        res.json({ duplicate: 1 });
      }else{
        res.json({ duplicate: 0 });
      }
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;