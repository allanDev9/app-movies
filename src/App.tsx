import { useState } from "react"
import { PeliculasJSON } from "./componets/data/PeliculasData"
import { Peliculas } from "./componets/page/Peliculas"

export const App = (): JSX.Element => {
  const [peliculas] = useState(PeliculasJSON)

  return (
    <>
      <div className="bg-black h-auto">
        <Peliculas peliculas={peliculas} />
      </div>
    </>
  )
}



