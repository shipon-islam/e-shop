import HeroSvg from "../HeroSvg";

function Hero() {
  return (
    <section className="bg-white-gray container-div">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl capitalize font-semibold">
              be the best fastest in
            </h2>
            <h1 className="text-[2.5rem] capitalize font-semibold">
              delivery your <span className="text-yellow-400">food</span>
            </h1>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            itaque sunt odio provident nobis deleniti accusamus excepturi ab
            laudantium quae!
          </p>
          <button className="px-8 py-2 bg-yellow-300 capitalize rounded-3xl">
            get started
          </button>
        </div>
        <div className="hidden sm:block">
          <HeroSvg />
        </div>
      </div>
      <div className="mt-16 sm:mt-0">
      <svg
      
        xmlns="http://www.w3.org/2000/svg"
        width="179"
        height="74"
        fill="none"
        viewBox="0 0 179 74"
      >
        <g id="curveline" fill="#FFAC4B">
          <path
            id="curve2"
            d="M0 .114S22.062 17.43 36.936 18.966C59.16 21.261 70.905-.782 93.2.114c18.674.751 28.163 25.03 46.815 23.727 14.582-1.019 31.782-25.72 36.077-23.727 4.295 1.993 3.436 8.238 0 16.83-3.436 8.593-21.773 19.494-36.077 20.039-18.494.704-28.312-20.168-46.815-20.038-22.424.157-33.903 19.174-56.264 17.185C22.06 32.806 0 18.966 0 18.966V.114z"
          ></path>
          <path
            id="curve1"
            d="M0 37.114S22.062 54.43 36.936 55.966C59.16 58.261 70.905 36.218 93.2 37.114c18.674.751 28.163 25.03 46.815 23.727 14.582-1.019 31.782-25.72 36.077-23.727 4.295 1.993 3.436 8.238 0 16.83-3.436 8.593-21.773 19.494-36.077 20.039-18.494.704-28.312-20.168-46.815-20.038-22.424.157-33.903 19.174-56.264 17.185C22.06 69.807 0 55.966 0 55.966V37.114z"
          ></path>
        </g>
      </svg>
      </div>
    </section>
  );
}

export default Hero;
