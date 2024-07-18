import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function ReferralModal({ isOpen, onClose }) {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      referrer: referrerName,
      referee: refereeName,
      email: referrerEmail,
      
    };
  
    console.log('Form data:', data); 
  
    try {
      const response = await fetch('http://localhost:3000/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      console.log('Response:', response); 
  
      if (response.ok) {
        const result = await response.json();
        console.log('Referral created successfully:', result);
        
      } else {
        const errorText = await response.text();
        console.error('Error creating referral:', errorText);
        
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  
    onClose();
  };
  
  const isValidEmail = (email) => {
    // Basic email format validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
            <h3 className="text-3xl font-semibold">Refer a Course</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black">&times;</span>
            </button>
          </div>
          
          <div className="relative p-6 flex-auto">
            
            <form onSubmit={handleSubmit}>
              
              <label className="block">
                Referrer's Name
                <input
                  type="text"
                  value={referrerName}
                  onChange={(e) => setReferrerName(e.target.value)}
                  className="block w-full mt-1 border-black rounded-md shadow-sm focus:border-black focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                  required
                />
              </label>
              
              <label className="block mt-4">
                Referrer's Email
                <input
                  type="email"
                  value={referrerEmail}
                  onChange={(e) => setReferrerEmail(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                  required
                />
              </label>
              
              <label className="block mt-4">
                Referee's Name
                <input
                  type="text"
                  value={refereeName}
                  onChange={(e) => setRefereeName(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full bg-primary-600 bg-blue-500 hover:bg-primary-700 text-black font-semibold py-3 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ReferralModal;
