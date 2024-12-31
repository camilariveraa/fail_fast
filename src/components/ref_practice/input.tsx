import { forwardRef } from "react";

interface InputProps {
    color?: string;
}

const MyInput = forwardRef<HTMLInputElement, InputProps>(({
    color
}, ref) => {
    return (
        <input
            className="bg-blue-400"
            ref={ref}
            style={{ color }}
        />
    );
});
export default MyInput;