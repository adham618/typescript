import { Invoice } from "./classes/invoice.js"
import {Payment} from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice("yoshi", "web work", 250)
// docTwo = new Payment("mario", "plamming work", 200)

// let docs: HasFormatter[] = []

// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)

  // interfaces
// interface IsPerson{
//   name: string
//   age: number
//   speak(a: string): void
//   spend(a: number): number
// }

// const me: IsPerson = {
//   name: 'adham',
//   age: 23,
//   speak(text: string): void{
//     console.log(text)
//   },
//   spend(amount: number): number{
//     console.log('i spent', amount)
//     return amount
//   }
// }

// const greetPerson = (person: IsPerson): void => {
//   console.log('hello ', person.name);
// }

// greetPerson(me);


// const inVone = new Invoice("adam", "works on the adams website", 250)


// let invoices: Invoice[] = []
// invoices.push(inVone)

// invoices.forEach(inv => {
//   console.log(inv.client,inv.amount,inv.format())
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement
// inputs
const type=document.querySelector('#type') as HTMLSelectElement
const tofrom=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter
  if (type.value === 'invoice') {
    doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
  } else {
    doc= new Payment(tofrom.value,details.value,amount.valueAsNumber)
  }

  console.log(doc)
})