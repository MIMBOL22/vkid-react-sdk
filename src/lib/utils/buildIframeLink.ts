import {AUTH_BASE_URL, AUTH_VKID_API_VERSION} from "./constants.ts";

type IframeLinkParams = {
    style_height: string,
    style_border_radius: string,
    show_alternative_login: string,
    button_skin: string,
    scheme: string,
    lang_id: string,
    uuid: string,
    app_id: string,
    redirect_uri: string,
    redirect_state: string,
    origin: string
}

export const buildIframeLink = (params: IframeLinkParams) => {
    return AUTH_BASE_URL + "/button_one_tap_auth?" + new URLSearchParams({
        ...params,
        v: AUTH_VKID_API_VERSION,
        origin: window.location.origin,
        sdk_type: "vkid"
    }).toString()
}