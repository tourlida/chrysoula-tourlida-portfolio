import dynamic from "next/dynamic";

export const MapWithNoSSR = dynamic(() => import("./Map"), { ssr: false });
