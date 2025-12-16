import FormLayout from "../../layout/FormLayout";

import FormDateInput from "../../layout/components/FormDateInput";
import FormSubtitle from "../../layout/components/FormSubtitle";
import FormInputMask from "../../layout/components/FormInputMask";
import FormNumberInput from "../../layout/components/FormNumberInput";
import FormTextInput from "../../layout/components/FormTextInput";
import FormSelect from "../../layout/components/FormSelect";
import Button from "../../components/Button";

function StudentForm() {
    return (
        <FormLayout>
            <FormSubtitle text="DADOS DO ALUNO" />
            <FormTextInput  label="NOME COMPLETO" placeholder="Nome do aluno" />
            <FormTextInput label="EMAIL" placeholder="user@hotmail.com" />
            <div className="my-5 flex gap-2">
                <FormDateInput label="DATA DE NASCIMENTO" />
                <FormInputMask label="TELEFONE" mask="(00) 0000-0000" placeholder="(99) 9999-9999" />
            </div>
            <div className="my-5 flex flex-col gap-2">
                <FormSelect label="UNIVERSIDADE DE INTERESSE" options={
                    [
                        { label: "Universidade Federal de São Paulo", value: "ufsp" },
                        { label: "Universidade Estadual do Rio de Janeiro", value: "uerj" },
                        { label: "Universidade Católica de Minas Gerais", value: "ucmg" },
                        { label: "Universidade Privada de Brasília", value: "upb" },
                        { label: "Universidade Federal do Nordeste", value: "ufn" }
                    ]
                } />
                <FormSelect label="CURSO DE INTERESSE" options={
                    [
                        { label: "Engenharia de Software", value: "eng_software" },
                        { label: "Administração de Empresas", value: "adm_empresas" },
                        { label: "Ciência da Computação", value: "cc" },
                        { label: "Contabilidade", value: "contabilidade" },
                        { label: "Direito", value: "direito" }
                    ]
                } />
            </div>
            <FormSubtitle text="DADOS DO RESPONSÁVEL" />
                <FormTextInput  label="NOME COMPLETO" placeholder="Nome do responsável" />
                <FormTextInput label="EMAIL" placeholder="user@hotmail.com" />
                <div className="my-5 flex gap-2">
                    <FormTextInput label="GRAU DE PARENTESCO" placeholder="Ex: Mãe, Pai, Tio, Tia..." />
                    <FormInputMask label="CPF" mask="000.000.000-00" placeholder="123.456.789-10" />
                    <FormNumberInput label="RENDA MENSAL"placeholder="R$ 2.000"/>
                </div>
                <div className="mb-10">
                    <FormTextInput label="SENHA" />
                    <FormTextInput label="CONFIRMAR SENHA" />
                </div>
                <Button text="Confirmar"/>
        </FormLayout>
    )
}

export default StudentForm;