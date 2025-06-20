import './App.css'
import {Button} from "./components/Ui/Button"
import { PlusIcon } from './icons/PlusIcon'

function App() {


  return (
    <>
      <Button  variant="secondary"  text="Share Brain "  size="sm"/>
      <Button startIcon={ <PlusIcon/> } variant="primary"  text="Add Content" size="md" />
      <Button variant="primary"  text="Add Content" size="lg" />
    </>
  )
}

export default App
