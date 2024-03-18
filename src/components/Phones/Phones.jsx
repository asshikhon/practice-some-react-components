import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Audio, BallTriangle } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
const [loading , setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    return {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    };
                });
                setPhones(phonesWithFakeData);
                setLoading(false)
            });
    }, []);

    return (
        <div>

{loading && <div>

    <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>


render(<BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />)
</div>
}

            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <ResponsiveContainer width={1200} height={400}>
                <BarChart data={phones}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
<Tooltip></Tooltip>
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;
