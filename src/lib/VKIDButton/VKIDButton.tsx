import VKLogo from "../VKLogo/VKLogo";
import {PropsWithChildren, FC, ButtonHTMLAttributes} from "react";
import "./VKIDButton.scss"
import {generateAuthURL} from "../utils/generateAuthURL.ts";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>,"type"> & {
    size?: "small" | "medium" | "large" | "icon";
    logo_position?: "center" | "left",
    round_level?: "none" | "medium" | "max";
    style?: "primary" | "secondary";
    type?: "default" | "onetap";
};


const VKIDButton: FC<PropsWithChildren<Props>> = ({
    size = "left",
    logo_position = "default",
    round_level = "medium",
    style = "primary",
  }) => {
    let class_name = "vk_id_button";
    class_name += " vk_size_" + size;
    class_name += " vk_position_" + logo_position;
    class_name += " vk_round_" + round_level;
    class_name += " vk_style_" + style;

    const logo_color = style == "secondary" ? "#0077FF" : undefined;


    const onClick = () => {
        const vk_url = generateAuthURL();
        if(vk_url) window.location.href = vk_url;
    }


    return (
        <button className={class_name} onClick={onClick}>
            <div className="vk_id_button_inner">
                <VKLogo color={logo_color}/>
                <p className="vk_id_text">
                    Войти с VK ID
                </p>
            </div>
        </button>
    )
}

export default VKIDButton;