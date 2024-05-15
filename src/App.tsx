import {useVKID, useVKIDLogin, VKIDAuthResponse, VKIDHandler, VKIDOneTap} from "./lib/index";
import "./index.scss"
import {useState} from "react";

export default () => {
    const [counter, setCounter] = useState(0);

    useVKID({
        app: import.meta.env.VITE_VK_ID_APP_ID,
        redirectUrl: import.meta.env.VITE_VK_REDIRECT_URI,
    });

    const onAuth = (data: VKIDAuthResponse) => {
        console.log("VKID2 Logged in", data);
    }

    useVKIDLogin((payload) =>{
        console.log("VKID1 Logged in", payload);
    });


    return (
        <VKIDHandler onAuth={onAuth}>
            <div className="app">
                <VKIDOneTap/>

                <button onClick={()=>{setCounter(prevState => prevState + 1)}}>
                    <p
                        style={{color: "black",fontSize:"24px"}}
                    >
                        Тест ререндера: {counter}
                    </p>
                </button>
            </div>
        </VKIDHandler>
    )
}