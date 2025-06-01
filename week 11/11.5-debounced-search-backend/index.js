let currentClock;


function searchBackend(){
    console.log("req sent to backend...")

    // fetch
}


function debouncedSearchBackend(){

    clearTimeout(currentClock);

    currentClock = setTimeout(searchBackend, 30 );  // call searchBackend in every 30 milli seconds 

}


debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();           // here the second last currentClock will clear and finally searchBacked called after 30ms

