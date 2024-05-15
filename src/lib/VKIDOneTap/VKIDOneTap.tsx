import "./VKIDOneTap.scss";
import {FC, PropsWithoutRef, useEffect, useRef} from "react";
import {OAuthName, OneTap} from "@vkid/sdk";
import {OneTapSkin} from "@vkid/sdk/dist-sdk/types/widgets/oneTap/types";


type VKIDOneTapProps = {
    showAlternativeLogin?: boolean | 0 | 1;
    width?: number;
    height?: 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 | 52 | 54 | 56;
    borderRadius?: number;
    skin?: "primary" | "secondary";
    oauthList?: OAuthName[];
}

const VKIDOneTap: FC<PropsWithoutRef<VKIDOneTapProps>> = (params) => {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (container.current) {
            container.current.innerHTML = "";
            const oneTap = new OneTap();
            oneTap.render({
                container: container.current,
                showAlternativeLogin: params.showAlternativeLogin,
                skin: params.skin as OneTapSkin,
                styles:{
                    width: params.width,
                    height: params.height,
                    borderRadius: params.borderRadius
                },
                oauthList: params.oauthList
            });

        }
    }, []);


    return (
        <div className="vk_id_onetap_container" ref={container}></div>
    )
}

export default VKIDOneTap;