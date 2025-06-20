import './App.css'
import {Button} from "./components/Ui/Button"
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {


  return (
    <>
      <Button  variant="secondary"  text="Share Brain "  size="sm"/>
      <Button variant="primary"  startIcon={ <PlusIcon size='md' /> }  text="Add Content" endIcon={ <ShareIcon size='md' />} size="md" />
      <Button variant="primary"  text="Add Content" size="lg" />
    </>
  )
}

export default App
