import Image from 'next/image'
import React from 'react'

function About() {

    let ourValues = [
        {
            title: 'Make an Impact',
            icon: '/aboutus/diamond.png',
            description: "We’re building something big. Something that has the power to change the trajectory of any sized business for the better."
        },
        {
            title: 'Learn',
            icon: '/aboutus/trophy.png',
            description: "Lexend team are masters of their craft. Even though we’re all experts in our respective fields, we always make time to expand our minds."
        },
        {
            title: 'Have fun',
            icon: '/aboutus/ball.png',
            description: "We work hard and play harder. We believe in the importance of celebrating wins big or small, for the business or individuals."
        },
        {
            title: 'Emphaty',
            icon: '/aboutus/crown.png',

            description: "We strive to be empathetic to every customer and colleague and by doing so we can provide a better experience for all."
        },
    ]
    return (
        <div className="min-h-screen w-full  border space-y-4  ">

            <div className='text-center p-10'>
                <h1 className="text-[24px] md:text-[44px] font-bold">About Evotily</h1>

                <p className='text-[16px] md:text-[1.25rem]'>
                    The buzzing tech scenes in Ghana has a new addition, one that is literally changing the landscape of
                    elections and voting solutions. Evotily is built suitably for powering all kinds of events such as
                    Pageantries, Reality Shows, Award Events, Elections and Polls.
                </p>
            </div>

            <div className="flex p-5 md:p-10 flex-row justify-center items-center gap-4 w-full m-auto">
                <div className='max-w-[421px] max-h-[550px] rounded-lg overflow-hidden' >
                    <Image src={'/aboutus/about.jpeg'} alt="" width={421} height={607} priority />
                </div>
                <div className='max-w-[826px] max-h-[550px] rounded-lg overflow-hidden' >
                    <Image src={'/aboutus/about2.jpeg'} alt="" width={826} height={607} priority />
                </div>
            </div>

            <div className='text-center px-10 bg-[#ddc7fb]/20  py-20'>
                <div className='pb-10 space-y-8'>

                    <h1 className="text-[24px] md:text-[44px] font-bold">How Evotily</h1>

                    <p className='text-[16px] text-justify md:text-[1.25rem]'>
                        By Combining the power of USSD, mobile Apps (Android and iOS), and Web based systems, Evotily
                        uniquely offers a fast, secure, and reliable digital voting platform that empowers Fans, loved ones,
                        Viewers, Audience, and Patrons of events to vote for their preferred contestants and nominees.
                        Wherever users are in the world, votes can be cast with the variety of means available with ease and
                        comfort. Real time results button can be activated by organizers to enable nominees see vote cast in
                        real time.
                        <br />
                        Using an intuitive design, Voting is now made accessible to users of all levels, empowering them to
                        create, manage, and participate in voting events with ease. It’s no wonder that Evotily is fast becoming
                        the go-to solution
                    </p>
                </div>


                <div className='grid grid-cols-1 gap-4 md:grid-cols-3 justify-between md:w-10/12 m-auto items-center '>

                    <div className='justify-center flex-col'>
                        <h1 className='text-[40px] font-bold'>2013</h1>
                        <p>Evotily Founded.</p>
                    </div>

                    <div className='justify-center flex-col'>
                        <h1 className='text-[40px] font-bold'>50</h1>
                        <p>Hard Working Group.</p>
                    </div>
                    <div className='justify-center flex-col'>
                        <h1 className='text-[40px] font-bold'>20+</h1>
                        <p>Over 20 events powered</p>
                    </div>
                </div>
            </div>

            <div className='text-center px-5 md:px-10  py-10'>
                <div className='pb-10 space-y-10  w-full md:w-10/12 m-auto'>

                    <h1 className="text-[24px] md:text-[44px] font-bold">Our Values It's Simple</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {ourValues.map((value, index) => {
                            return (
                                <div key={index} className='text-start bg-[#ddc7fb]/20 space-y-4 p-5 rounded-2xl'>
                                    <div className='sapce-y-4'>
                                        <Image src={value.icon} alt="" width={80} height={80} priority />
                                        <h3 className='font-bold text-[24px] md:text-[30px]'>{value.title}</h3>
                                    </div>
                                    <p className='text-[16px] md:text-[1.25rem]'>
                                        {value.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default About