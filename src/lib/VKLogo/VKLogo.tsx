import { SVGAttributes, FC, PropsWithChildren } from "react";

type Props = SVGAttributes<SVGAElement> & {
    color?: string;
};

const VKLogo: FC<PropsWithChildren<Props>> = ({
    color = "white"
}) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C2.38419e-07 41.2517 0 35.8212 0 24.96V23.04C0 12.1788 2.38419e-07 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0ZM8 14.7C8.25697 27.186 14.8154 34.7 25.6252 34.7H26.2523V27.5568C30.1892 27.9564 33.1252 30.8998 34.3237 34.7H40C38.4601 29.015 34.4676 25.8719 31.9861 24.6711C34.4656 23.186 37.975 19.5856 38.8015 14.7H33.6372C32.5537 18.6731 29.3301 22.2734 26.2504 22.6154V14.7H21.0037V28.5578C17.8107 27.7585 13.6456 23.8719 13.4749 14.7H8Z" fill={color}/>
        </svg>
    )
}

export default VKLogo;