describe("pow", function() {
/*
    before(() => alert("Testing started – before all tests"));
    after(() => alert("Testing finished – after all tests"));
  
    beforeEach(() => alert("Before a test – enter a test"));
    afterEach(() => alert("After a test – exit a test"));
  
    it('test 1', () => alert(1));
    it('test 2', () => alert(2));
*/
/*
    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 4), 81);
    });//only one error shown and no other results

//this shows both results
    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
      });
    
      it("3 raised to power 4 is 81", function() {
        assert.equal(pow(3, 4), 81);
      });
*/
    it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));//negative, we have to specify those cases in the function to test
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));//non-integer, we have to specify those cases in the function to test
  });

//even better a loop of tests
describe("raises x to power 3", function() {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

    });
  
});

//break the test in single tests and use description
describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    it("5 in the power of 2 equals 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 in the power of 3 equals 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });

  //the one in the middle is in standalone mode
  describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    // Mocha will run only this block, meaning only this one will appear in the test window
    it.only("5 in the power of 2 equals 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 in the power of 3 equals 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });