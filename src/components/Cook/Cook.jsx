import PropTypes from 'prop-types';
const Cook = ({ cook }) => {
    const { recipe_name, preparing_time, calories } = cook

    return (
        <tr className=' rounded-2xl bg-gray-200 '>
            <td className='w-28 pl-3'>1</td>
            <td className='w-32'>{recipe_name}</td>
            <td className='w-32 pl-3'>{preparing_time}</td>
            <td className='w-32 pl-3'>{calories}</td>
            <td><button className='btn btn-primary bg-[#0BE58A] px-3 py-2  font-medium rounded-3xl'>Preparing</button></td>
        </tr>
    );
};
Cook.propTypes = {
    cook: PropTypes.object,
    
}
export default Cook;