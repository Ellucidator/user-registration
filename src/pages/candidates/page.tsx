import { Table } from "react-bootstrap"
import useRegistration from "../../hook/useRegistration"
import './style.css'
export default function Candidates() {
    const {candidatesData} = useRegistration()
    return (
        <div className="container">
            <h1>Candidatos</h1>
            <Table responsive="sm" className="container table">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Area de Estudo</th>
                    </tr>
                </thead>
                <tbody>
                {candidatesData.map(candidate => (
                    <tr key={candidate.id}>
                        <td>{candidate.id}</td>
                        <td>{candidate.name}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.fieldOfStudy}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}