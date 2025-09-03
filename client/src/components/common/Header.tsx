import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import type { HeaderLink } from "../../types";
function Header() {



  const links: HeaderLink[] = [
    {
      path:"/",
      name:"Home"
    },
    {
      path:"/kitchen",
      name:"Kitchen"
    },
    {
      path:"/Work",
      name:"Work"
    }
  ]

  return (
    <nav className="w-full py-4 px-2 flex">
      {/*logo here  */}
      <div className="w-1/2">
        <img src="/header/logo.png" className="w-1/2"  />
      </div>

      {/* link here */}
      <div className="w-1/2 flex justify-end md:justify-center items-center" >
        {/* medium device */}
        <ul className=" hidden md:flex justify-around gap-3 w-3/6 ">
          {
            links.map((item:HeaderLink,index:number)=>{
              return(
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              )
            })
          }
        </ul>

          {/* mobile device */}

          <div className=" self-end  md:hidden">
            <button>
                <RxHamburgerMenu className="text-lg" />
            </button>
          </div>

      </div>
    </nav>
  );
}

export default Header;
