// Test contact API directly
import axios from 'axios';

const testData = {
  full_name: "test",
  email: "test@gmail.com",
  phone_number: "9999999999",
  industry: "real_estate",
  message: "Need buyers leads"
};

console.log('Testing contact API...');
console.log('Request data:', testData);

axios.post('http://127.0.0.1:8000/api/contact/', testData)
  .then(response => {
    console.log('✅ API Success:', response.status, response.data);
  })
  .catch(error => {
    console.error('❌ API Error:', error);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  });
