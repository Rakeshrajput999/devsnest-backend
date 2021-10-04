var express = require("express");
var router = express.Router();
const products = require("../models/Product");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(query.after);
    let sql = {};
    if (after) {
      sql = {
        where: {
          id: {
            [Op.gt]: after,
          },
        },
      };
    } else {
      sql = {
        offset: count + (page - 1),
      };
    }
  } catch (error) {
    res.status(400).send("occur error");
  }
});
