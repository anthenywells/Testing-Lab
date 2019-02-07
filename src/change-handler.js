/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }
    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      if (type === "quarter") {
        this.cashTendered += 25;
      } else if (type === "dime") {
        this.cashTendered += 10;
      } else if (type === "nickel") {
        this.cashTendered += 5;
      } else if (type === "penny"){
        this.cashTendered += 1;
      }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered >= this.amountDue) {
        return true;
      } else if (this.cashTendered < this.amountDue){
        return false;
      }
    }

    giveChange() {
      let quarters = 0;
      let dimes = 0;
      let nickels = 0;
      let pennies = 0;
      if (this.cashTendered > this.amountDue) {
          let change = this.cashTendered - this.amountDue;
          console.log("1")
          while (change >= 25){
            quarters ++;
            change -= 25;
          console.log("2")

          } while (change >= 10) {  
            dimes ++;
            change -= 10;
          console.log("3")

          } while (change >= 5) {
            nickels ++;
            change -= 5;
          console.log("4")

          } while (change > 0) {
            pennies ++;
            change -= 1;
          }
        }
        
        return {
            quarters: quarters,
            dimes: dimes,
            nickels: nickels,
            pennies: pennies
        }
    }

}


const vending = new ChangeHandler(10);


// let coins = {
//   quarters: 0,
//   dimes: 0,
//   nickels: 0,
//   pennies: 0
// }


// let change = this.amountDue - this.cashTendered;
// this.quarters = change / 0.25 //rounded correctly
// change = change % 0.25

// this.dimes = change / 0.10
// change = change % 0.10

// this.nickels = change / 0.05
// change = change % 0.05

// this.pennies = change / 0.01

// return coins
// }