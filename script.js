function Orange() {
  // Should have diameter property to keep track of orange's diameter.
  this.diameter = 3;
}

function OrangeTree() {
  // Should have age property to keep track of tree's age.
  this.age = 0;

  // Should have height property to keep track of tree's height.
  this.height = 0;

  // Should have oranges property to keep track of tree's oranges. This property should be an array of orange objects.
  this.oranges = [];

  this._dead = false; // Private property
  this._maxAge = 50; // Private property

  // Should have ageMe method that ages the tree by one year.
  this.ageMe = function () {
    this.age++;

    // Aging the tree should also make it grow taller. You can decide how much it grows in a year. Height should only increase for the first 10 years of the tree's life.
    if (this.age <= 10) {
      this.height += 5;
    }

    // Aging the tree should also make it produce oranges. You can decide how many oranges it grows in a year but it should not grow oranges when it is dead or during the first 3 years of its life.
    if (this.age > 3 && this.dead === false) {
      // grow 5 oranges
      for (let i = 0; i < 5; i++) {
        let orange = new Orange();
        this.oranges.push(orange);
      }
    }

    // Tree should die when it reaches its maximum age.
    if (this.age === this.maxAge) {
      this.dead = true;
    }
  };

  // Should have a method called hasAnyOranges that returns true if tree has any oranges.
  this.hasAnyOranges = function () {
    if (this.oranges.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  // Should have a method called pickAnOrange that can pick an orange from the tree.
  this.pickAnOrange = function () {
    // 1. pick an orange
    // 2. return that orange
    if (this.hasAnyOranges() === true) {
      var orange = this.oranges.pop();
      return orange;
    }
  };
}

// Getter and setter for _dead private property
Object.defineProperty(OrangeTree.prototype, "dead", {
  // getter = no parameters
  // getter must always return a value
  get: function () {
    // return
    return this._dead;
  },
  // setter = one parameter
  set: function (value) {
    // set _dead property
    this._dead = value;
  },
});

// Only getter for _maxAge private property. No setter because _maxAge do not change.
Object.defineProperty(OrangeTree.prototype, "maxAge", {
  get: function () {
    return this._maxAge;
  },
});
