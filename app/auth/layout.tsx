"use client";
import { Suspense } from "react"
const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
         <div
            className="h-full 
            flex items-center 
            justify-center     
            bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
            bg-slate-100
            "
         >
            <Suspense >
                {children}
            </Suspense>
    </div> );
}
 
export default AuthLayout;