import {useLayoutEffect} from "react";
import {Config, ConfigData} from "@vkid/sdk";


const useVKID = (config: Partial<ConfigData>) => {
    useLayoutEffect(() => {
        Config.set(config);
    }, [
        config.app,
        config.redirectUrl,
        config.state,
        config.mode,
        config.__debug
    ]);
}

export default useVKID;