import { Account, CategoryEnum, Entry } from "./Account.js"

let account: Account;
const InitialAccount = getAccountFromStorage();

if(InitialAccount){
    account = new Account(InitialAccount as Account);
    updateBalanceAmount(account)
}else{
    account = createInitialAccount();
    updateBalanceAmount(account)
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

function setAccountToStorage(account: Account): void{
    localStorage.setItem('account', JSON.stringify(account));
}

function updateBalanceAmount(account: Account){
    const balanceAmountHtmElement = document.querySelector('#balanceAmount') as HTMLElement;
    const balanceAccount = account.getBalance();
    balanceAmountHtmElement.textContent = `${balanceAccount}$`;
}

const entryTemplate = document.querySelector('#entryTemplate') as HTMLTemplateElement;
const fragment = document.createDocumentFragment();
const recordsContainer = document.querySelector('#recordsConstainer') as HTMLElement;

const entries = account.getEntries();
entries.forEach(entry =>{
    printEntry(entry);
});

function printEntry(entry: Entry) {
    const {concept, amount, category, id} = entry;

    const entryConceptTemplate = entryTemplate.content.querySelector('.entryConcept');
    const entryAmountTemplate = entryTemplate.content.querySelector('.entryAmount');
    const entryContaninerTemplate = entryTemplate.content.querySelector('div');
    const iconSvg = entryTemplate.content.querySelector('svg');
    const svgPath = entryTemplate.content.querySelector('path');

    if(!entryConceptTemplate || !entryAmountTemplate|| !entryContaninerTemplate || !iconSvg || !svgPath){
        return;
    }

    entryConceptTemplate.textContent = concept;
    entryConceptTemplate.setAttribute('data-id', String(id))

    if(category === CategoryEnum.expense){
        entryAmountTemplate.classList.add('text-indigo-500');
        entryAmountTemplate.classList.remove('text-blue-500');
        entryAmountTemplate.textContent = `-${amount} $`
    }else{
        entryAmountTemplate.classList.add('text-blue-500');
        entryAmountTemplate.classList.remove('text-indigo-500');
        entryAmountTemplate.textContent = `${amount} $`
    }

    const clone = entryTemplate.content.cloneNode(true);
    fragment.appendChild(clone);
    recordsContainer.appendChild(fragment);

}
