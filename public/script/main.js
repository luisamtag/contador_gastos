import { Account, CategoryEnum, Entry } from "./Account.js";
console.log('Luisa code <3 <3');
var account = new Account();
console.log(account);
var expenseEjemplo = new Entry('Ejemplo de gastos', 425000, CategoryEnum.expense);
var incomeEjemplo = new Entry('Ejemplo de ingresos', 632000, CategoryEnum.income);
account.addEntry(expenseEjemplo);
account.addEntry(incomeEjemplo);
console.log(account);
