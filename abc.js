fetch('http://backend_host:8000/api/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error('Error:', error));
