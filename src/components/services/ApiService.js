import axios from "axios";

export async function getpatient() {
  return axios.get('http://localhost:8000/patient/').then(res => {
    return res.data
  })
}

export async function addpatient(patient) {
  const res = await axios.post('http://localhost:8000/patient/',
    {
      patient_id: null,
      first_name: patient.first_name.value,
      last_name: patient.last_name.value,
      blood: patient.blood.value,
    });
  return res.data;
}
