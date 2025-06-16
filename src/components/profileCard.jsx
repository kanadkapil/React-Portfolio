import React from 'react';
import TextPressure from '../components/TextPressure'


const ProfileCard = ({ data }) => {
    return (
        <div className="min-h-[860px] rounded-lg shadow-lg bg-opacity-80 backdrop-blur-xl sm:col-span-4 p-4 flex flex-col overflow-y-auto">

            {/* Profile Picture Toggle */}
            <div className="flex justify-center items-center my-4 transition-transform duration-300 hover:scale-105 ">
                <label className="swap swap-flip">
                    <input type="checkbox" />
                    <div className="swap-off avatar">
                        <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-full shadow-lg">
                            <img src={data.picA} alt={data.name} />
                        </div>
                    </div>
                    <div className="swap-on avatar">
                        <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96  rounded-full shadow-lg">
                            <img src={data.picB} alt={data.name} />
                        </div>
                    </div>
                </label>
            </div>

            {/* Identity Section */}
            <div className="mx-10 sm:mx-6 lg:mx-10 bg-opacity-20 mt-5 rounded-lg flex-grow">
                <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white">

                    {/* component name  */}
                    <div style={{ position: 'relative', height: '180px' }} className='sm:h-[200]'>

                        <TextPressure
                            text={data.name + " ...!"}
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={36}
                        />

                    </div>
                    {/* component name  ends*/}
                </h2>
                <p className="font-bold text-lg sm:text-xl lg:text-xl mb-4 text-white">{data.work}</p>
                <p className="text-lg sm:text-xl lg:text-2xl my-4 text-white">{data.profession}</p>
                <p className="font-bold text-lg sm:text-xl lg:text-2xl mt-4 text-white">
                    {data.company}, <br /> {data.designation}
                </p>
            </div>

            {/* Social Media Links */}
            <div className="mx-10 sm:mx-6 lg:mx-10 mt-5  p-5  text-center">
                <div className="flex justify-center space-x-4">
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github fa-shake text-3xl sm:text-4xl lg:text-5xl text-white"></i>
                    </a>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin fa-bounce text-3xl sm:text-4xl lg:text-5xl text-blue-800"></i>
                    </a>
                    <a href={data.gmail}>
                        <i className="fa-brands fa-google fa-beat-fade text-3xl sm:text-4xl lg:text-5xl text-lime-400"></i>
                    </a>
                    <a href={data.insta} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram fa-spin text-3xl sm:text-4xl lg:text-5xl text-pink-600"></i>
                    </a>
                    <a href={data.fb} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f text-3xl sm:text-4xl lg:text-5xl text-blue-800"></i>
                    </a>
                    <a href={data.youtube} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube fa-beat text-3xl sm:text-4xl lg:text-5xl text-red-600"></i>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;
