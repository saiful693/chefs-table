
import PropTypes from 'prop-types';

const Cooking = ({cooking,count}) => {
    const { recipe_name, preparing_time, calories } = cooking

    return (
        <tr className=' rounded-2xl bg-gray-200 '>
            <td className='w-28 pl-3'>{count}</td>
            <td className='w-32'>{recipe_name}</td>
            <td className='w-32 pl-3'>{preparing_time}</td>
            <td className='w-32 pl-3'>{calories}</td>
            
        </tr>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object,
    count:PropTypes.number
    
}
export default Cooking;


