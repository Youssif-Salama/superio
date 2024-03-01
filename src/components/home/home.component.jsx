import PaddingComponent from "../padding.component";

export default function HomeComponent() {
    return (
        <div className={`home_component text-slate-200 px-4 py-2 max-sm:py-0 bg-bg-slider4 bg-no-repeat bg-contain lg:h-screen lg:bg-contain md:h-full md:bg-cover max-sm:bg-cover max-sm:bg-bottom`}>
            <PaddingComponent /> {/*this component just for give padding y py-10 */}
            <div className="">
                <div className=" flex items-center justify-center flex-col lg:pt-40 md:pt-10 max-sm:pt-20">
                    <h1 className="title lg:text-6xl md:text-3xl max-sm:text-sm">The Easiest Way to Get Your New Job</h1>

                    <form className="my-8 w-full bg-slate-200 px-2 max-sm:py-1 rounded-full flex items-center justify-between">
                        <label htmlFor="keyword" className="w-full">
                            <i className="fa-solid fa-magnifying-glass text-blue-custom-2 p-4"></i>
                            <input type="text" name="keyword" id="keyword" placeholder="key word" className="py-4 px-8 max-sm:p-1 max-sm:w-3/4 text-blue-custom-2 outline-none border-0 bg-inherit" />
                        </label>
                        <button className="border-blue-custom-2 border-2 text-blue-custom-2 hover:bg-yellow-custom rounded-full px-8 py-2">
                            Search
                        </button>
                    </form>

                    <div className="popular_searches max-sm:text-xs max-sm:mb-10">
                        Popular Searches : Designer Developer Web IOS PHP Senior Engineer
                    </div>
                </div>
            </div>
        </div >
    );
}
