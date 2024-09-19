import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProduct = () => {
    const axiosPublic = useAxiosPublic()
    const { data: products = [], isPending: loading } = useQuery({
        queryKey: 'products',
        queryFn: async () => {
            const res = await axiosPublic.get('/products')
            return res.data
        }
    })
    return [products, loading]
};

export default useAllProduct;