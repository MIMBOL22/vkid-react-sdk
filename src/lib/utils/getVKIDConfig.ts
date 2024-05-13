import {ConfigData} from "../useVKID/useVKID.ts";

export const getVKIDConfig = () : ConfigData | null => {
    const unparsed_config = localStorage.getItem("VKIDConfig");
    if (!unparsed_config) return null;

    try {
        return JSON.parse(unparsed_config);
    }catch(err) {
        console.error("Ошибка VK ID React SDK: Ошибка парсинга конфига из LS");
        return null;
    }
}