export const Contacts = ({ contacts, filter,deleteContact }) => {

    return (
        <ul>
            {contacts.map(({name,number,id}) => {
                const nameOwer = name.toLowerCase();
                const numberOwer = number.toLowerCase();
                const filterOwer = filter.toLowerCase();
                return (nameOwer.includes(filterOwer) || numberOwer.includes(filterOwer)) && (<li key={id}>{name}: {number} <button data-id={id} type="button" onClick={deleteContact}>Delete</button></li>)
            })}
    </ul>
       
    )
}