import Link from "../link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";

const Header = () => {
    return <header className="py-4 md:py-6">
        <div className="container flex justify-between items-center">
            <Link href={Routes.ROOT} className="text-primary text-2xl font-bold">🍕 Pizza</Link>
            <Navbar />
        </div>
    </header>;
};

export default Header;