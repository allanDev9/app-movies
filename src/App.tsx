import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/AppRouter"

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}



