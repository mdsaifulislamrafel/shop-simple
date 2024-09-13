

const Checkout = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-xl font-bold bg-green-700 text-white p-4 rounded-md mb-6">
        অর্ডার করতে ফর্মটি পূরণ করুন।
      </h1>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8">
        {/* Left Column: Order Form */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন</h2>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">আপনার নাম লিখুন *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="আপনার নাম লিখুন"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">আপনার মোবাইল লিখুন *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="আপনার মোবাইল লিখুন"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">আপনার ঠিকানা লিখুন *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="আপনার ঠিকানা লিখুন"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">দেশ *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                value="Bangladesh"
                readOnly
              />
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">আপনার অর্ডারের বিবরণ</h2>

          {/* Product Summary */}
          <div className="flex items-center justify-between mb-4 border-b pb-4">
            <div className="flex items-center">
              <input type="checkbox" checked className="mr-2" />
              <img
                src="https://i.ibb.co/album/your-product.jpg"
                alt="Baby Speed Cornering Track"
                className="w-12 h-12 object-cover mr-2"
              />
              <span className="text-md font-medium">Baby Speed Cornering Track × 1</span>
            </div>
            <span className="text-md font-medium">750.00৳</span>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>750.00৳</span>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>820.00৳</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2">Payment Method</h3>
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input type="radio" name="payment" className="mr-2" />
                Cash on delivery
              </label>
            </div>
          </div>

          {/* Order Button */}
          <div className="mt-6">
            <button className="w-full bg-pink-500 text-white text-md font-bold py-3 rounded-md">
              অর্ডার কনফার্ম করুন 820.00৳
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
