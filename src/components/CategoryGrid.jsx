import { AiOutlineClose } from 'react-icons/ai';

export const CategoryGrid = ({ category, onDeleteCategory }) => {
    return (
        <button className="cat-btn">
            {category} 
            <span 
                onClick={()=> onDeleteCategory(category)}
                className="cat-btn_close">
                < AiOutlineClose/>
            </span> 
        </button>
    )
}
