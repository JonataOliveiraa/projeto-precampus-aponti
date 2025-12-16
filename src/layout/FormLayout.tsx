import Background from "../components/Background";
import React from "react";

import FormTextInput from "./components/FormTextInput";
import FormNumberInput from "./components/FormNumberInput";
import FormInputMask from "./components/FormInputMask";

function FormLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen p-2 bg-[#1E90FF] relative overflow-hidden flex">
      <Background />
      <div className="flex-1 bg-white/35 rounded-2xl py-6 px-30 z-10">
        <div className="mb-8">
            <h1 className="text-3xl text-blue-600">Faça seu cadastro</h1>
            <p>Já tem uma conta? <span className="text-blue-700 border-b border-transparent cursor-pointer hover:border-blue-600">Faça login</span></p>
        </div>

        <FormTextInput label="asda" placeholder="asda"/>
        <FormNumberInput label="asda" placeholder="1231"/>
        <FormInputMask label="phone number" mask="(00) 0000-0000" placeholder="(99) 9999-9999"/>
      </div>
    </div>
  );
}

export default FormLayout;