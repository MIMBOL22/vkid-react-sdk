/*
    С типами всё очень сложно:
    После авторизации payload может прийти двух типов,
    При чём сложно предугадать точно, когда какой
    Даже то, что написано в доке VK ID Web SDK (на GH Pages)
    Не совсем соответствует действительности (ttl не приходит,
    а вот uuid приходит), что странно
*/

export type VKIDAuthResponse = {
    token: string;
    type: string;
    uuid: string;
    auth?: number,
    hash?: string,
    loadExternalUsers?: boolean,
    user?: {
        avatar: string,
        avatar_base: string | null,
        first_name: string,
        id: number,
        last_name?: string,
        phone: number
    },
    ttl?: number
}