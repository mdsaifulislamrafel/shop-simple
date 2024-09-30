import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useOrders = () => {
    const axiosPublic = useAxiosPublic();
    const { data: orders = [], isPanging: loading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosPublic.get('/order')
            return res.data;
        }
    });
    return [orders, loading, refetch]
};

export default useOrders;