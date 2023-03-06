import { Alert } from "./Alert";
import { variants } from "./variant";

function App(){
    return (
        <div className="">
            {variants.map((variant) =>(
                <Alert variant={variant} />
            ))}
        </div>
    )
}
export default App;
