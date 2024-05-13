import {useEffect} from "react";

export type ConfigData = {
    appId: string,
    mode?: "redirect" | "new_tab"
    redirectUrl: string,
    state?: any
}

const useVKID = (config: ConfigData) => {
    useEffect(() => {
        localStorage.VKIDConfig = JSON.stringify(config)
    }, [
        config.appId,
        config.mode,
        config.redirectUrl,
        config.state
    ]);
}

export default useVKID;