
const AddPatient = ({handleAddSubmit, handleCancelBtn}) => {
  return (
    <>
        <h3>Add Patient</h3>
        <form onSubmit={handleAddSubmit}>
            First Name <input type="text" name="first_name"/>
            Last Name <input type="text" name="last_name"/>
            Blood Type <input type="text" name="blood"/>
            <button type="submit">Add</button>
            <button onClick={handleCancelBtn}>Cancel</button>
        </form>
    </>
  )
}

export default AddPatient