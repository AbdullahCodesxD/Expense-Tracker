const alphabetsAndSigns = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "#",
  "!",
  "$",
  ".",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

export default class ExpenseModel {
  constructor() {
    this.categories = [];
    this.expenses =
      JSON.parse(localStorage.getItem("expenses"))?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      ) ?? [];
    this.totalExpense =
      this?.expenses?.reduce((acc, val) => acc + Number(val.amount), 0) ?? 0;
  }

  generateId() {
    const alphaSigns = Array.from({ length: 20 }).map(() => {
      const index = Math.floor(Math.random() * alphabetsAndSigns.length);
      const shouldBeCapital = Math.floor(Math.random() * 2) === 1;

      return shouldBeCapital
        ? String(alphabetsAndSigns[index]).toUpperCase()
        : String(alphabetsAndSigns[index]);
    });

    return alphaSigns.join("");
  }
  addExpense(expense) {
    if (!expense) return;
    this.expenses = this.expenses
      .unshift({
        ...expense,
        _id: this.generateId(),
        createdAt: new Date().toISOString(),
      })
      ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    localStorage.setItem("expenses", JSON.stringify(this.expenses));

    this.totalExpense = this.expenses.reduce(
      (acc, curr) => acc + Number(curr.amount || 0),
      0,
    );
  }

  removeExpense(expenseId) {
    if (!expenseId) return;
    const expenseExists =
      this.expenses.findIndex(
        (expense) => expense._id === expenseId.trim().toLowerCase(),
      ) !== -1;

    if (!expenseExists) return;

    this.expenses = this.expenses.filter(
      (expense) => expense._id === expenseId.trim().toLowerCase(),
    );
  }

  getExpenses() {
    return this.expenses;
  }
}
