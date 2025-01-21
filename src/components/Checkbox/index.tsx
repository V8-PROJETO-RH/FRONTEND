import { CheckboxProps } from "./types";

function CheckedIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_3231_5)">
          <path
            fill="#FFF"
            d="M3.396 8.582l-3.25-3.25a.5.5 0 010-.707l.708-.707a.5.5 0 01.707 0l2.189 2.19 4.69-4.69a.5.5 0 01.706 0l.708.707a.5.5 0 010 .707l-5.75 5.75a.5.5 0 01-.708 0z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_3231_5">
            <path fill="#FFF" d="M0 0H10V10H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
}

export default function Checkbox({ type, id, ...props }: CheckboxProps) {

    if(type === 'checkbox') {
        return (
            <div className="flex items-center w-min">
                <input
                    id={id}
                    type="checkbox"
                    className="hidden peer"
                    {...props}
                />
                <label
                    htmlFor={id}
                    className="w-6 h-6 border border-gray-500 rounded flex items-center justify-center bg-white cursor-pointer peer-checked:border-azul-tecnologia peer-checked:bg-azul-tecnologia"
                >
                </label>
                <span 
                    data-testid="checked-icon"
                    className="hidden peer-checked:block relative peer-checked:right-1/2"
                >
                    <CheckedIcon />
                </span>
            </div>
        );
    } else if(type === 'radio') {
        return (
            <div className="flex items-center w-min">
                <input
                    id={id}
                    type="radio"
                    className="hidden peer"
                    {...props}
                />
                <label
                    htmlFor={id}
                    className="w-6 h-6 border border-gray-500 rounded-full flex items-center justify-center bg-white cursor-pointer peer-checked:border-azul-tecnologia"
                >
                </label>
                <span
                    data-testid="radio-circle"
                    className="w-2.5 h-2.5 bg-azul-tecnologia rounded-full opacity-0 peer-checked:opacity-100 relative peer-checked:right-1/2"
                ></span>
            </div>
        );
    }
}