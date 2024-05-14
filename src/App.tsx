import {useVKID, useVKIDLogin, VKIDOneTap} from "./lib/index";
import "./index.scss"

export default () => {
    useVKID({
        app: import.meta.env.VITE_VK_ID_APP_ID,
        redirectUrl: import.meta.env.VITE_VK_REDIRECT_URI,
    });

    useVKIDLogin();

    return (
        <div className="app">
            <VKIDOneTap
            />
        </div> 
    )
}