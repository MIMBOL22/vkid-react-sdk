// type VKIDLoginCallback = ()=>void

const useVKIDLogin = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const payload = urlParams.get('payload');
    if(payload)
        console.log("payload", JSON.parse(payload));
}

export default useVKIDLogin;