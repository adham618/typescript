"use strict";
class Invoice {
    // client: string
    // details: string
    // amount: number
    constructor(
    // c: string, d: string, a: number
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c
        // this.details = d
        // this.amount = a
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inVone = new Invoice("adam", "works on the adams website", 250);
let invoices = [];
invoices.push(inVone);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
