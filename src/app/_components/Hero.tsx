import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="section-gap">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="md:py-12">
                    <h1 className="text-4xl font-semibold">
                        Slice into happiness
                    </h1>
                    <p className="text-accent my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit et laborum libero, dolores quidem iste
                        voluptatibus iusto doloribus, voluptates, qui at
                        adipisci? Aliquam, corporis beatae tempore iure quam
                        dolores numquam.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href={`/${Routes.MENU}`}
                            className={`${buttonVariants({
                                size: "lg",
                            })} space-x-2 !px-4 !rounded-full uppercase`}
                        >
                            Order Now
                            <ArrowRightCircle className={`!w-5 !h-5 `} />
                        </Link>
                        <Link
                            href={`/${Routes.ABOUT}`}
                            className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
                        >
                            Learn More
                            <ArrowRightCircle className={`!w-5 !h-5 `} />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src={"/assets/images/pizza.png"}
                        alt="Pizza"
                        width={400}
                        height={400}
                        // fill
                        loading="eager"
                        priority
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
