import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/AppRouter"

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}



