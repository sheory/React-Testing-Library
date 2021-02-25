import React from 'react';

function Search() {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return <input type='text' onChange={handleChange} title='dummySearch' />
}

export default Search;