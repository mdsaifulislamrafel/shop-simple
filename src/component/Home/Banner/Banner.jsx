import clockImg from '../../../assets/image/clock.png'
const Banner = () => {
    return (

        <section style={{
            position: 'relative',
            backgroundImage: `url('https://images.pexels.com/photos/2909099/pexels-photo-2909099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }} className="relative body-font font-bold">

            {/* Overlay Section */}
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

            {/* Content Section */}
            <div className="container relative z-10 mx-auto flex px-5 text-yellow-50 py-24 md:flex-row flex-col  items-center">
                {/* Text Section */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                        Before they sold out
                        <br className="hidden lg:inline-block" />readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                </div>

                {/* Image Section */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={clockImg}
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
