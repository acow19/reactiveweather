import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoAPIOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.region}, ${city.countryCode}`, 
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const handleOnFocus = () => {
    setSearch(null);
  };

  // Custom styles for the AsyncPaginate component
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: 0,
      borderColor: state.isFocused ? "#333" : "#333",
      boxShadow: state.isFocused ? "#333" : "none",
      "&:hover": {
        borderColor: state.isFocused ? "#333" : "#333",
      },
      backgroundColor: "#333",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#333",
    }),
    input: (provided) => ({
      ...provided,
      margin: 0,
      color: "#19f9d8",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#054D5F" : "#333",
      borderColor: "black",
      color: state.isFocused ? "#19f9d8" : "#19f9d8",
      "&:hover": {
        backgroundColor: "#054D5F",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#19f9d8',
      backgroundColor: '#333',
      borderRadius: '0',
      padding: '5px 8px',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#19f9d8",
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: "#19f9d8",
    }),
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={customStyles} // Add custom styles to the component
      onFocus={handleOnFocus} // Add onFocus event handler to clear search state when the search bar is clicked
    />
  );
};

export default Search;
