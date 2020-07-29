import React, { useEffect } from "react"

export const Parallax = () => {
    
    const M = window.M

    useEffect(() => {
        var elems = document.querySelectorAll('.parallax')
        M.Parallax.init(elems, {})
    }, [])
    
    return (
        <div className="parallax-container">
            <div className="parallax"><img src="https://wallpaperplay.com/walls/full/8/8/3/244127.jpg"/></div>
        </div>
    )
}
