import {atom , selector} from 'recoil'
// importing atom and selector 

export const CounterAtom = atom({
    key: "counter",
    default: 0 
})


// Defining a selector to derive whether the current counter value is even or not
export const evenSelector = selector({
    
    key: "isEven" , 

    get: function ({get}){

        const currentCount = get(CounterAtom);      // Retrieving the current value of the counter from the atom
        
        const IsEven = (currentCount % 2 ==0 );      // Checking if the current count is an even number

        return IsEven;
    }

})