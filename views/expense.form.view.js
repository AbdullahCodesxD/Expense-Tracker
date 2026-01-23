export default class ExpenseFormView {
  constructor(parentElement) {
    this._parent = document
      .querySelector("#expense-parent")
      .querySelector("form");
    // Sub fields
    this.amount = this._parent.querySelector(".amount");
    this.title = this._parent.querySelector(".title");
    this.category = this._parent.querySelector(".category");
    this.date = this._parent.querySelector(".date");

    this.handleButton = this._parent.querySelector("button");
  }

  // Add task
  bindHandleAddExpense(handler) {
    if (!handler) return;
    this.handleButton.addEventListener("click", (e) => {
      e.preventDefault();
      const amount = this?.amount?.value;
      const title = this.title.value;
      const category = this?.category?.value?.trim()?.toLowerCase();
      const date = this.date.value;

      if (!amount || !title.trim() || !category.trim() || !date) return;

      handler(amount, title, category, date);
    });
  }
}
