import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useOrders from "../../hooks/useOrders";
import Loading from "../Loading/Loading";

const OrderList = () => {
    const [orders, loading, refetch] = useOrders();
    const axiosPublic = useAxiosPublic();

    if (loading) return <Loading />
    const handleOrderDelete = async (order) => {
        const res = await axiosPublic.delete(`/order/${order._id}`);
        if (res.data.deletedCount > 0) {
            toast.success('Order delivery or deleted successfully')
            refetch();
        } else {
            toast.error('Failed to delete order')
        }

    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {
                orders?.map(order => <div key={order._id} className=" space-y-4 rounded-lg bg-white p-6 shadow-2xl md:w-full">
                    <img width={400} height={400} className="h-[275px] w-full rounded-lg object-cover" src={order.image} alt="card navigate ui" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Product Name : {order.product}</h1>
                        <h1 className="text-lg font-semibold ">Customer Name : {order.name}</h1>
                        <h1 className="text-lg font-semibold ">Customer Number : {order.number}</h1>
                        <h1 className="text-lg ">Customer Address : {order.address}</h1>
                        <div className="text-lg font-semibold">Price : {order.price}</div>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => handleOrderDelete(order)} className="rounded-lg bg-red-600 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default OrderList;