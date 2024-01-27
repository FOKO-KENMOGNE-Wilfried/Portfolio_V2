import PropTypes from "prop-types"
import { useState } from "react";

function Card({label, img}){

    const [isHover, setHover] = useState(false);

    return(
        <div className="bg-primary p-14 w-36 h-36 flex flex-col gap-4 justify-center items-center rounded-2xl hover:bg-white hover:text-black hover:p-11 transition-all ease-in-out duration-150"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={img} alt="img" className={`${isHover ? "h-20" : "h-10"}`}/>
            <p>{label}</p>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    img: PropTypes.string,
}

export default Card;