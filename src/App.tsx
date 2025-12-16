import FormSelect from "./layout/components/FormSelect"
import FormLayout from "./layout/FormLayout"

function App() {
  return (
    <FormLayout>
      <FormSelect options={[{ label: 'a', value: 'a' }]} />
    </FormLayout>
  )
}

export default App
