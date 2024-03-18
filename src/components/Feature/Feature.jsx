import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";


const Feature = ({features}) => {
    return (
        <div>
            <p className='flex items-center'><AiFillCheckCircle className='text-teal-500 mr-3'></AiFillCheckCircle> {features}</p>
        </div>
    );
};


Feature.propTypes = {
    features: PropTypes.string
}
export default Feature;