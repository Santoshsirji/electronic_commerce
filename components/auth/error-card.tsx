import { FaExclamationTriangle } from "react-icons/fa";


import { Header } from "@/components/auth/header";
import { CardWrapper } from "@/components/auth/card-wrapper";


export const ErrorCard = () => {
    return (
        <CardWrapper
         headerLabel="Oops! Something went wrong!"
         backButtonHref="/auth/login"
         backButtonLabel="Back to login"
        >
            <div
            className="w-full flex justify-center items-center"
            >
                <FaExclamationTriangle className="text-destructive w-8 h-8"/>
            </div>
        </CardWrapper>
    )
}