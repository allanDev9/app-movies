import { useState } from "react"
import { PeliculasJSON } from "./componets/data/PeliculasData"
import { PeliculasContainer } from "./componets/page/peliculasContainer"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/AppRouter"

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}



