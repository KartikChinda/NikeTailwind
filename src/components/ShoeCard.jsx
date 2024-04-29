

const ShoeCard = ({ imgURL, changeBigShoe, bigShoeImg }) => {

    const handleClick = () => {
        if (imgURL.bigShoe !== bigShoeImg) {
            changeBigShoe(imgURL.bigShoe);
        }
    }

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
            <div>
                <img src={imgURL.thumbnail} className="bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl" />
            </div>
        </div>

    )
}

export default ShoeCard