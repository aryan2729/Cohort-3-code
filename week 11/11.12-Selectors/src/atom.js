import {atom , selector} from 'recoil'

export const networkAtom = atom({
    key:"networkAtom",
    default : 102
});

export const jobsAtom = atom({
    key:"jobsAtom",
    default : 0
});
export const notificationAtom = atom({
    key:"notificationAtom",
    default : 12
});
export const messagingAtom = atom({
    key:"messagingAtom",
    default : 0
});


// Define a selector to calculate the total notification count and export it
export const totalNotificationSelector = selector({

    key:"totalNotificationSelector",

     // Define the get function to calculate the total notification count
    get : ({get}) => {
        const netowrkAtomCount = get(networkAtom);          // Get the current value of the networkAtom, jobsAtom, notificationsAtom, messagingAtom atoms
        const jobsAtomCount = get(jobsAtom); 
        const messagingAtomCount = get(messagingAtom);
        const notificationAtomCount = get(notificationAtom);

        return netowrkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount ; // Return the sum of the notification counts from all the atoms
    }
});