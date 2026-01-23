import ExpenseModel from "../models/expense.model.js";
import ExpenseView from "../views/expense.view.js";
import ExpenseFormView from "../views/expense.form.view.js";
export default class ExpenseController {
  constructor() {
    this.model = new ExpenseModel();
    this.view = new ExpenseView();
    this.formView = new ExpenseFormView();
    this.formView.bindHandleAddExpense(this.handleAddExpense.bind(this));
  }

  handleAddExpense(amount, title, category, date) {
    this.model.addExpense({
      amount,
      title,
      category,
      date,
    });
    console.log("gg");
  }
}
