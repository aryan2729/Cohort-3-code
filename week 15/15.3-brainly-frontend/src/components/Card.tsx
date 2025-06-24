import { ShareIcon } from "../icons/shareIcon"


interface CardProps {
    title : string ;
    type : "youtube" | "twitter";
    link : string  ;
}

export const Card = ( props: CardProps) => {


return <div>
        
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72  border min-h-48 min-w-72">
        
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon/>
                    </div>
                    {props.title}
                </div>
                <div className="flex">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">
                             <ShareIcon/>
                        </a>
                       
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
    
                </div>                
            </div>
            
            <div className="pt-2">            {/* className : w-full & pt-1 */}

                { props.type ===  "youtube" &&    <iframe   className="w-full" src={props.link.replace("watch" , "embed").replace("?v=","/")}  title="Apple Just SHOCKED Everyone: AI IS FAKE!?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                { props.type==="twitter" &&  <blockquote className="twitter-tweet  " > <a href={props.link.replace("x","twitter")}> </a> </blockquote>}
               
            </div>

    </div>
    </div>
}