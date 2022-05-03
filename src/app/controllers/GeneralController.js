const ApplicationError = require("../errors/ApplicationError.js");
const GeneralModel = require("../models/GeneralModel.js");
const Util = require("../../shared/Util.js");

module.exports = {
  getAllDataFromTable(req, res, next) {
    const { table } = req.params;

    GeneralModel.getAllDataFromTable(
      table,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Registros não encontrados.", 404));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  getRowFromTableByID(req, res, next) {
    const { table, id } = req.params;

    GeneralModel.getRowFromTableByID(
      table,
      id,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Registro não encontrado.", 404));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  getRowFromTableByFieldValue(req, res, next) {
    const { table, field, value } = req.params;

    GeneralModel.getRowFromTableByFieldValue(
      table,
      field,
      value,
      (data) => {
        if (!data.length) {
          return next(
            new ApplicationError("Registro(s) não encontrado(s).", 404)
          );
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  createRowInTable(req, res, next) {
    const { table } = req.params;
    const newRow = Util.filterReqBody(req, table);

    if (!newRow) {
      return next(new ApplicationError("Tabela inexistente.", 400));
    }

    GeneralModel.createRowInTable(
      newRow,
      table,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Falha ao criar registro.", 400));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  updateRowInTableByID(req, res, next) {
    const { id, table } = req.params;
    const updateRow = Util.filterReqBody(req, table);

    if (!updateRow) {
      return next(new ApplicationError("Tabela inexistente.", 400));
    }

    GeneralModel.updateRowInTableByID(
      updateRow,
      id,
      table,
      (data) => {
        if (!data.length) {
          return next(new ApplicationError("Registro não encontrado.", 404));
        }

        return res.status(200).json(data);
      },
      next
    );
  },

  deleteRowFromTableByID(req, res, next) {
    const { table, id } = req.params;

    GeneralModel.deleteRowFromTableByID(
      table,
      id,
      (success) => {
        if (!success) {
          return next(new ApplicationError("Registro não encontrado", 404));
        }

        return res
          .status(200)
          .json({ success, message: "Registro excluído com sucesso." });
      },
      next
    );
  },
};
