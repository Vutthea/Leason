import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
function Nav(){
    const [menu , setMenu]= useState(false);
    return (
        <>
          <div className="bg-gray-200 w-full flex menu:justify-between menu:pl-[20px] menu:pr-[20px]">
              <div className="w-[25%] text-blac text-[16px] flex p-3 items-center justify-center pr-[180px]">TESLA</div>
              <div className=" w-[50%] flex justify-around p-3 items-center text-black menu:hidden">
                  <div>Model 5</div>
                  <div>Model X</div>
                  <div>Model 3</div>
                  <div>Model Y</div>
                  <div> Solar Roof</div>
                  <div> Solar Planet</div>
              </div >
              <div className="w-[20%] flex items-center text-black justify-around pl-[50px] menu:hidden">
                    <div>Shop</div>
                    <div>Account</div>
                    <div>Menu</div> 
              </div>
              <div className="w-[5%]  items-center text-black justify-around hidden menu:block menu:flex menu:justify-center menu:items-center ">
               {menu == true ? <AiOutlineClose onClick={() => setMenu(!menu)}/> : <AiOutlineMenu onClick={() => setMenu(!menu)}/>}
              </div>
          </div>
        </>
    );
}
export default Nav;