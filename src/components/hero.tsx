const Hero = () => {
    return ( 
        <div className="mx-auto">
            <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
                <div className="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">

                    <div className="flex flex-col items-center">
                        <div className="z-40 w-full flex justify-center -mt-4 lg:-mt-12 mb-8">
                            <div className="relative w-fit max-w-xl flex justify-center">
                                <a className="announcement-link group/announcement relative flex flex-row items-center p-1 pr-3 text-sm w-auto gap-2 text-left rounded-full bg-opacity-20 border border-background-surface-300 hover:border-foreground-muted hover:border-opacity-30 shadow-md overflow-hidden focus-visible:outline-none focus-visible:ring-brand-600 focus-visible:ring-2 focus-visible:rounded-full" href="https://www.ycombinator.com/"></a>
                                    <div className="inline-flex items-center bg-opacity-10 bg-brand text-brand-600 border border-brand-500 px-3 rounded-full text-sm py-1 announcement-badge">
                                                Launch Week 13
                                    </div>
                                    <span className="text-foreground announcement-text">
                                        Claim a Ticket

                                    </span>
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-70 group-hover/announcement:opacity-100 transition-opacity overflow-hidden rounded-full from-background-surface-100 to-background-surface-300 backdrop-blur-md "></div>

                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Hero;
