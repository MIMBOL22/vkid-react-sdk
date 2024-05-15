import {VKIDAuthResponse} from "../types.ts";
import {useLayoutEffect} from "react";

type VKIDLoginCallback = (data: VKIDAuthResponse)=>void

const useVKIDLogin = (callback: VKIDLoginCallback, path: string = "") => {
    useLayoutEffect(() => {
        if(path !== "" && path !== window.location.pathname) return;

        const urlParams = new URLSearchParams(window.location.search);
        const unparsed_payload = urlParams.get('payload');
        if(!unparsed_payload) return;

        try {
            const payload = JSON.parse(unparsed_payload);
            callback(payload);
        }catch (e){
            console.error("Ошибка VK ID React SDK: Невалидный JSON в payload");
        }
    }, [path]);
}

export default useVKIDLogin;