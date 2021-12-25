const { Op } = require("sequelize");
const { Payment } = require("../models");

class Controller {
  static async PaymentList(req, res, next) {
    try {
      console.log(req);
      let response = await Payment.findAll({ order: [["createdAt", "ASC"]] });
      if (response) {
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
  static async addPayment(req, res, next) {
    try {
      if (req.body.transactionType == "income") {
        let lastBalance = await Payment.findAll({
          order: [["createdAt", "DESC"]],
        });
        let balance = lastBalance[0].balance + +req.body.transactionAmount;
        let response = await Payment.create({
          name: req.body.transactionName,
          amount: +req.body.transactionAmount,
          type: req.body.transactionType,
          balance: balance,
        });
        res.status(200).json(response);
      } else if (req.body.transactionType == "expense") {
        let lastBalance = await Payment.findAll({
          order: [["createdAt", "DESC"]],
        });
        let balance = lastBalance[0].balance - +req.body.transactionAmount;
        let response = await Payment.create({
          name: req.body.transactionName,
          amount: +req.body.transactionAmount,
          type: req.body.transactionType,
          balance: balance,
        });
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
