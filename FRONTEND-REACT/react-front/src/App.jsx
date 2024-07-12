import { Contenedor } from "./Componentes/Contenedor"
import { Insertar } from "./Componentes/Insertar"
import {Movies} from "./Componentes/Movies"

const App = () => {
    return (
        <>
        <Insertar/>
        <Contenedor>
            <Movies></Movies>
        </Contenedor>
        </>
        
    )
}
export default App 