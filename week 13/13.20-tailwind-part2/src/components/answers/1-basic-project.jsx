function SidebarClass1(){

    return <div className="flex">

        {/* h-screen(means full screen height)  w-screen/full(full screen width )  sm(small ) breakpoint responsive thing part1 tailwind  */}
        {/* sm:block means it shows and hidden when it pixels reduce to less than sm then  hidden hide the side bar  & transition-all use for transition when w-96 to w-0 then it shows ^ and duration-150 means the trasition duration */}
        <div className="sm:w-96 w-0  transition-all duration-150     h-screen  bg-blue-400 ">Slidebar</div>
        <div className="w-screen bg-pink-300 h-screen">Content</div>

    </div>
}

export default SidebarClass1;
