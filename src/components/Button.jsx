

const Button = ({ label, icon }) => {
    return (
        <button className="flex flex-row mt-5 justify-center items-center gap-2 px-7 py-4 text-lg bg-coral-red text-white rounded-full">
            {label}
            <img src={icon} alt="" className="w-8 h-8 ml-2 rounded-full" />
        </button>
    )
}

export default Button