import React from 'react'

export const AwardSection = () => {
    return (
        <div className="mt-12">
            <h2 className="text-[30px] font-custom-semibold text-black leading-[1.2em] mb-8">Awards and Recognitions
            </h2>
            <div className="awards-recognitions-main">
                <ul className="list-unstyled">
                    <li className='mb-6'>
                        <a href="#" className="d-block w-100">
                            <div className="bg-background rounded-lg p-6 flex items-center justify-between transition-custom">

                                <div className="flex items-center gap-6 max-w-72 w-full">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-custom">
                                        <img className="h-6 w-6" src="/assets/img/icons/adobe.svg" alt="adobe" />
                                    </div>
                                    <div className="text">
                                        <h4 className="text-[18px] font-custom-semibold text-black leading-[1.2em]">Adobe Design Contest</h4>
                                        <p className="year">2022 - 2023</p>
                                    </div>
                                </div>
                                <div style={{
                                    width: "140px",
                                    flex: "0 0 auto"
                                }}>
                                    <h4 className="text-[18px] flex items-center gap-2 font-custom-semibold text-black leading-[1.2em]">
                                        <svg className="stroke-black w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Runner Up
                                    </h4>
                                </div>
                                <div className="project-btn">
                                    <span>
                                        View Project
                                        <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='mb-6'>
                        <a href="#" className="d-block w-100">
                            <div className="bg-background rounded-lg p-6 flex items-center justify-between transition-custom">
                                <div className="flex items-center gap-6 max-w-72 w-full">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-custom">
                                        <img className="h-6 w-6" src="/assets/img/icons/dribbble.svg" alt="dribbble" />
                                    </div>
                                    <div className="text">
                                        <h4 className="text-[18px] font-custom-semibold text-black leading-[1.2em]">Dribbble Design Contest</h4>
                                        <p className="year">2022 - 2023</p>
                                    </div>
                                </div>
                                <div style={{
                                    width: "140px",
                                    flex: "0 0 auto"
                                }}>
                                    <h4 className="text-[18px] flex items-center gap-2 font-custom-semibold text-black leading-[1.2em]">
                                        <svg className="stroke-black w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Gold Winner
                                    </h4>
                                </div>
                                <div className="project-btn">
                                    <span>
                                        View Project
                                        <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='mb-6'>
                        <a href="#" className="d-block w-100">
                            <div className="bg-background rounded-lg p-6 flex items-center justify-between transition-custom">
                                <div className="flex items-center gap-6 max-w-72 w-full">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-custom">
                                        <img className="h-6 w-6" src="/assets/img/icons/awwwards.png" alt="awwwards" />
                                    </div>
                                    <div className="text">
                                        <h4 className="text-[18px] font-custom-semibold text-black leading-[1.2em]">Awwwards Nominee</h4>
                                        <p className="year">2022 - 2023</p>
                                    </div>
                                </div>
                                <div style={{
                                    width: "140px",
                                    flex: "0 0 auto"
                                }}>
                                    <h4 className="text-[18px] flex items-center gap-2 font-custom-semibold text-black leading-[1.2em]">
                                        <svg className="stroke-black w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Runner Up
                                    </h4>
                                </div>
                                <div className="project-btn">
                                    <span>
                                        View Project
                                        <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="d-block w-100">
                            <div className="bg-background rounded-lg p-6 flex items-center justify-between transition-custom">
                                <div className="flex items-center gap-6 max-w-72 w-full">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-custom">
                                        <img className="h-6 w-6" src="/assets/img/icons/behance.svg" alt="behance" />
                                    </div>
                                    <div className="text">
                                        <h4 className="text-[18px] font-custom-semibold text-black leading-[1.2em]">Behance Design Contest</h4>
                                        <p className="year">2022 - 2023</p>
                                    </div>
                                </div>
                                <div style={{
                                    width: "140px",
                                    flex: "0 0 auto"
                                }}>
                                    <h4 className="text-[18px] flex items-center gap-2 font-custom-semibold text-black leading-[1.2em]">
                                        <svg className="stroke-black w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Gold Winner
                                    </h4>
                                </div>
                                <div className="project-btn">
                                    <span>
                                        View Project
                                        <svg className="arrow-up" width="14" height="15" viewBox="0 0 14 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.91634 4.5835L4.08301 10.4168" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M4.66699 4.5835H9.91699V9.8335" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
