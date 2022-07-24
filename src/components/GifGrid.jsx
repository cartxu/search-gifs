import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <div className="category">
            <h3>{category}</h3>
            {
                isLoading && (<p>Loading...</p>)
            }
            <div className="card-grid">
                {
                    images.map(( image ) => (
                        < GifCard 
                        key={image.id}
                        { ...image } />
                    ))
                }

            </div>

        </div>
    )
}
