"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const Hero = () => {
    return (
        <div className="flex flex-col gap-5 w-full h-full">
            <div
                className="bg-[url('https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/443860198_122112378944298974_6569295514969357526_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wJPbkesu2P8Q7kNvgHob9bi&_nc_ht=scontent.fktm21-1.fna&oh=00_AYAkwvGCgTRFbbTwtYwjS4RYGugbP-CvCYlLNh45gYEusA&oe=664CD17D')]
                  bg-center bg-fixed bg-cover h-[100vh]"
            >
                <div className="flex flex-col items-center justify-center bg-zinc-800/40 h-full">
                    <h2 className="text-2xl lg:text-7xl md:text-5xl sm:text-3xl font-semibold text-white text-center">
                        Sofa Point Nepal
                    </h2>
                    <Button className="text-xs py-0 px-5 rounded-full bg-[#131313]">
                        <Link href="/">Visit</Link>
                    </Button>
                </div>
            </div>
            <div className="bg-gradient-to-b from-blue-200 via-white to-sky-200 bg-center bg-cover h-[100vh] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover">
                    <Image
                        src="https://photos.fife.usercontent.google.com/pw/AP1GczM9sO9GM51P719iwAXhKQWMEDaOAiudRZ_lYrzTunQ--tQGYKy8dC3g=w1271-h953-s-no-gm?authuser=0"
                        width={150}
                        height={500}
                        alt="Sofa Image"
                    />
                    <h2 className="text-5xl font-semibold text-black">Cafe Sofa</h2>
                    <Button className="text-xs py-0 px-5 rounded-full bg-[#131313]">
                        <Link href="/">Visit</Link>
                    </Button>
                </div>
            </div>
            <h2 className="text-xl font- text-center">Popular Categories</h2>
            <div className="flex flex-row gap-4 items-center">
                <div
                    className="bg-[url('https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/441840703_122112379112298974_3654099443535829034_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=owaYJ3Kc1fEQ7kNvgGJc-dK&_nc_ht=scontent.fktm21-1.fna&oh=00_AYDXBfkYLe3Tn5h33ebOBGjdrBMEpeyFIhqE_j_jdPnx-A&oe=664CE770')]
                  bg-center bg-cover w-1/2 duration-200 h-[50vh] "
                >
                    <div className="opacity-0 hover:opacity-100 flex cursor-pointer duration-300 flex-col gap-4 items-center justify-center bg-zinc-800/40 h-full">
                        <h2 className="text-xl font-semibold text-white">Office Sofa</h2>
                        <Button className="text-xs py-0 px-5 rounded-full bg-[#131313]">
                            <Link href="/">Visit</Link>
                        </Button>
                    </div>
                </div>
                <div
                    className="bg-[url('https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/442508537_122112379154298974_5411538342063913813_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rw1jsKKwLfYQ7kNvgH2xPuU&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBfOEiWoQEZXlUcIQ3L97HmyM7qDb-KYm9H9Krkcw7rFQ&oe=664CD273')]
                  bg-center bg-cover w-1/2 duration-200 h-[50vh] "
                >
                    <div className="opacity-0 hover:opacity-100 flex cursor-pointer duration-300 flex-col gap-4 items-center justify-center bg-zinc-800/40 h-full">
                        <h2 className="text-xl font-semibold text-white">Living</h2>
                        <Button className="text-xs py-0 px-5 rounded-full bg-[#131313]">
                            <Link href="/">Visit</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <div
                    className="bg-[url('https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/444483889_122112379190298974_1486573892559876304_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EyFnTBEaf30Q7kNvgF5xphS&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBR7ox4M4DNV3PgxNuIfDPbfPBFAGJuRB2sns4rKow0OQ&oe=664CFFE6')]
                  bg-center bg-cover w-1/2 duration-200 h-[50vh] "
                >
                    <div className="opacity-0 hover:opacity-100 flex cursor-pointer duration-300 flex-col gap-4 items-center justify-center bg-zinc-800/40 h-full">
                        <h2 className="text-xl font-semibold text-white">Sofa Point Nepal</h2>
                        <Button className="text-xs py-0 px-5 rounded-full bg-[#131313]">
                            <Link href="/">Visit</Link>
                        </Button>
                    </div>
                </div>
                <div
                    className="bg-[url('https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/436358260_122112379028298974_4905060493974028911_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ThWsW8zRjvIQ7kNvgG1DVMp&_nc_ht=scontent.fktm21-1.fna&oh=00_AYDzz_Qp-srfhwjL0mGf53ProAZ2fRB9FdIw0WxMpFWntg&oe=664CDC96')]
                  bg-center bg-cover w-1/2 duration-200 h-[50vh] "
                >
                    <div className="opacity-0 hover:opacity-100 flex cursor-pointer duration-300 flex-col gap-4 items-center justify-center bg-zinc-800/40 h-full">
                        <h2 className="text-xl font-semibold text-white">Sofa Point Nepal</h2>
                        <Button className="text-xs py-0 px-5 rounded-full bg-[#131313]">
                            <Link href="/">Visit</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
