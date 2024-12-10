import { RxExclamationTriangle } from "react-icons/rx";

interface FormErrorProps {
    message?: string;
};

export const FormError = ({
    message
}: FormErrorProps) => {

    if (message && message.length > 0) {

        return (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
                <RxExclamationTriangle className="w-4 h-4" />
                <p>{message}</p>
            </div>
        )
    }
    return null;
}