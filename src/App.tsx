import {useVKID, VKIDButton, VKIDOneTap} from "./lib/index";
import "./index.scss"

export default () => {
    useVKID({
        appId: import.meta.env.VITE_VK_ID_APP_ID,
        redirectUrl: import.meta.env.VITE_VK_REDIRECT_URI,
    });

    return (
        <div className="app">
            <VKIDButton
                round_level="medium"
                type="onetap"
            />
            <VKIDOneTap
                alternative_login={true}
                style="primary"
            />
        </div> 
    )
}