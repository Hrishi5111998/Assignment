const customerAccount = {
balance : 0,
diposit: function(amount){
    this.balance += amount
    console.log(`Deposited ${amount}. New balance is ${this.balance}.`)
},
withdrown: function(amount){
    if(this.balance >= amount){
        this.balance -= amount
        console.log(`Withdrown ${amount}. New balance is ${this.balance}`)
    }else{
        console.log(`Insufficient funds. Current balance is ${this.balance}`)
    }
}

}
   customerAccount.diposit(500)
   customerAccount.withdrown(300)
   customerAccount.withdrown(300)
