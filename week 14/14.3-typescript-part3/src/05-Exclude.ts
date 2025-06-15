// (Exclude)
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.


type EventType = 'touch' | 'scroll'  | 'moveOn';

type ExclusiveType = Exclude<EventType,'scroll' >;  // it exclude this scroll thing from the above 


const handleEvent =  ( event : ExclusiveType ) =>{
    console.log('Handling eventex : ${event} ');
} 

// handleEvent('scroll'); // throw error cuz we've already excluded scroll 

