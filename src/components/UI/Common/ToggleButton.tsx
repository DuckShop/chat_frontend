import { useState } from "react";

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked((prevState) => !prevState);
    };

    return (
        <label
            htmlFor="toggle"
            className="inline-flex relative items-center cursor-pointer h-4"
        >
            <input
                type="checkbox"
                id="toggle"
                checked={isChecked}
                onChange={handleToggle}
                className="sr-only"
            />
            <div
                className={`w-8 h-4 rounded-full transition-colors duration-200 ${isChecked ? "bg-purple-600" : "bg-gray-300"
                    }`}
            ></div>
            <div
                className={`w-[13px] h-[13px] bg-white rounded-full absolute left-[1.5px] top-[1px] transition-transform duration-200 ${isChecked ? "translate-x-[14px]" : "translate-x-0"
                    }`}
            ></div>
        </label>
    );
};

export default ToggleButton;