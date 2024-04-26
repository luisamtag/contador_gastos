import { Account, CategoryEnum, Entry } from "./Account.js"

console.log('Luisa code <3 <3')

const account = new Account();

console.log(account);

const expenseEjemplo = new Entry ('Ejemplo de gastos', 425000, CategoryEnum.expense);
const incomeEjemplo = new Entry ('Ejemplo de ingresos', 632000, CategoryEnum.income);
account.addEntry(expenseEjemplo);
account.addEntry(incomeEjemplo);

console.log(account);