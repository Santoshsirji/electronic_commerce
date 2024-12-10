import Footer from "@/components/userUI/Footer"
import Navbar from "@/components/userUI/Navbar"
import { Poppins } from "next/font/google"
import MessageConnector from "@/components/userUI/MessageConnector"

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600",],

})
const UserLayout = ({children}: {children: React.ReactNode}) => {

  return (
    <div className={font.className}>
        <Navbar/>
          <div className="">
            {children}
          </div>
        <MessageConnector/>
        <Footer/>
    </div>
  )
}

export default UserLayout
