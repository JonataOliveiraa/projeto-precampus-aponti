import { useState } from "react";
import type { SelectProps } from "../../interfaces/SelectProps";
import type { Option } from "../../interfaces/OptionProps";

function FormMultiSelect({ onChange, label, options }: SelectProps) {
    const [selected, setSelected] = useState<Option[]>([])
    const [showOptionsBox, setShowOptionsBox] = useState<boolean>(false)

    return (
        <div className="flex flex-col">
            {label && <label>{label}</label>}

            <div className={`p-5 flex ${ showOptionsBox ? "rounded-3xl rounded-b-none" : "rounded-full"} border w-full`} onClick={() => setShowOptionsBox(!showOptionsBox)}>
                { 
                    selected.map(option => (
                        <span>{option.label}</span>
                    ))
                }
            </div>  
            {showOptionsBox && <div className="flex bg-white h-10 border border-t-0">
                {
                    options.map(option => (
                        <div key={option.value} className="p-2">
                            {option.label}       
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default FormMultiSelect;