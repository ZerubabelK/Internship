import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#2a5846] py-16">
      <div className="lg:max-w-screen-xl sm:max-w-screen-sm mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1 flex justify-between items-center">
            <div className="w-full flex flex-col lg:items-start items-center">
              <div>
                <h2 className="lg:text-5xl sm:text-left sm:text-3xl  text-center text-xl font-semibold text-white mb-4 lg:max-w-[15ch] max-w-[20ch] mx-auto">
                  The Easiest Way To Make Your Favorite Meals
                </h2>
                <p className="text-gray-300 lg:text-base text-sm mb-6 max-w-[40ch] lg:mx-0 mx-auto sm:text-left sm:max-w-[50ch] text-center">
                  Discover 1000+ recipes in your hand with the best recipe. Help
                  you find the easiest way to cook.
                </p>
                <div className="flex justify-center sm:block">
                  <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-full mx-auto text-center">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 hidden md:flex md:justify-center">
            <div className="lg:block hidden bg-white shadow h-fit p-2 rounded-md max-w-[250px] absolute top-10 right-28">
              <div className="flex space-x-3 items-center">
                <Image
                  src="/avatar.jpg"
                  className="aspect-square rounded-full"
                  alt="avatar"
                  width={40}
                  height={40}
                />
                <h2 className="font-bold text-lg">Anastasia</h2>
              </div>
              <div>
                <p>
                  <span className="text-[#E05D26] text-lg">
                    ★★★★<span>☆</span>
                  </span>
                  <span className="text-xs font-light mx-2">(12 votes)</span>
                </p>
              </div>
              <p className="font-light text-sm">
                A great recipe is at the heart of every memorable meal.
              </p>
            </div>
            <div className="relative">
              <div className="lg:block hidden bg-white shadow h-fit p-2 rounded-md max-w-[250px] absolute top-52 -left-36">
                <div className="flex space-x-3 items-center">
                  <Image
                    src="/avatar.jpg"
                    className="aspect-square rounded-full"
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                  <h2 className="font-bold text-lg">Michael</h2>
                </div>
                <div>
                  <p>
                    <span className="text-[#E05D26] text-lg">
                      ★★★★<span>☆</span>
                    </span>
                    <span className="text-xs font-light mx-2">(12 votes)</span>
                  </p>
                </div>
                <p className="font-light text-sm">
                  A great recipe is at the heart of every memorable meal.
                </p>
              </div>
              <div className="flex">
                <Image
                  width={200}
                  height={200}
                  className="h-48 w-48 aspect-square rounded-full shadow-md border-[#164030] border-2 border-spacing-10"
                  src="/recipe-hero.jpg"
                  alt="Delicious Recipes"
                />
                <Image
                  width={200}
                  height={200}
                  className="aspect-square rounded-full mt-28 -ml-20 border-[#164030] border-2 border-spacing-10 h-56 w-56 shadow-md"
                  src="/hero1.jpg"
                  alt="Delicious Recipes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
