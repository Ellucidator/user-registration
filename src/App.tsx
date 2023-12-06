import router from "./router"
import { RouterProvider } from "react-router-dom"
import RegistrationContextProvider from "./context/RegistrationContext"

function App() {

  return (
    <RegistrationContextProvider>
      <RouterProvider router={router} />
    </RegistrationContextProvider>
    
  )
}

export default App
