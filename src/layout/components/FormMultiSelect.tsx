import { useEffect, useState } from "react";

const OPTIONS = [
    { label: "Universidade Federal de São Paulo", value: "ufsp" },
    { label: "Universidade Estadual do Rio de Janeiro", value: "uerj" },
    { label: "Universidade Católica de Minas Gerais", value: "ucmg" },
    { label: "Universidade Privada de Brasília", value: "upb" },
    { label: "Universidade Federal do Nordeste", value: "ufn" }
];

function FormMultiSelect({ label, className }: { label: string, className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]) // Guardamos apenas os 'values' (strings)

    useEffect(() => {
        console.log("O usuário mudou a seleção para:", selected);
    }, [selected])

    const handleSelect = (value: string) => {
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value));
        } else if (selected.length < 3) {
            setSelected([...selected, value]);
        } else {
            selected.shift()
            setSelected([...selected, value])
        }
    }

    return (
        <div>
            {label && <label className="text-sm font-medium">{label}</label>}
            <button 
                type="button"
                className={`${className} flex flex-col w-full text-left gap-1 border rounded px-3 py-2 bg-white/30`} 
                onClick={() => setIsOpen(true)}
            >
                {selected.length > 0 
                    ? `${selected.length} selecionado(s)` 
                    : "Abrir tela"}
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-20 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex flex-col gap-1 relative bg-white p-6 border border-gray-200 rounded-2xl w-full max-w-xl shadow-xl">
                        <p className="font-semibold">Selecione até 3 cursos:</p>
                        
                        <div className="flex flex-col bg-zinc-200 p-3 mb-3 rounded-md max-h-60 overflow-auto gap-3">
                            {OPTIONS.map(element => {
                                // 3. Verificamos se está selecionado para aplicar o estilo dinamicamente
                                const isSelected = selected.includes(element.value);

                                return (
                                    <div 
                                        key={element.value}
                                        onClick={() => handleSelect(element.value)}
                                        className={`p-2 rounded-md cursor-pointer transition-colors ${
                                            isSelected 
                                                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                                : 'bg-white text-black hover:bg-blue-100'
                                        }`}
                                    >
                                        Curso: {element.label}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="border px-2">
                            {
                                selected.map(element => (
                                    <div className="bg-blue-700 text-white">{OPTIONS.find(value => element === value.value)}</div>
                                ))
                            }
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full py-2 bg-gray-100 rounded-lg font-medium hover:bg-gray-200"
                        >
                            Concluído
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormMultiSelect;