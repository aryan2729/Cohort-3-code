import { atom , selector } from 'recoil';
import axios from 'axios';

// first go to sum-server folder in src and run the file by node index.js and go to localhost:8080 then you'll see what you need to fetch 


export const notifications = atom({

    key: "notificationAtom" ,

    // Define the default value of the atom using a selector function
    default : selector({

        key:"networkAtomSelector",

         // Define the get function to fetch the notifications data from the server
        get : async () => {
            const response= await axios.get("http://localhost:8080/notifications");    // Make a GET request to the server to fetch the notifications data
            
            return response.data;
        }})
});


// Create a selector called totalNotificationSelector to calculate the total number of notifications and export it
export const totalNotificationSelector = selector({

    key:"totalnotificationselector",

    get : ({get}) => {

        const allnoticications = get(notifications);           // Get the current value of the notifications atom

        return allnoticications.network + allnoticications.jobs + allnoticications.notifications + allnoticications.messaging;
    }
});