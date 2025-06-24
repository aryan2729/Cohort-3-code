import { BrainIcon } from "../icons/BrainIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){

    // border-r means at right side only 1 border | fixed for 
    return <div className=" h-screen w-72 fixed border-r   bg-white left-0 top-0 "  >

        <div className="text-gray-800  items-center pt-4 pl-10  flex   text-2xl  font-bold">
                <div className="pr-2">
                    <BrainIcon/>
                </div>
                <div >
                    Brainly
                </div>
        </div>

        <div className="pl-2 pt-8 " >
        <SidebarItem icon={<TwitterIcon/>} text="Twitter"/>
        <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/>
        <SidebarItem icon={<DocumentIcon/>} text="Document"/>
        <SidebarItem icon={<GithubIcon/>} text="Github"/>

        <input placeholder="Search" className="w-40  h-10 bg-purpleLow text-purpleHigh border-1 pl-13 ml-10 rounded-xl mt-5 " />

        <div className="absolute inset-x-0 bottom-5 ">
        <button className="w-40  h-10 bg-purpleLow text-purpleMid  bg-text-purpleHigh border-1  ml-13 rounded-xl  ">Logout </button>
        </div>
        </div>
    </div>
}