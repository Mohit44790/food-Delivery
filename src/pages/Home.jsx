import React from 'react';

const Home = () => {
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
       {/* Background Video */}
       <video
        src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

      {/* Overlay Content */}
      <div className="relative z-10 flex mt-32 flex-col items-center justify-center text-center h-full px-4">
        {/* <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt="Zomato logo"
          className="w-48 mb-4"
        /> */}
        <h1 className="font-extrabold mb-4 text-5xl text-white">MK Restaurants</h1>
        <h1 className="text-white text-5xl font-bold leading-snug">
          India’s #1 <br />
          food delivery app
        </h1>
        <p className="text-white font-semibold text-2xl mt-2">
          Experience fast & easy online ordering on the MK restaurants app
        </p>
        <div className='flex items-center justify-center gap-4 mt-6 w-48'>

             <img src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="app" />
             <img src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="store" />
        </div>
        <div className="mt-8  flex animate-bounce cursor-pointer items-center 2xl:my-8">
          <div className="text-sm text-white xl:text-base 2xl:text-lg">
            Scroll down
            <span className="ml-2 text-white">↓</span>
          </div>
        </div>
      </div>

      
    </div>
    <div className="overflow-hidden pb-14">
        <div className="relative mx-auto flex h-[28em] w-full max-w-[1880px] items-center justify-center rounded-t-3xl bg-white md:h-[40em] overflow-visible">
          <div className="absolute left-0 top-[32px] w-[70%] -translate-x-[70%]">
            <img
              loading="lazy"
              src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png"
              className="h-auto w-full"
              alt="background"
            />
          </div>

          <div className="absolute right-0 top-[-20%] w-[70%] translate-x-[65%]">
            <img
              loading="lazy"
              src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png"
              className="h-auto w-full"
              alt="background"
            />
          </div>

          <div className="absolute top-[142px] md:top-[240px] flex flex-col items-center gap-6 2xl:gap-8 justify-center">
            <div className="text-heading w-5/12 whitespace-pre-line text-center font-semibold text-red-600 md:w-5/12 lg:w-8/12">
              Better food for more people
            </div>
            <div className="text-subtitle w-5/12 text-center font-light text-gray-600 md:w-5/12">
              For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep
            </div>
          </div>

          <img
            src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png"
            alt="Food 1"
            className="absolute top-[40%] left-[8%] xl:left-[15%] w-[130px] md:w-[min(22%,240px)] rounded-lg"
          />

          <img
            src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png"
            alt="Food 2"
            className="absolute right-[10%] top-[15%] xl:top-8 xl:right-[15%] z-30 aspect-[420/370] w-[120px] md:w-[min(24%,240px)] rounded-lg"
          />

          <img
            src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png"
            alt="Food 3"
            className="absolute right-[12%] bottom-[10%] xl:bottom-10 xl:right-[10%] aspect-square w-[124px] md:w-[min(24%,240px)] rounded-lg"
          />

          <img
            src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png"
            alt=""
            className="absolute top-[10%] left-[30%] w-8 xl:w-12 aspect-[92/67] rotate-2"
          />

          <img
            src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png"
            alt=""
            className="absolute right-[12%] xl:right-[8%] xl:bottom-[55%] w-8 xl:w-12 aspect-[158/125] rotate-45"
          />

          <img
            src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png"
            alt=""
            className="absolute bottom-[10%] left-[20%] xl:bottom-[2%] xl:left-[10%] w-8 xl:w-12 aspect-[158/125] -rotate-2"
          />
        </div>

        {/* Stats Row */}
        <div className="z-50 mx-auto mt-10 flex w-fit max-w-screen-lg items-center justify-center gap-8 rounded-2xl border border-red-200 bg-white px-4 py-3 shadow-md lg:rounded-[32px] lg:px-7 lg:py-6 2xl:gap-12 2xl:mt-14">
          <div className="flex items-center">
            <div>
              <div className="text-2xl font-bold text-gray-700 lg:text-3xl 2xl:text-4xl">3,00,000+</div>
              <div className="text-gray-500 md:text-base lg:text-lg">restaurants</div>
            </div>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png"
              alt="menu icon"
              className="ml-4 max-h-10 lg:max-h-14 2xl:ml-8"
            />
          </div>

          <div className="h-9 lg:h-12 xl:h-16 w-1 border-l border-gray-200"></div>

          <div className="flex items-center">
            <div>
              <div className="text-2xl font-bold text-gray-700 lg:text-3xl 2xl:text-4xl">800+</div>
              <div className="text-gray-500 md:text-base lg:text-lg">cities</div>
            </div>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/e7533c4081d6140da37b9f430cb7b8051743006192.png"
              alt="cities icon"
              className="ml-4 max-h-10 lg:max-h-14 2xl:ml-8"
            />
          </div>

          <div className="h-9 lg:h-12 xl:h-16 w-1 border-l border-gray-200"></div>

          <div className="flex items-center">
            <div>
              <div className="text-2xl font-bold text-gray-700 lg:text-3xl 2xl:text-4xl">3 billion+</div>
              <div className="text-gray-500 md:text-base lg:text-lg">orders delivered</div>
            </div>
            <img
              src="https://b.zmtcdn.com/data/o2_assets/713443cc5944ce4284d7e49e75e2aacf1742466222.png"
              alt="orders icon"
              className="ml-4 max-h-10 lg:max-h-14 2xl:ml-8"
            />
          </div>
        </div>
      </div>
      <>
  {/* Hello world */}
  <div
    style={{ background: "linear-gradient(0deg, #FFFFFF 0%, #FFEDEF 100%)" }}
    className="relative pt-20 mt-7 xl:mt-16 xl:pt-28 2xl:pt-36 2xl:mt-24 flex w-full flex-col items-center  overflow-x-hidden overflow-y-visible  "
  >
    <div className="flex flex-col gap-6">
      <div className="flex size-full flex-col items-center justify-center">
        <div className="text-heading w-7/12 whitespace-pre-line text-center  font-semibold  text-zRed500 lg:w-9/12">
          What’s waiting for you <br />
          on the app?
        </div>
        <div className="text-subtitle mt-6 w-7/12 text-ellipsis text-center font-light text-comet  md:w-5/12">
          Our app is packed with features that enable you to experience food
          delivery like never before
        </div>
      </div>
    </div>
    <div className="h-fit w-full overflow-hidden">
      <div className="relative mx-auto  grid aspect-[3/1] w-full grid-cols-6  grid-rows-2 gap-4  md:max-w-screen-md xl:max-w-[1024px] xl:gap-6   ">
        <div className="relative col-span-2 col-start-1 row-span-2 grid  h-full grid-cols-2 grid-rows-2 gap-4 xl:gap-6 ">
          <div className="flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-right scale-75">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Healthy
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-left scale-75 -translate-y-6">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Veg Mode
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-right scale-75 pt-0 translate-x-6">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Plan
              <br />a Party
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-left scale-75 -translate-y-6 translate-x-6">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/867f86a10503998e437963bb37c451591742455764.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Gift Cards
              <br />
            </div>
          </div>
        </div>
        <div className="relative col-span-2 col-start-3 row-span-2 flex h-full overflow-hidden">
          <div className="h-full w-full flex flex-col items-center justify-end transition-transform duration-700 ease-out translate-y-0">
            <div className="absolute -bottom-5 left-0 h-full w-full">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/3f7e2757e62fd22592b879bd56b666011742294630.png"
                alt="mobile frame"
                className="mx-auto h-auto w-[92%]"
                loading="lazy"
              />
            </div>
            <div className="z-50 mb-6 xl:mb-8 aspect-[8/9] w-1/2 scale-90  ">
              <div className="flex w-full flex-col items-center justify-start rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white mx-auto aspect-[26/29] pt-4">
                <div className="w-full ">
                  <img
                    className="mx-auto h-auto w-full "
                    src="https://b.zmtcdn.com/data/o2_assets/85fa7a0c955ba0f8d894b6b68a27cdf81742978539.png"
                    loading="lazy"
                  />
                </div>
                <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
                  Quick
                  <br />
                  delivery
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 col-start-5 row-span-2  grid h-full  -translate-x-6 grid-cols-2 grid-rows-2 gap-4 xl:gap-6 ">
          <div className="flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-right scale-75 -translate-x-6">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/6e27c9acde6045c272a28e6eb275727e1742455789.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Gourmet
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-left scale-75 -translate-y-6 -translate-x-6">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/813952c961fd13588cb71867d84ea7dc1742455815.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Offers
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-right scale-75 pt-0">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/06d090307e02772693ac06123b53459b1742455939.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Food on
              <br />
              Train
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-left scale-75 -translate-y-6">
            <div className="w-full ">
              <img
                className="mx-auto h-auto w-full "
                src="https://b.zmtcdn.com/data/o2_assets/541a9b65443d5d378e1b2d18319663f41742455727.png"
                loading="lazy"
              />
            </div>
            <div className="px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end">
              Homely
              <br />
              meals
            </div>
          </div>
        </div>
        <div className="absolute -bottom-14  left-0 h-[112px] w-full bg-[linear-gradient(0deg,_rgba(255,_255,_255,_100)_0%,_rgba(255,_255,_255,_50)_70%,_rgba(255,_255,_255,_0)_100%)]  " />
      </div>
    </div>
  </div>
</>

          </>
  );
};

export default Home;
