import {VKIDButton} from "./lib/index";
import "./index.scss"

export default () => {
    return (
        <div className="app">
            <VKIDButton 
                logo_position="left"
                round_level="medium"
                type="secondary"
            />
        </div> 
    )
}