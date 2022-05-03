const express = require("express");
const routes = express.Router();

const GeneralController = require("./app/controllers/GeneralController.js");

routes.get("/get/:table", GeneralController.getAllDataFromTable);
routes.get("/get/:table/:id", GeneralController.getRowFromTableByID);
routes.get(
  "/get/:table/:field/:value",
  GeneralController.getRowFromTableByFieldValue
);
routes.post("/create/:table", GeneralController.createRowInTable);
routes.put("/update/:table/:id", GeneralController.updateRowInTableByID);
routes.delete("/delete/:table/:id", GeneralController.deleteRowFromTableByID);

module.exports = routes;
