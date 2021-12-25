const { Op } = require("sequelize");
const { Payment } = require("../models");

class Controller {
  static async PaymentList(req, res, next) {
    // try {
    //   console.log(req);
    //   let response = await Payment.findAll({ order: [["createdAt", "ASC"]] });
    //   if (response) {
    //     res.status(200).json(response);
    //   }
    // } catch (err) {
    //   next(err);
    // }
  }
  static async addPayment(req, res, next) {
    try {
      if (req.body.type == "income") {
        let lastBalance = await Payment.findAll({
          order: [["createdAt", "DESC"]],
        });
        let balance = lastBalance[0].balance + +req.body.amount;
        let response = await Payment.create({
          name: req.body.name,
          amount: req.body.amount,
          type: req.body.type,
          balance: balance,
        });
        res.status(200).json(response);
      } else if (req.body.type == "expense") {
        let lastBalance = await Payment.findAll({
          order: [["createdAt", "DESC"]],
        });
        let balance = lastBalance[0].balance - +req.body.amount;
        let response = await Payment.create({
          name: req.body.name,
          amount: req.body.amount,
          type: req.body.type,
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
