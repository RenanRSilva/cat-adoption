const Filter = ({ filters, setFilter }) => <div className="pet-filter-container">
  <div className="filter-container">
    <label htmlFor="favorite">favorite</label>
    <select name="favorite" id="favorite" className="form-select">
      <option value="any">any</option>
      <option value="favorite">favorite</option>
      <option value="not favorite">not favorite</option>
    </select>
    <label htmlFor="gender">gender</label>
    <select
      name="gender"
      id="gender"
      className="form-select"
      onChange={(e) => {
        setFilter({
          ...filters,
          gender: e.target.value,
        });
      }}>
      <option value="any">any</option>
      <option value="male">male</option>
      <option value="female">female</option>
    </select>
  </div>
</div>;

export default Filter
