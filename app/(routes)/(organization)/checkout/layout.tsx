import Container from "@/components/Container";

const Checkout = ({children}: { children : React.ReactNode}) => {
    return ( 
        <div
        className="
        pt-
        px-1
        "
        >
            <Container>
             {children}
            </Container>
        </div>
     );
}
 
export default Checkout;