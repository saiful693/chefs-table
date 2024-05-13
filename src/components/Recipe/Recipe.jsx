import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time,calories } = recipe;
    return (
        <div className="p-5 border-2 rounded-2xl">

            <img className="rounded-2xl h-52" src={recipe_image} alt="" />
            <h3 className="text-xl font-semibold mt-6">{recipe_name}</h3>
            <p className="my-4 border-b-2 text-[#878787]">{short_description}</p>
            <h4 className="text-lg font-medium">Ingredients:{ingredients.length}</h4>
            <ul className='pb-4 border-b-2 space-y-2'>
                {
                    ingredients.map((ingredient, idx) => <li className='ml-2 text-[#878787]' key={idx}>{ingredient}</li>)
                }
            </ul>
            <div className='flex gap-3 mt-4'>
                <div className='flex items-center gap-2'>
                    <CiClock2 />
                    <p>{preparing_time}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaFire />
                    <p>{calories}</p>
                </div>
            </div>
            <button className='mt-6 btn btn-primary bg-[#0BE58A] px-6 py-3 text-lg font-medium rounded-3xl'>Want to Cook</button>

        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object
}

export default Recipe;