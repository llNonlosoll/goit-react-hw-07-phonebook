// import hooks useDispatch, useSelector
import { useSelector, useDispatch } from 'react-redux';
// import action
import { setFilter } from 'redux/filterSlice';
// import selector
import { selectFilter } from 'redux/selectors';
// import styled components
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

// Filter component
export const Filter = () => {
  // getting a filter value from the state
  const filter = useSelector(selectFilter);

  // variables dispatch
  const dispatch = useDispatch();

  // function to add a filter value to the state
  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">
        Find contacts by name
        <FilterInput
          id="filter"
          type="text"
          name="filter"
          onChange={handleFilterChange}
          value={filter}
        />
      </FilterLabel>
    </FilterContainer>
  );
};
