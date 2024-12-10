import Container from "@/components/Container";
import React from "react";

const OrganizationLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="py-14">
            <Container>
                {children}
            </Container>
        </div>
     );
}
 
export default OrganizationLayout;