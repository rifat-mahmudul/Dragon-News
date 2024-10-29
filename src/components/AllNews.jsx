import AllCategory from "./AllCategory"

const AllNews = () => {
    return (
        <div className="max-w-[90%] xl:max-w-[1150px] mx-auto grid lg:grid-cols-5 gap-8 mt-10 pb-16">
            <div className="border border-red-500 p-4">
                <AllCategory></AllCategory>
            </div>

            <div className="border border-red-500 py-4 lg:col-span-3">
                2
            </div>

            <div className="border border-red-500 py-4">
                3
            </div>
        </div>
    )
}

export default AllNews
