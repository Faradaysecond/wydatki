const income = document.querySelector('.income')
const dateInc = document.querySelector('.date-inc')
const fromInc = document.querySelector('.from-inc')

const expense = document.querySelector('.expense')
const dateExp = document.querySelector('.date-exp')
const fromExp = document.querySelector('.from-exp')

const saveBtnInc = document.querySelector('.save-income')
const saveBtnExp = document.querySelector('.save-expense')

const incomeArea = document.querySelector('.income-area')
const expenseArea = document.querySelector('.expense-area')
const incomePart = document.querySelector('.income-part')
const expensePart = document.querySelector('.expense-part')
const delateBtn = document.querySelectorAll('.delate-btn')
const total = document.querySelector('.total')
const msgError = document.querySelector('.msg-error')
const incomeSwap = document.querySelector('.income-swap-btn')
const expenseSwap = document.querySelector('.expense-swap-btn')


let bilans = 0

const addIncome = ( ) => {

    let inputValue = income.value

    if (/^\d+$/.test(inputValue)){



        const newItem = document.createElement('div')
        newItem.innerHTML = 
            `<p>${fromInc.value}</p>
            <p class="part-of-income ">${income.value} zł</p>
            <p>${dateInc.value}</p>
            <button class="fas fa-x delate-btn"></button>`;
        newItem.className = 'income-item'
        incomeArea.appendChild(newItem)
        
        const delateBtn = newItem.querySelector('.delate-btn');
        delateBtn.addEventListener('click', () => {
            let plas = Number(income.value)
            bilans = bilans - plas
            total.textContent = bilans
            newItem.remove();
        });
    } else {   
        msgError.classList.remove('none')
        setTimeout(()=>{
            msgError.classList.add('none')
        }, 2000)
    } 
}
const addExpense = ( ) => {

    let inputValue = expense.value    
    if(/^\d+$/.test(inputValue)){
        const newItem = document.createElement('div')
        newItem.innerHTML = 
            `<p>${fromExp.value}</p>
            <p>${expense.value} zł</p>
            <p>${dateExp.value}</p>
            <button class="fas fa-x delate-btn"></button>`;
        newItem.className = 'expense-item'
        expenseArea.appendChild(newItem)
        
        const delateBtn = newItem.querySelector('.delate-btn');
        delateBtn.addEventListener('click', () => {
            let mainus = Number(expense.value)
            bilans = bilans + mainus
            total.textContent = bilans
            newItem.remove();
        });
    } else {
        msgError.classList.remove('none')
        setTimeout(()=>{
            msgError.classList.add('none')
        }, 2000)
    }
}
const plasToBilans = () => {
    let plas = Number(income.value)
    bilans = bilans + plas
    total.textContent = bilans
}
const mainusToBilans = () => {
    let mainus = Number(expense.value)
    bilans = bilans - mainus
    total.textContent = bilans
}
const saveBtnIncHandle = () => {
    addIncome()
    plasToBilans()
}
const saveBtnExphandle = () => {
    addExpense()
    mainusToBilans()
}

incomeSwap.addEventListener('click', ()=>{
    incomePart.classList.remove('none')
    expensePart.classList.add('none')
})
expenseSwap.addEventListener('click', ()=>{
    incomePart.classList.add('none')
    expensePart.classList.remove('none')
})
saveBtnInc.addEventListener('click', saveBtnIncHandle)
saveBtnExp.addEventListener('click', saveBtnExphandle)

