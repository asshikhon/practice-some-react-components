
import PriceOp from "../PriceOp/PriceOp";

const PriceOption = () => {
    // Define the array of price options
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to gym facilities",
                "Limited group classes",
                "No personal trainer sessions",
                "Access to cardio equipment",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "$49.99/month",
            "features": [
                "Access to gym facilities",
                "Unlimited group classes",
                "Limited personal trainer sessions",
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$79.99/month",
            "features": [
                "Access to gym facilities",
                "Unlimited group classes",
                "Regular personal trainer sessions",
                "Access to sauna and spa facilities",
                "Access to all equipment and facilities",
                "Towel service",
                "Exclusive member events"
            ]
        }
    ];

    return (
        <div className="m-12 ">
            <h2 className="text-5xl">Best price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 ">
               
                {priceOptions.map(option => <PriceOp option={option} key={option.id} />)}
            </div>
        </div>
    );
};

export default PriceOption;
