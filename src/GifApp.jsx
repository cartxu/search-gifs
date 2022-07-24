import { useState } from "react";
import { AddCategory, GifGrid, CategoryGrid } from "./components";

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    const onDeleteCategory = (category) => {
        const newArray = categories.filter(cat => cat !== category);
        setCategories(newArray);
    }

    return (
        <>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            <div className="category-grid">
                {
                    categories.map(category =>
                        <CategoryGrid
                            onDeleteCategory={onDeleteCategory}
                            key={category}
                            category={category}
                        />
                    )
                }
            </div>

           
                {
                    categories.map(category =>

                        <GifGrid
                            key={category}
                            category={category}
                        />
                        
                    )
                }
  



        </>
    )
}
