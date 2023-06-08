import "./Sidebar.scss";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { sidebarData } from "../../data/data";
import { useState } from "react";
import logoText from "../../img/logo/logoText.png"
import logoImg from "../../img/logo/logoImg.png"

const Sidebar = ({ currentTab, setCurrentTab }) => {

  const [selected, setSelected] = useState(0);

  const tabHandler = (index, item) => {
    !item.disabled && setSelected(index);
    !item.disabled && setCurrentTab(item.heading)
  }
  return (
    <div className="sidebar shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
      <div className="flex items-center gap-1 logo">
        <img src={logoImg} className="h-10" alt="" />
        <img src={logoText} className="h-6 mt-1 w-28" alt="" />
      </div>
      <h4 className="pr-6 mt-3 text-end">IOT Dashboard</h4>
      <div className="flex flex-col mt-16 menu">
        {
          sidebarData.map((item, index) => {
            return (
              <div className={!item.disabled ? (selected === index ? "menuItem active" : "menuItem") : "text-gray-400 flex flex-col  gap-2 h-10 relative ml-4 cursor-not-allowed"}
                onClick={() => tabHandler(index, item)}
                key={index}
              >
                {
                  item.disabled && <div className="text-[0.5rem] tooltip">{item.tooltip}</div>
                }
                <div className="flex gap-3">
                  <item.icon className="text-xl" />
                  <span className="text-sm">{item.heading}</span>
                </div>

              </div >
            )
          })
        }
        {/* <div className="menuItem">
          <UilSignOutAlt />
        </div> */}
      </div>
    </div >
  )
}

export default Sidebar