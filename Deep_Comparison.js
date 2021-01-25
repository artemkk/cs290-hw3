/*

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, 
typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

Your test for whether you are dealing with a real object will look something like typeof x == "object" && x != null. 
Be careful to compare properties only when both arguments are objects. 
In all other cases you can just immediately return the result of applying ===.

Use Object.keys to go over the properties. You need to test whether both objects have the same set of property names and whether those properties have identical values. 
One way to do that is to ensure that both objects have the same number of properties (the lengths of the property lists are the same). 
And then, when looping over one of the object’s properties to compare them, always first make sure the other actually has a property by that name. 
If they have the same number of properties and all properties in one also exist in the other, they have the same set of property names.

Returning the correct value from the function is best done by immediately returning false when a mismatch is found and returning true at the end of the function.
*/

let vo_1 = { here: { is: "an" }, object: 3 };
let vo_2 = { here: { is: "an" }, object: 3 };

let obj_3 = { is: "an" }


// deepEqual Function; vo_1 -> value/object one
function deepEqual(vo_1, vo_2) {
    
    // Strict comparison of values first; will be false if either are objects
    if (vo_1 === vo_2) {
        return true
    
        // Check if both are strictly the object type and not the null type
    } else if ((typeof (vo_1) === "object" && vo_1 != null) && (typeof (vo_2) === "object" && vo_2 != null)) {
        
        // Check the lengths of the object keys/properties for match
        if (Object.keys(vo_1).length != Object.keys(vo_2).length) {
            return false
        }

        // Iterate through properties of object 1
        for (let prop of Object.keys(vo_1)) {

            // See if object 1 property name is present in the names of object 2 properties; return false if no property name match
            if (!Object.keys(vo_2).includes(prop)) {
                return false
            }

            // See if recursive deepEqual call is false (the value at property prop for object 1 is different from the value at the same prop for object 2)
            if (!deepEqual(vo_1[prop], vo_2[prop])) {
                return false
            }
        }
        // Iterating through all keys/properties via prop and not flagging any if-falses yields true and full input deep comparison
        return true
    }
}

//Code Test
let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

console.log(Object.keys(vo_1)[0])

