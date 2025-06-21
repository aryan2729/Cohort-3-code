import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/shareIcon'

function App() {
  

  return <div>

      <Button variant='secondary' text='Add content' startIcon={ < PlusIcon />} />
      <Button variant='primary' text='Share brain' startIcon={ < ShareIcon />} />

  </div>
}

export default App
