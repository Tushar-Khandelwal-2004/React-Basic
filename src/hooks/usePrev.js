import { useEffect, useRef } from "react"

export function usePrev(state){
    const ref = useRef(0);
    useEffect(() => {
        ref.current = state;
    }, [state]);
    return ref.current;
}