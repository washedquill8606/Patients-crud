import { useState, useEffect, useRef } from "react"
import AddPatient from "./AddPatient";
import { getpatient, addpatient } from './services/ApiService';

const PatientList = () => {
  
    const [patients, setPatients] = useState([])
    const [showAddPatientForm, setShowAddPatientForm] = useState(false)
    
    const mountRef = useRef(true);
    useEffect(() => {
        
        getpatient()
        .then(res => {
            if (mountRef.current){
                setPatients(res)
            }
        })
        return() => {mountRef.current = false
        } 
    }, [])

const handleAddSubmit = (e) => {
    addpatient(e.target)
    .then(res => {
        setPatients(res)
    } )
}
    return (
        <>
            <h3>Patient List</h3>
            <table border={"2px"} cellPadding={"18px"}>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Blood Type</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => {
                        return <tr>
                        <td>{patient.first_name}</td>
                        <td>{patient.last_name}</td>
                        <td>{patient.blood}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    })}
                    
                </tbody>
            </table>
            <button onClick={setShowAddPatientForm(true)}>Add new patient</button>
            {showAddPatientForm && <AddPatient handleAddSubmit={handleAddSubmit}/>}
        </>
  )
}

export default PatientList