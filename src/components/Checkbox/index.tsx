import { CheckboxProps } from "./types";

export default function Checkbox({ type, children, checked, ...props }: CheckboxProps) {
    const isChecked = checked;

    if(type === 'checkbox') {
        return (
            <label className="flex items-center space-x-2 cursor-pointer">

                <input type="checkbox" className="hidden peer" {...props}/>

                <span
                className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center
                    ${isChecked ? 'bg-blue-500 border-transparent' : 'bg-white border-gray-300'} 
                    peer-checked:bg-blue-500 peer-checked:border-transparent`}
                >

                {isChecked && <span className="w-4 h-4 bg-white rounded-sm"></span>}
                </span>
                <span className="text-lg">{children}</span>
            </label>
        );
    } else if(type === 'radio') {
        return (
            <label className="flex items-center space-x-2">
                <input type="radio" className="hidden peer" {...props}/>
                <span className="w-6 h-6 border-2 border-green-500 rounded-full flex items-center justify-center bg-white peer-checked:border-blue-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <span>{children}</span>
            </label>
        );
    }
}