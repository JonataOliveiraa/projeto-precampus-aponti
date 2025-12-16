import type { InputProps } from "../../interfaces/InputProps";

function FormNumberInput({ onChange, value, label, placeholder  }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}

            <input
                type="number"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="border rounded px-3 py-2"
            />
        </div>
    );
}

export default FormNumberInput;