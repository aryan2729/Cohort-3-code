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

export function Dashboard() {

  const [modalOpen , setModalOpan] = useState(false);
  const contents = useContent();

  return <div>

      
      <Sidebar />

      <div className=' bg-grayScreen min-h-screen  p-4  ml-72 border-2 '>    {/* margin-left-72 means the content start from m-l-72 so the content not go under the side bar cuz side bar w-72  */}
        <CreateContentModal open={modalOpen} onClose={()=>{    
          setModalOpan(false);
        }} />

        <div className=" flex justify-end gap-4">
          
          <Button onClick={() => {
            setModalOpan(true);
          }} variant='secondary' text='Add content' startIcon={ < PlusIcon />} />
          
          <Button  onClick={ async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
              share : true
            } , {
              headers : {
                "Authorization" : localStorage.getItem("token")
              }
            });
            const shareUrl =`${SITE_URL}/share/${response.data.hash}`;

            alert(shareUrl);
            

          }}
           variant='primary' text='Share brain' startIcon={ < ShareIcon />} />

        </div>
        <div className='flex gap-5 flex-wrap '>

          {contents.map(({title  , type , link  }) => <Card 
              type={type}
              link={link}
              title={title}
          />)}

        </div>
      </div>
  </div>
}


