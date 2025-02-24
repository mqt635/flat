import React, { CSSProperties } from "react";

export interface EmptyHistorySVGProps {
    isDark?: boolean;
}

const EmptyHistorySVG: React.FC<EmptyHistorySVGProps> = ({ isDark }) => {
    const bgColor = isDark ? "#e0ebff" : "#fff";
    const style = isDark ? ({ mixBlendMode: "soft-light" } as CSSProperties) : undefined;

    return (
        <svg
            fill="none"
            height="160"
            viewBox="0 0 240 240"
            width="160"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M46 195s57.422-30.374 32.73-55.013c-15.42-15.388-28.292-38.205-29.588-59.412C47.922 60.748 65.812 44.924 86.806 45c16.09.054 28.65 7.878 38.899 18.806 8.549 9.12 23.442 38.754 40.348 34.407 3.638-.938 6.238-3.813 9.121-6.078 13.23-10.401 19.179 7.169 19.331 16.533.175 10.73-2.204 21.558-4.781 31.968-1.533 6.176-13.445 54.364-17.746 54.364H46Z"
                fill="url(#empty-history-svg)"
                opacity=".25"
            />
            <path
                d="m111.979 93.177-81.656 1.265c-1.945.03-3.5-1.635-3.307-3.57.342-3.426 2.074-8.115 8.91-8.587 10.891-.751 76.053 10.892 76.053 10.892Z"
                fill="#3381FF"
            />
            <path
                d="m120.805 82-84.88.375s11.644-1.69 18.592 18.779c6.947 20.468 13.332 76.053 47.134 79.997 33.801 3.944 42.064-7.136 42.064-7.136h27.041s-16.15-8.262-22.723-38.871c-6.572-30.609-11.455-51.642-27.228-53.144Z"
                fill="#92B5F9"
            />
            <path
                d="M52.831 85.99c-.538-.644-.068-1.624.771-1.614l65.7.726s10.328 0 20.094 36.054c9.765 36.055 12.581 46.947 26.29 54.834l-49.064 5.059s-22.482 3.768-37.317-21.583c-14.278-24.398-14.12-58.71-26.474-73.475Z"
                fill={bgColor}
            />
            <path
                d="m132.431 162.048 78.639-1.408a2.856 2.856 0 0 1 2.906 2.885c-.042 5.217-2.187 15.814-18.432 18.475h-82.501s14.679-1.87 16.588-17.42a2.875 2.875 0 0 1 2.8-2.532Z"
                fill="#3381FF"
            />
            <path
                d="m179.194 123.845-22.412-22.146-4.438 4.491 22.412 22.146 4.438-4.491Z"
                fill="#4951EC"
            />
            <path
                d="m187.756 129.796-17.437-17.23a.247.247 0 0 0-.349.002l-6.6 6.679a.248.248 0 0 0 .002.35l17.437 17.229a.247.247 0 0 0 .349-.002l6.6-6.679a.247.247 0 0 0-.002-.349Z"
                fill="#7C9AF2"
            />
            <path
                d="M136.919 108.282c12.903 0 23.363-10.46 23.363-23.363 0-12.903-10.46-23.363-23.363-23.363-12.903 0-23.363 10.46-23.363 23.363 0 12.903 10.46 23.363 23.363 23.363Z"
                fill="#fff"
                fillOpacity=".9"
                style={style}
            />
            <path
                clipRule="evenodd"
                d="M164.837 84.918c0 15.419-12.5 27.919-27.919 27.919S109 100.337 109 84.918 121.499 57 136.918 57c15.419 0 27.919 12.5 27.919 27.918Zm-4.555 0c0 12.904-10.46 23.364-23.363 23.364-12.903 0-23.363-10.46-23.363-23.363 0-12.903 10.46-23.363 23.363-23.363 12.903 0 23.363 10.46 23.363 23.363Z"
                fill="#3381FF"
                fillRule="evenodd"
            />
            <defs>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="empty-history-svg"
                    x1="120.257"
                    x2="120.257"
                    y1="45"
                    y2="195"
                >
                    <stop stopColor="#69A0FF" />
                    <stop offset="1" stopColor="#D6E5FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default EmptyHistorySVG;
