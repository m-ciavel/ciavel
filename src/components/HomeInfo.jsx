import { Link } from 'react-router-dom'
import arrow  from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box flex justify-center items-center px-4 py-8'>
        <div className="relative flex justify-center items-center px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6 w-full sm:max-w-md md:max-w-3xl text-center  cursor-pointer">
                <p className='font-medium sm:text-xl text-center sm:leading-snug text-gray-900'>{text}</p>
            </div>
            {btnText && (
                <Link
                to={link}
                className="absolute bottom-0 right-0 mr-6 h-12 px-5 flex items-center gap-2 bg-[#0077b6] hover:bg-[#266ca9] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#0f2573] rounded-full text-white text-sm z-10"
                >
                {btnText}
                <img src={arrow} alt="arrow icon" className="w-4 h-4 object-contain invert" />
                </Link>
            )}
        </div>
    </div>
)

const renderContent = {
    1: (
        <div className="flex justify-center items-center px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6 w-full sm:max-w-md md:max-w-3xl text-center  cursor-pointer">
                <h1 className="font-medium sm:text-xl text-center sm:leading-snug text-gray-900">
                    Hi, I am <span className="font-semibold text-yellow-600">Ciavel</span>, a BS Computer Science student currently in my 3rd Year at Batangas State University TNEU - Alangilan.
                </h1>
            </div>
        </div>
    ), 
    2: (

        <InfoBox 
            text = "I specialize in front-end web development with a strong interest in creating responsive, and user-friendly interfaces."
            link = "/about"
            btnText="Get to know me"
        />
    ), 
    3: (
        <InfoBox 
            text = "This portfolio showcases my academic projects and growing skill set in the field of web development."
            link = "/projects"
            btnText= "Check my projects"
        />

    ), 
    4: (
        <InfoBox 
            text = "💡 Take a look around and feel free to get in touch if you'd like to collaborate or learn more about my work!"
            link = "/contact"
            btnText="Get in touch"
        />
    ), 
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo