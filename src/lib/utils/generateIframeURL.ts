import {getVKIDConfig} from "./getVKIDConfig.ts";
import {AUTH_MAGIC_NUMBER} from "./constants.ts";
import {buildIframeURL} from "./buildIframeURL.ts";
import {Languages} from "../types.ts";
import {generateRandomString} from "./generateRandomString.ts";

export const generateIframeURL = (
    style: "primary" | "secondary",
    lang: Languages,
    height: number,
    border_radius: number,
    alternative_login: boolean,
    theme: "light" | "dark"
) => {
    const vk_auth_config = getVKIDConfig();
    if (!vk_auth_config) return null;

    return buildIframeURL({
        style_height: height+"",
        style_border_radius: border_radius+"",
        show_alternative_login: alternative_login?"1":"0",
        button_skin: style,
        scheme: theme,
        lang_id: lang+"",
        origin: window.location.origin,
        uuid: generateRandomString(AUTH_MAGIC_NUMBER),
        app_id: vk_auth_config.appId,
        redirect_uri: vk_auth_config.redirectUrl,
        redirect_state: vk_auth_config.state
    })
}