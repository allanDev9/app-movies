import { useState } from "react";
import { PeliculasJSON } from "../data/PeliculasData";
import { Peliculas } from "../page/Peliculas";

export const PeliculasContainer = (): JSX.Element => {
    const [peliculas] = useState(PeliculasJSON);

    return (
        <div className="bg-black h-auto">
            <Peliculas peliculas={peliculas} />
        </div>
    );
};
