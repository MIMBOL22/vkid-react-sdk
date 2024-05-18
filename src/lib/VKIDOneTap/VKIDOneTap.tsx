import "./VKIDOneTap.scss";
import {
  FC,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Languages } from "../types.ts";
import { generateIframeURL } from "../utils/generateIframeURL.ts";

type Props = {
  style?: "primary" | "secondary";
  lang?: Languages;
  height?: number;
  border_radius?: number;
  alternative_login?: boolean;
  theme?: "light" | "dark";
};

const VKIDOneTap: FC<PropsWithChildren<Props>> = ({
  height = 44,
  border_radius = 8,
  lang = Languages.RUS,
  style = "primary",
  alternative_login = false,
  theme = "light",
}) => {
  const [iframeUrl, setIframeUrl] = useState("");

  const buttonIframeRef = useRef<HTMLIFrameElement | null>(null);
  // const dialogIframeRef = useRef<HTMLIFrameElement | null>(null);

  useLayoutEffect(() => {
    const url = generateIframeURL(
      style,
      lang,
      height,
      border_radius,
      alternative_login,
      theme
    );
    if (url) setIframeUrl(url);
  }, [style, lang, height, border_radius, alternative_login, theme]);

  useEffect(() => {
    const messageCallback = (event: MessageEvent) => {
      const handler = event.data.handler;
      console.log(handler);
      switch (handler) {
        case "onetap: show agreements dialog":
          break;
      }
    };

    window.addEventListener("message", messageCallback, false);
    return () => {
      removeEventListener("message", messageCallback, false);
    };
  }, []);

  return (
    <div className="vk_id_onetap_button">
      <iframe
        width="100%"
        height="100%"
        src={iframeUrl}
        ref={buttonIframeRef}
      ></iframe>
    </div>
  );
};

export default VKIDOneTap;
