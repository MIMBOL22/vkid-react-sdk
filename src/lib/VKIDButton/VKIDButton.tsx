import VKLogo from "../VKLogo/VKLogo";
import { ButtonHTMLAttributes, PropsWithChildren, FC } from "react";
import "./VKIDButton.scss"

type Props = {
    size?: "small" | "medium" | "large" | "icon";
    logo_position?: "center" | "left",
    round_level?: "none" | "medium" | "max";
    type?: "primary" | "secondary";
};


const VKIDButton: FC<PropsWithChildren<Props>> = ({
    size = "left",
    logo_position = "default",
    round_level = "medium",
    type = "primary"
  }) => {
    let class_name = "vk_id_button";
    class_name += " vk_size_" + size;
    class_name += " vk_position_" + logo_position;
    class_name += " vk_round_" + round_level;
    class_name += " vk_type_" + type;

    const logo_color = type == "secondary" ? "#0077FF" : undefined;

    return (
        <button className={class_name}>
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