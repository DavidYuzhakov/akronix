import { AlertProvider } from './context/AlertContext'
import { AuthProvider } from './context/AuthContext'
import { FormProvider } from './context/FormContext'
import { AppLayout } from './layout/AppLayout'

function App() {
  return (
    <AuthProvider>
      <FormProvider>
        <AlertProvider>
          <AppLayout />
        </AlertProvider>
      </FormProvider>
    </AuthProvider>
  )
}

export default App
