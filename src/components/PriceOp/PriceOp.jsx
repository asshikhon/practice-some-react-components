import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';


const PriceOp = ({option}) => {
const {name, price, features} = option;

    return (
        <div className=' bg-blue-500 rounded-xl text-white p-5 flex flex-col'>
            <h2 className='mt-6text-center'>

<span className='text-7xl'>
{price}
</span>
<span className='text-3xl'>

</span>

            </h2>

            <h2 className="text-3xl pt-4 text-center">{name}</h2>

<div className='pl-4 flex-grow'>
{
    features.map((feature , idx) => <Feature features={feature} key={idx}></Feature>)
}

</div>

<button className='btn w-full bg-green-600 border-0 text-xl text-white rounded-xl font-bold'>Buy Now</button>
        </div>
    );
};

PriceOp.propTypes = {
    option: PropTypes.object,
}

export default PriceOp;