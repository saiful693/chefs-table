import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';
const Cooks = ({ cooks, handleCooking }) => {

    let count = 1;

    return (
        <div>

            {/* toast */}
            <div id="toast" className="transform bg-orange-700 text-white px-4 py-2 rounded-xl opacity-0 transition-opacity duration-300">
                Already exist
            </div>

            <h1 className="text-2xl font-semibold text-center mx-6 px-4 py-8 border-b-2">Want to cook: {cooks.length}</h1>

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

                        cooks.map((cook) => <Cook key={cook.recipe_id} cook={cook} count={count++} handleCooking={handleCooking}></Cook>)
                    }
                </tbody>

            </table>

        </div>
    );
};


Cooks.propTypes = {
    cooks: PropTypes.object,
    handleCooking:PropTypes.func
}
export default Cooks;

