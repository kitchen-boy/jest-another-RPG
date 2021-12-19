const Potion = require('../lib/Potion.js');
test('creates a health potion object', () => {
    //use the new keyword to create new Potion objects: when we create a new Potion, it will take the string we pass in & assign it to the potion's name
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    // can still specify that the new potion should have a name property equal to health & a value property that is a number of some kind. 
    expect(potion.value).toEqual(expect.any(Number));
    // The expect.any() method takes a constructor as an argument.
    // Here, we're expecting that the value property is created with a Number()constructor.
  });

test('creates a random potion object', () => {
  const potion = new Potion();
// Note we won't check to see if the potion has a name value of health.
// We could have written a test that checks to see if name is health, strength, or agility.
  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});  
  