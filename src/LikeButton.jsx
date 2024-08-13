import { useState } from "react";

export default function LikeButton() {
// use state hum Component ke bahar use nahi kar sakte or hum multiply state ko use kar sakte hia 
    const [isLiked, setIsLiked] = useState(false)
    let toggleLike = () => {

        setIsLiked(!isLiked);
    }

    let styles = {
        color: "red"
    }


    return (
        <div>

            <p onClick={toggleLike}>
                {
                    isLiked ? <i style={styles} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>

        </div>
    )
}