"use client";

import { GridLoader } from "react-spinners";

const LoaderPage = () => {
    return ( 
        <div className="flex flex-col items-center justify-center h-screen">
            <GridLoader
                color="#00a9fc"
                loading
                margin={5}
                size={40}
            />
        </div>
     );
}
 
export default LoaderPage;