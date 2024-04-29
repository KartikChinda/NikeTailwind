import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"


const Heroes = () => {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

    return (
        <section id="home" className="flex w-full xl:flex-row flex-col justify-center min-h-screen gap-10 ">
            <div className="relative flex flex-col justify-center items-start max-xl:padding-x pt-28 xl:w-2/5">
                <p className="text-xl text-coral-red">Enter the summer in style</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]">
                    <span className="relative z-10 pr-10 xl:whitespace-nowrap">New arrivals are here.</span>
                    <br />

                    <span className="text-coral-red inline-block mt-3">Nike</span> Footwear
                </h1>

                <p className="mt-5 text-slash-grey text-lg mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life. </p>
                <Button label="Shop now" icon={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="text-slate-gray">{stat.label}</p>
                        </div>
                    ))}

                </div>
            </div>

            <div className="relative flex-1 flex  flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={bigShoeImg} alt="" height={610} width={500} className="object-contain relative z-10" />
                <div className="flex flex-row gap-5 mt-10 justify-between items-center">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard imgURL={shoe} changeBigShoe={(shoe) => { setbigShoeImg(shoe) }} bigShoeImg={bigShoeImg} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Heroes