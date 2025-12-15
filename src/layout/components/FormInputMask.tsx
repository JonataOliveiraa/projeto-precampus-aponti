import type { InputMaskProps } from "../../interfaces/InputMaskProps";
import { IMaskInput } from "react-imask";

function FormInputMask({ onChange, value, label, placeholder, mask  }: InputMaskProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}
            <IMaskInput
                mask={mask}
                unmask={true}
                placeholder={placeholder}
                className="border px-3 py-2 rounded"
            />
        </div>
    );
}

export default FormInputMask;