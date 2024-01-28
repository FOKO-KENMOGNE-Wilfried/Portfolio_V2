import PropTypes from "prop-types"

function Container({label, children, css}){
    return (
        <div className="flex flex-col justify-center items-center w-10/12 relative">
            <div className="flex border-primary border-8 flex-col items-center pt-16 w-9/12 relative rounded-2xl pb-10">
                <div className="border text-4xl w-72 bg-primary border-primary absolute -top-8 rounded-xl p-2 flex flex-row justify-center">
                    {label}
                </div>
                <div className={`Container ${ css }`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

Container.propTypes = {
    label: PropTypes.string,
    css: PropTypes.string,
}

export default Container;