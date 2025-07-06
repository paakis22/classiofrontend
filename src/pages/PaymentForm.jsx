


// import React, { useState } from 'react';
// import axios from 'axios';


// const PaymentForm = () => {
//   const [form, setForm] = useState({
//     name: '',
//     amount: '',
//     subject: '',
//     currency: 'usd',
//   });

//   const [loading, setLoading] = useState(false);
//   const [clientSecret, setClientSecret] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMessage('');
//     setClientSecret('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/payments/create-payment-intent', {
//         name: form.name,
//         amount: Number(form.amount),
//         subject: form.subject,
//         currency: form.currency
//       });

//       setClientSecret(response.data.clientSecret);
//       setSuccessMessage('Payment Intent created successfully! ✅');
//     } catch (error) {
//       console.error('Payment error:', error);
//       alert('Failed to create payment intent');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#0d1b2a] text-white p-6 rounded-lg shadow-xl w-full max-w-md space-y-4 relative"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Pay with Credit Card</h2>

//         {/* Form Fields */}
//         {[
//           { label: 'Name', name: 'name', type: 'text' },
//           { label: 'Amount', name: 'amount', type: 'number' },
//           { label: 'Subject', name: 'subject', type: 'text' },
//         ].map(({ label, name, type }) => (
//           <div key={name}>
//             <label className="block mb-1 text-sm">{label} :</label>
//             <input
//               type={type}
//               name={name}
//               value={form[name]}
//               onChange={handleChange}
//               className="w-full px-3 py-2 text-black rounded bg-gray-200 focus:outline-none"
//               required
//             />
//           </div>
//         ))}

//         {/* Optional: fixed currency */}
//         <div>
//           <label className="block mb-1 text-sm">Currency :</label>
//           <select
//             name="currency"
//             value={form.currency}
//             onChange={handleChange}
//             className="w-full px-3 py-2 text-black rounded bg-gray-200"
//           >
//             <option value="usd">USD</option>
//             <option value="inr">INR</option>
//           </select>
//         </div>

//         {/* Image background */}
//         <img
//           src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
//           alt="Desk"
//           className="absolute opacity-10 top-0 left-0 w-full h-full object-cover rounded-lg"
//         />

//         {/* Submit button */}
//         <div className="text-center relative z-10 mt-4">
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//           >
//             {loading ? 'Processing...' : 'Create Payment Intent'}
//           </button>
//         </div>

//         {/* Success */}
//         {successMessage && (
//           <p className="text-green-400 text-center relative z-10 mt-3">{successMessage}</p>
//         )}
//         {clientSecret && (
//           <div className="bg-gray-800 text-sm p-2 mt-2 rounded break-words">
//             <strong>Client Secret:</strong><br />{clientSecret}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;




// import React, { useState } from 'react';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';



// const StripePaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [form, setForm] = useState({
//     name: '',
//     amount: '',
//     subject: '',
//     currency: 'usd',
//   });
  
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setLoading(true);

//     try {
//       const { data } = await axios.post('http://localhost:5000/api/payment/create-payment-intent', form);

//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: { name: form.name },
//         },
//       });

//       if (result.error) {
//         setMessage(result.error.message);
//       } else if (result.paymentIntent.status === 'succeeded') {
//         setMessage('✅ Payment successful!');

      
      
//            setTimeout(() => {
//           // 🔁 Role-based redirection
//           if (role === 'teacher') {
//             navigate('/create-profile');
//           } else {
//             navigate('/student-profile');
//           }
//         }, 1500);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage('Payment failed');
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
//       <h2 className="text-xl font-semibold text-center">Stripe Payment</h2>
//       {['name', 'amount', 'subject'].map((field) => (
//         <div key={field}>
//           <label className="block text-sm capitalize">{field}:</label>
//           <input
//             type={field === 'amount' ? 'number' : 'text'}
//             name={field}
//             value={form[field]}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//       ))}

//       <div>
//         <label className="block text-sm mb-1">Card Details:</label>
//         <div className="p-2 border rounded">
//           <CardElement />
//         </div>
//       </div>

//       {message && <p className="text-center text-red-500">{message}</p>}

//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         {loading ? 'Processing...' : 'Pay'}
//       </button>
//     </form>
//   );
// };

// export default StripePaymentForm;






import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const StripePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();

  // const queryParams = new URLSearchParams(location.search);
  // const role = queryParams.get('role'); // 'student' or 'teacher'

     // ...existing code...
  const queryParams = new URLSearchParams(location.search);
  let role = queryParams.get('role');
  if (!role) {
    role = localStorage.getItem('role');
  }
  console.log('Role after payment:', role); // Debug
// ...existing code...




  const [form, setForm] = useState({
    name: '',
    amount: '',
    subject: '',
    currency: 'usd',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const { data } = await axios.post('http://localhost:5000/api/payment/create-payment-intent', form);

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: form.name },
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setMessage('✅ Payment successful!');

        setTimeout(() => {
          if (role === 'student') {
            navigate('/student/dashboard'); 
          } else if (role === 'teacher') {
            navigate('/student/dashboard'); 
          } else {
            navigate('/'); // fallback
          }
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setMessage('Payment failed');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Stripe Payment</h2>
      {['name', 'amount', 'subject'].map((field) => (
        <div key={field}>
          <label className="block text-sm capitalize">{field}:</label>
          <input
            type={field === 'amount' ? 'number' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
      ))}

      <div>
        <label className="block text-sm mb-1">Card Details:</label>
        <div className="p-2 border rounded">
          <CardElement />
        </div>
      </div>

      {message && <p className="text-center text-red-500">{message}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-[#98809E] text-white py-2 rounded hover:bg-green-700"
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default StripePaymentForm;
