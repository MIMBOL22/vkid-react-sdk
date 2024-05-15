import {FC, PropsWithChildren} from "react";
import {VKIDAuthResponse} from "../types.ts";
import {useVKIDLogin} from "../index.ts";

type VKIDHandlerProps = {
    onAuth: (data: VKIDAuthResponse) => void,
    path?: string
}

const VKIDHandler: FC<PropsWithChildren<VKIDHandlerProps>> = ({children, onAuth, path}) => {
    useVKIDLogin(onAuth, path);
    return (<>{children}</>);
}

export default VKIDHandler;