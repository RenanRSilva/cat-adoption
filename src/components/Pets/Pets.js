import "./Pets.css";

import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";
import axios from "axios";

const Pets = () => {
  const [cats, setCats] = useState([])
  const [filteredCats, setFilteredCats] = useState([])
  const [filters, setFilters] = useState({
    gender: "any"
  })

  const fetchCats = async () => {
    const response = await axios.get("http://localhost:4000/cats")
    setCats(response.data);
    setFilteredCats(response.data)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  useEffect(() => {
    let catsFiltered = [...cats];
    if (filters.gender !== "any") {
      catsFiltered = catsFiltered.filter(cat => cat.gender === filters.gender)
    }
    setFilteredCats(catsFiltered)
  }, [filters])

  console.log(cats)

  return (
    <div className="container">
      <div className="app-container">
        <Filter filters={filters} setFilter={setFilters} />
        <Cards cats={filteredCats} />
      </div>
    </div>
  )

}

export default Pets
