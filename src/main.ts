import { Account, CategoryEnum, Entry } from "./Account.js"

let account: Account;
const InitialAccount = getAccountFromStorage();

if(InitialAccount){
    account = new Account(InitialAccount as Account);
}else{
    account = createInitialAccount();
}

function createInitialAccount(): Account{
    const setupAccount = new Account();
    const expenseEjemplo = new Entry ('Ejemplo de gastos',
    425000,
    CategoryEnum.expense);
    const incomeEjemplo = new Entry ('Ejemplo de ingresos',
    632000,
    CategoryEnum.income);

    setupAccount.addEntry(expenseEjemplo);
    setupAccount.addEntry(incomeEjemplo);

return setupAccount;
}
function getAccountFromStorage(): Account | boolean{
    const accountFromStorage = localStorage.getItem('account');
    return accountFromStorage ? JSON.parse(accountFromStorage) : false;
}