import PropTypes from "prop-types"
import { CopyToClipboard } from "react-copy-to-clipboard";

function Card_H({label, img, isHover, setHover}){
    return(
        <div className="flex flex-col pt-5">
            <div className="flex flex-row gap-16 border-primary border-4 w-96 p-5 justify-center items-center rounded-2xl hover:text-black hover:border-white hover:bg-white transition-all ease-in-out duration-150 cursor-pointer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <CopyToClipboard text={label}>
                    <img src={img} alt="img" className="w-8 h-8"/>
                </CopyToClipboard>
                <CopyToClipboard text={label}>
                    <p>{label}</p>
                </CopyToClipboard>
            </div>
        </div>
    )
}

Card_H.propTypes = {
    label: PropTypes.string,
    img: PropTypes.string,
}

export default Card_H;