import { useRef } from "react";

export function useDebounce(originalfn, delay) {
    const currentClock = useRef();
    function fn() {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalfn, delay);

    }
    return fn;
}