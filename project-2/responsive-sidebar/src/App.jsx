import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsFillChatDotsFill, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsSearch } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineBarChart, AiOutlineFileText } from "react-icons/ai";
function App() {
  const [open, setOpen] = useState(true)
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const Menus = [
    { title: "Dashboard" , to: "/dashboard/dashboard"},
    { title: "Pages", icon : <AiOutlineFileText></AiOutlineFileText> , to: "/dashboard/pages"},
    { title: "Media", spacing: true , icon: <BsFillImageFill></BsFillImageFill> , to: "/dashboard/pages"} ,
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse></BsReverseLayoutTextSidebarReverse>,
      submenu: true,
      submenuItems: [
        { title: "item 1" , to: "/dashboard/pages"},
        { title: "item 2" , to: "/dashboard/pages"},
        { title: "item 3" , to: "/dashboard/pages"},
        { title: "item 4" , to: "/dashboard/pages"},
      ]
    },
    { title: "Analysis", icon: <AiOutlineBarChart></AiOutlineBarChart> , to: "/dashboard/pages"} ,
    { title: "inbox" , icon: <AiOutlineBarChart></AiOutlineBarChart> , to: "/dashboard/pages"},
    { title: "Profile", spacing: true , icon: <AiOutlineBarChart></AiOutlineBarChart> , to: "/dashboard/pages"},
    { title: "Settings" , icon: <AiOutlineBarChart></AiOutlineBarChart> , to: "/dashboard/pages"},
    { title: "Logout" , icon: <AiOutlineBarChart></AiOutlineBarChart> , to: "/dashboard/pages"},
  ];
  return (
    <div className='flex'>
      <div className={`bg-dark-purple h-full p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></BsArrowLeftShort>
        <div className="inline-flex">
          <BsFillChatDotsFill className={`bg-amber-300 text-dark-purple px-1 text-4xl rounded cursor-pointer block float-left mr-2 duration-700 ${open && "rotate-[360deg]"}`}></BsFillChatDotsFill>
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"} `}>Till Now</h1>
        </div>


        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}></BsSearch>

          <input
            type={"Search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardLine></RiDashboardLine>}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenu && open && (
                  <BsChevronDown className={`text-white ${openSubmenu && "rotate-180"} duration-200`} onClick={() => {setOpenSubmenu(!openSubmenu) }}></BsChevronDown>
                )}
              </li>

              {menu.submenu && openSubmenu && open &&(
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li key={index} className="text-gray-300  text-sm flex items-center gap-x-4 cursor-pointer px-5 p-2 hover:bg-light-white rounded-md ">
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
              )}

            </>

            


          ))}
        </ul>
      </div>

      <div className='p-7'>
        <h1n className="text-2xl font-semibold">Home Page</h1n>
      </div>
    </div>
  )
}

export default App
