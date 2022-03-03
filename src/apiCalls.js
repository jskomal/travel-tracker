const fetchData = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

export { fetchData }
