import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import banner from '../../assets/images/banner.jpg'
const Header = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-9">
            {/* header section */}
            <div className="flex flex-col md:flex-row gap-2 lg:gap-0 justify-between items-center">
                <h1 className="text-3xl font-bold">Recipe Calories</h1>
                <ul className="flex gap-8">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
                <div className="flex items-center gap-5">
                    <div className="bg-gray-200 py-2 pl-4 pr-8 rounded-3xl flex gap-2 items-center w-60">
                        <CiSearch />
                        <button className="">Search</button>
                    </div>
                    <div className="text-3xl bg-[#0BE58A] p-2 rounded-full">
                        <VscAccount />
                    </div>

                </div>
            </div>

            {/* banner section */}

            <div className="mt-9 p-2 lg:p-0">
                <div className="bg-cover md:h-[600px] rounded-2xl" style={{backgroundImage: `url(${banner})`}}>
                    
                    <div className="text-white h-full flex items-center justify-center px-28">
                        <div className="text-center">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5 text-lg">Looking for a quick dinner to make on a busy weeknight? Or <br /> maybe a pastry to brush up on your baking skills? </p>
                            <button className="btn bg-[#0BE58A] btn-primary text-xl font-semibold rounded-3xl text-black px-5 py-4">Explore Now</button>
                            <button className="md:ml-6 mt-2 md:mt-0 btn bg-transparent btn-primary text-xl font-semibold rounded-3xl px-5 py-2 md:py-4 border-2">Our Feedback</button>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;