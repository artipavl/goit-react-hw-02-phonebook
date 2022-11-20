export const Filter = ({change,value}) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input 
                value = {value}
                    onChange={change}
  type="text"
  name="filter"
  title="filter"
  required
            />
        </div>
    )
}