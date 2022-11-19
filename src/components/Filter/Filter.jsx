export const Filter = ({input}) => {
    return (
        <div>
                    <input 
                    onInput={input}
  type="text"
  name="filter"
  title="filter"
  required
            />
        </div>
    )
}