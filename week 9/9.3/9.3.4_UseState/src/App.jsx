import { useState } from 'react'

function App() {

    return (

        // Apply inline styles to the div element
        <div style={ { backgroundColor: "#dfe6e9" , height: "100vh"}}>
          <ToggleMessage/>
          <ToggleMessage/>
          <ToggleMessage/>
        </div>
    );
}

const ToggleMessage = () => {

  let [notificationCount , setNotificationCount] = useState(0);           {/* useState */}

  function increment(){
    setNotificationCount(notificationCount + 1);
  }

  return (
        <div>
          <button onClick={increment}> Increase count</button>       {/* useState used here on click increment notificationCount keeps increasing  */}
            {notificationCount}

        </div>
  );
};


export default App


