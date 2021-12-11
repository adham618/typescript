import {Invoice} from "./classes/invoice.js"

const inVone = new Invoice("adam", "works on the adams website", 250)


let invoices: Invoice[] = []
invoices.push(inVone)

invoices.forEach(inv => {
  console.log(inv.client,inv.amount,inv.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement
// inputs
const type=document.querySelector('#type') as HTMLSelectElement
const tofrom=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})