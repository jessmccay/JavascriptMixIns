const humanFactory = function(obj) {
    let isCrying = false;

// pass in {} to create a new object
    return Object.assign({}, obj, {
        cry() {
            isCrying = true;
            return this;
        }, isCrying() {
            return isCrying;
        }
    });
};

const jessica = humanFactory({});
console.dir(jessica);

const flyFactory = function(obj){
    let isFlying = false;

    return Object.assign({}, obj, {
        fly() {
            isFlying = true;
            return this;
        }, isFlying() {
            return isFlying;
        }
    });
};

/*now pass created a humanFactory with a 
flyFactory and give fly factory an empty
 object (this creates a new object, remember!) 
 Now this new object will be created with all
  the functionality of the humanFactory and 
  the flyFactory!*/
const superwoman = humanFactory(flyFactory({}));

console.log(superwoman.fly().cry().isCrying());
console.log("hello");