import Image from "next/image";

interface SecondaryImageProps {
    src: string;
    equal: boolean;
    onClick: () => void;
}

const SecondaryImage = ( { equal, src, onClick } : SecondaryImageProps) => {
    return ( 
        <div>
            <Image className={`${equal ? "border-red-500 border-2" : ""} p-2 border rounded-md w-32 cursor-pointer hover:opacity-80`} height={100} width={100} alt="Secondary Image" src={src} />
        </div>
     );
}
 
export default SecondaryImage;