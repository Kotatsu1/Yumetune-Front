import { useRef } from "react";

export const usePlayer = () => {
    const playerRef = useRef();
    return { playerRef };
}