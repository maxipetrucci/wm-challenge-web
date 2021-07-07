import { useState } from "react"

export default function IconButton({ icon, activeColor, count }) {
    const INACTIVE_COLOR = '#535471';
    const buttonColor = activeColor || INACTIVE_COLOR;
    const [isHovered, setHovered] = useState(false);

    return (
        <div className="Tweet-button-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="Tweet-circle-button" style={{ backgroundColor: isHovered ? `${buttonColor}33` : 'white'}}>
                {icon({ color: isHovered ? buttonColor : INACTIVE_COLOR, count })}
            </div>
            {count > 0 && <span style={{ color: isHovered ? buttonColor : INACTIVE_COLOR, paddingLeft: 5, paddingRight: 5, fontSize: 13 }}>{count}</span>}
        </div>
    )
}