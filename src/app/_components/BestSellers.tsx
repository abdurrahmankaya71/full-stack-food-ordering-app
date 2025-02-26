import MainHeading from "@/components/main-heading";
import Image from "next/image";

const BestSellers = () => {
    const bestSellers = [
        {
            id: crypto.randomUUID(),
            name: "Pizza1",
            description: "Pizza1 description",
            basePrice: 10.99,
            image: "/assets/images/pizza.png",
        },
        {
            id: crypto.randomUUID(),
            name: "Burger",
            description: "Pizza1 description",
            basePrice: 10.99,
            image: "/assets/images/pizza.png",
        },
        {
            id: crypto.randomUUID(),
            name: "Lazania",
            description: "Pizza1 description",
            basePrice: 10.99,
            image: "/assets/images/pizza.png",
        },
    ];
    return (
        <section className="section-gap">
            <div className="container text-center">
                <MainHeading subTitle="CheckOut" title="Our Best Sellers" />
            </div>
            <ul className="container grid grid-cols-1 md:grid-cols-3 gap-10">
                {bestSellers.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className="flex flex-col items-center ">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={150}
                                    height={150}
                                />
                                <div className="flex justify-between w-full">
                                    <h4>{item.name}</h4>
                                    <strong>{item.basePrice}</strong>
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default BestSellers;
