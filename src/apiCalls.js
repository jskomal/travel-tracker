const fetchData = (path) => {
  return fetch(`http://localhost:3001/api/v1/${path}`)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export { fetchData }
