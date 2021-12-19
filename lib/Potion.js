// create a new constructor function for a health potion.
// the Potion() constructor should take in a name parameter & checks to see if name is health, strength, or agility.
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    // this.name function is set to name || this.types[Math.floor(Math.random() * this.types.length)]
    // Used || operator so this expression will be evaluated so that if name is truthy, then this.name = name. 
    // If name is not truthy, then this.name = this types[Math.floor(Math.random() * this.types.length)] or a random type of potion. 
    if (this.name === 'health') {
        // If the potion is a health potion, its value is a number between 30 & 40. Refer to JS Math.random() method note below. 
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        // The Potion() constructor should assign the value property to be a random number between 7 & 12.
        // Used JavaScript Math.random() method to return a random number between 7 & 12.
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}
// Set module.exports to be the Potion() constructor so that test can create new potions. 
module.exports = Potion;