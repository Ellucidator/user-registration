import {ReactNode, createContext, useState } from "react"
import { Candidate } from "../entities/candidate"
import CandidateEntity from "../entities/candidate"
interface RegistrationContext {
    candidatesData: CandidateEntity[]
    addCandidate: (candidate: Candidate) => void
    removeCandidate: (id: number) => void
}
export const RegistrationContext = createContext({} as RegistrationContext)

export default function RegistrationContextProvider(props:{children:ReactNode}) {

    const [candidatesData, setCandidatesData] = useState(()=>{
        const candidates = localStorage.getItem('project-user-registration')
        if(candidates){
            return JSON.parse(candidates)
        }
        let data:CandidateEntity[]=[]
        return data
    })


const addCandidate = async(candidate: Candidate) => {
    setCandidatesData((state: CandidateEntity[])=>{
        const updated = [...state,candidate ]
        localStorage.setItem('project-user-registration', JSON.stringify(updated))
        return updated
    })
    }

const removeCandidate = (id:number) => {
    setCandidatesData((state: CandidateEntity[])=>{
        const candidates = state.filter(candidate=> candidate.id !== id)
        return candidates
        })
    }
    const data = {
        candidatesData,
        addCandidate,
        removeCandidate
    }

    return(
        <RegistrationContext.Provider value={data}>
            {props.children}
        </RegistrationContext.Provider>
    )
}