export interface SelectProps {
  label?: string
  value: string
  onChange: (value: string) => void
  options: Option[]
}

interface Option { 
  label: string
  value: string
}