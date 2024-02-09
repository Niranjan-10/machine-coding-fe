import React, { useEffect, useState } from "react"

function useHook() {
    const [value, setValue] = useState(true);

    useEffect(()=>{
        const active = () => {
            setValue(true)
        }
        const inActive = () => {
            setValue(false)
        }

        window.addEventListener('online', active);
        window.addEventListener('offline', inActive);

        return () => {
            window.removeEventListener('online', active)
            window.removeEventListener('online', inActive)
        }
    }, [])

    return value
}

export default useHook