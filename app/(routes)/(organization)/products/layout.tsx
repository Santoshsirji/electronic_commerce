import Container from "@/components/Container"
import Navbar from "@/components/userUI/Navbar"
import React from "react"

const SofaLayout = ({
    children,
}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <div className="">
          <Container>
            {children}
          </Container>
        </div>
    </div>
  )
}

export default SofaLayout
