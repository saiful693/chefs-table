import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';

const Cookings = ({ cookings }) => {
    let count = 1;

    let totalTime=0;
    let calories=0;
    for(let cooking of cookings){
        const number1 = parseInt(cooking.preparing_time)
        const number2 = parseInt(cooking.calories)
        totalTime=totalTime+number1;
        calories=calories+number2
        
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mx-6 px-4 py-8 border-b-2">Currently cooking: {cookings.length}</h1>

            <table className='w-full'>
                <thead>
                    <tr className=''>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody className='w-full pr-2 pt-8'>
                    {

                        cookings.map((cooking) => <Cooking key={cooking.recipe_id} cooking={cooking} count={count++}></Cooking>)
                    }

                    <td className='w-28 pl-3 pt-3'></td>
                    <td className='w-32 pt-3'></td>
                    <td className='w-32 pl-3 pt-3'>Total Time = {totalTime} minutes</td>
                    <td className='w-32 pl-3 pt-3'>Total Calories = {calories} calories</td>

                </tbody>

            </table>



        </div>
    );
};

Cookings.propTypes = {
    cookings: PropTypes.object,

}

export default Cookings;