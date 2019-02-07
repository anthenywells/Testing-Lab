// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {
  

    it("amountDue is set based on an argument", function() {
      //Arrange
      const vending = new ChangeHandler(100);
      //Act
      //Assert
        expect(vending.amountDue).toBe(100);
    });

    it("cashTendered is set to zero", function() {
      //Arrange
      const vending = new ChangeHandler(100);
      //Act
      //Assert
        expect(vending.cashTendered).toBe(0);
    });

    it("Inserting a quarter adds 25", function() {
      //Arrange
      const vending = new ChangeHandler();
      //Act
      vending.insertCoin("quarter")
      //Assert
        expect(vending.cashTendered).toBe(25);
    });
    it("Inserting a dime adds 10", function() {
      //Arrange
      const vending = new ChangeHandler();
      //Act
      vending.insertCoin("dime")
      //Assert
        expect(vending.cashTendered).toBe(10);
    });
    it("Inserting a nickel adds 5", function() {
      //Arrange
      const vending = new ChangeHandler();
      //Act
      vending.insertCoin("nickel")
      //Assert
        expect(vending.cashTendered).toBe(5);
    });
    it("Inserting a penny adds 1", function() {
      //Arrange
      const vending = new ChangeHandler();
      //Act
      vending.insertCoin("penny")
      //Assert
        expect(vending.cashTendered).toBe(1);
    });
    
    it("Calling function multiple times continues to add on to the amount", function() {
      //Arrange
      const vending = new ChangeHandler();
      //Act
      vending.insertCoin("penny")
      vending.insertCoin("nickel")
      vending.insertCoin("dime")
      vending.insertCoin("quarter")
      //Assert
        expect(vending.cashTendered).toBe(41);
    });
    it("Returns true if cashTendered more than amountDue", function() {
      //Arrange
      const vending = new ChangeHandler(24);
      //Act
      vending.insertCoin("quarter")
      //Assert
      expect(vending.isPaymentSufficient()).toBe(true);
    });
    it("Returns false if cashTendered less than amountDue", function() {
      //Arrange
      const vending = new ChangeHandler(26);
      //Act
      vending.insertCoin("quarter")
      //Assert
      expect(vending.isPaymentSufficient()).toBe(false);
    });
    it("Returns true if cashTendered equal to amountDue", function() {
      //Arrange
      const vending = new ChangeHandler(25);
      //Act
      vending.insertCoin("quarter")
      //Assert
      expect(vending.isPaymentSufficient()).toBeDefined(true);
    });

    it("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function() {
      //Arrange
      const vending = new ChangeHandler(10)
      //Act
      vending.insertCoin("dime"); 

      vending.insertCoin("quarter");
      vending.insertCoin("nickel");
      vending.insertCoin("penny");
      vending.insertCoin("penny");

      //Assert
      expect(vending.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
    });
    it("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function() {
      //Arrange
      const vending = new ChangeHandler(10)
      //Act
      vending.insertCoin("dime"); 
      vending.insertCoin("dime"); 

      //Assert
      expect(vending.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
    });
    it("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function() {
      //Arrange
      const vending = new ChangeHandler(10)
      //Act
      vending.insertCoin("dime"); 
      vending.insertCoin("quarter"); 
      vending.insertCoin("penny"); 
      vending.insertCoin("penny"); 

      //Assert
      expect(vending.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
    });
    it("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function() {
      //Arrange
      const vending = new ChangeHandler(10)
      //Act
      vending.insertCoin("dime"); 
      vending.insertCoin("quarter"); 
      vending.insertCoin("quarter"); 
      vending.insertCoin("dime"); 
      vending.insertCoin("nickel"); 
      vending.insertCoin("penny"); 
      vending.insertCoin("penny"); 
      vending.insertCoin("penny"); 

      //Assert
      expect(vending.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
    });

});

