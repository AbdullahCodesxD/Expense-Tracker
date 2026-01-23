import ExpenseView from "./expense.view.js";

export default class ExpenseFormView extends ExpenseView {
  constructor() {
    super();
    this.form = this._parent.querySelector("form");
    // Sub fields
    this.amount = this.form.querySelector(".amount");
    this.title = this.form.querySelector(".title");
    this.category = this.form.querySelector(".category");
    this.date = this.form.querySelector(".date");

    this.handleButton = this.form.querySelector("button");
  }

  clearForm() {
    this.amount.value = "";
    this.title.value = "";
    this.category.value = "";
    this.date.value = "";
  }
  // Add task
  bindHandleAddExpense(handler) {
    if (!handler) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const amount = this?.amount?.value;
      const title = this.title.value;
      const category = this?.category?.value?.trim()?.toLowerCase();
      const date = this.date.value;

      if (!amount || !title.trim() || !category.trim() || !date || amount <= 0)
        return;

      handler(amount, title, category, date);
      this.clearForm();
    });
  }
}
