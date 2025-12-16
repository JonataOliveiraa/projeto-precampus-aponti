export interface SelectProps {
  label?: string
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
}
