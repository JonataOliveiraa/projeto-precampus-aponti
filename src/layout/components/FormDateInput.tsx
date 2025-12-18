import type { InputProps } from "../../interfaces/InputProps";

function FormDateInput({ onChange, label  }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}

            <input
                type="date"
                onChange={(e) => onChange(e.target.value)}
                className="border rounded px-3 py-2"
            />
        </div>
    );
}

export default FormDateInput;