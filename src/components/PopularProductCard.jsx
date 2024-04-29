import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div id="popularProducts" className="flex flex-col w-full max-sm:w-full flex-1">
            <img src={imgURL} alt="" className="w-[280px] h-[280px]" />
            <div className="mt-8 flex justify-start gap-2.5 items-center">
                <img src={star} alt="" width={24} height={24} />
                <p className="text-xl leading-normal">4.5</p>
            </div>
            <h3 className="font-palanquin mt-2 text-xl font-semibold leading-normal">{name}</h3>
            <p className="text-coral-red mt-2">{price}</p>
        </div>
    )
}

export default PopularProductCard