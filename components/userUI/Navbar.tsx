import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Items from "@/components/userUI/Items";

const Navbar = () => {
    return (
        <div
            className="
        bg-white
        text-[#131313]
        fixed
        inset-0
        z-20
        h-max
        border-b
        items-center
        w-full
        "
        >
            <div
                className="
            w-full
            px-4
            "
            >
                <Container>
                    <div
                        className="
                    flex
                    justify-between
                    "
                    >
                        <Logo />
                        <Items />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;