"use client";
import { useState, useEffect, useRef } from "react";

const MainOrganizationLayout = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);
    const isMountedRef = useRef(false);
    useEffect(() => {
        if(!isMountedRef.current) {
            window.scrollTo(0, document.body.scrollHeight);
    
            const mountTimeout = setTimeout(() => {
                setIsMounted(true);
                isMountedRef.current = true;
            }, 120);
            
                    const scrollTimeout = setTimeout(() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }, 150); 
                    return () => {
                        clearTimeout(mountTimeout);
                        clearTimeout(scrollTimeout);
                    };
        }

    }, []);

    return (
        <div className={`pt-12 ${isMounted ? "content-visible" : "content-hidden h-10"} duration-100`}>
            {children}
        </div>
    );
}

export default MainOrganizationLayout;
