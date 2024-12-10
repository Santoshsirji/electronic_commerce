import Container from "@/components/Container";

const CategoryLayout = ({children}: { children: React.ReactNode }) => {
    return ( 
        <div className="">
            <Container>
                {children}
            </Container>
        </div>
     );
}
 
export default CategoryLayout;