class Invoice{
  // client: string
  // details: string
  // amount: number

  constructor(
    // c: string, d: string, a: number
    readonly client: string,
    private details: string,
    public amount: number,
    
  ) {
    // this.client = c
    // this.details = d
    // this.amount = a
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const inVone = new Invoice("adam", "works on the adams website", 250)


let invoices: Invoice[] = []
invoices.push(inVone)

invoices.forEach(inv => {
  console.log(inv.client, inv.details ,inv.amount,inv.format())
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