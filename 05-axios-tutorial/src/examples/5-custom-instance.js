import { useEffect } from 'react';
import customFetch from '../axios/custom';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const response = await customFetch.get("/react-store-products");
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
