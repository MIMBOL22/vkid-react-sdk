import {AUTH_BASE_URL, AUTH_MAGIC_NUMBER, AUTH_VKID_API_VERSION} from "./constants.ts";
import {generateRandomString} from "./generateRandomString.ts";

type AuthURLParams = {
    uuid: string,
    app_id: string,
    redirect_uri: string,
    redirect_state: string,
}

export const buildAuthURL = (params: AuthURLParams) => {
    return AUTH_BASE_URL + "/auth?" + new URLSearchParams({
        ...params,
        uuid: generateRandomString(AUTH_MAGIC_NUMBER),
        v: AUTH_VKID_API_VERSION,
        sdk_type: "vkid"
    }).toString()
}