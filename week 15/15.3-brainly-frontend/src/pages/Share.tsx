import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/shareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL, SITE_URL } from '../config'

export function Share() {

  const [modalOpen , setModalOpan] = useState(false);
  const contents = useContent();



    

  return <div>

      
      <Sidebar />

      

          { contents.map(({title  , type , link  }) => <Card 
              type={type}
              link={link}
              title={title}
          />)}



  </div>
}


