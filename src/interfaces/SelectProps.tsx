import type { Option } from "./OptionProps"

export interface SelectProps {
  label?: string
  value: string
  onChange: (value: string) => void
  options: Option[]
}

