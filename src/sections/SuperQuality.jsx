
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex flex-row justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-col">
                <h2 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] lg:max-w-lg">
                    <span className="relative z-10 pr-10 xl:whitespace-nowrap">We provide you </span>
                    <br />

                    <span className="text-coral-red inline-block mt-3">super quality</span> shoes.
                </h2>

                <p className="mt-5 text-slash-grey lg:max-w-lg"> Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance. <br />
                    Our dedication to detail and... are you still reading this? Do you really think I put thought in writing what goes here?</p>
                <div className="mt-10 ">
                    <Button label="View details" icon={arrowRight} />
                </div>

            </div>
            <div className="flex justify-center items-center">
                <img src={shoe8} alt="shoePicture" width={570} height={522} className="object-contain" />
                {/* object contain is added when you want the image to be fully visible and take the maximum size possible, object-cover will take the max size possible, but you wont know if the image will fit or will be cut.  */}

            </div>
        </section>
    )
}

export default SuperQuality