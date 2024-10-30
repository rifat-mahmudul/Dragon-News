import { useEffect, useState } from "react"

const AllCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="font-bold text-xl mb-4">All Category</h1>
            {categories.map(category => <button className="block bg-gray-200 py-2 px-5 w-full mb-5 rounded-lg text-center" key={category.id}>{category.name}</button>)}
        </div>
    )
}

export default AllCategory
