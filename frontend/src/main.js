import axios from 'axios';

document.getElementById('getCities').addEventListener('click', async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/cities');
    const cities = response.data;
    console.log(response);
    const citiesDiv = document.getElementById('cities');
    citiesDiv.innerHTML = '';
    for (const [key, value] of Object.entries(cities)) {
      const cityElement = document.createElement('div');
      cityElement.textContent = `${key}: ${value}`;
      citiesDiv.appendChild(cityElement);
      console.log(`${key}: ${value}`);
    }
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
});

document.getElementById('clear').addEventListener('click', () => {
  document.getElementById('cities').innerHTML = '';
});