import Image from "next/image";

const Hero = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    .
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src={"/assets/images/pizza.png"}
                        alt="Pizza"
                        width={300}
                        height={300}
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
