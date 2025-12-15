import type { InputProps } from "../../interfaces/InputProps";

function FormTextInput({ onChange, value, label, placeholder  }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}

            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="border rounded px-3 py-2"
            />
        </div>
    );
}

export default FormTextInput;