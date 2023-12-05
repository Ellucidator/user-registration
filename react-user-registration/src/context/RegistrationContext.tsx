import {createContext, useState } from "react"
import { Candidate } from "../entities/candidate"
import CandidateEntity from "../entities/candidate"

export const RegistrationContext = createContext({})

export default function RegistrationContextProvider(props:{
    children: React.ReactNode
}) {
    const {children} = props

    const [candidatesData, setCandidatesData] = useState(()=>{
        const candidates = localStorage.getItem('project-user-registration')
        if(candidates){
            return JSON.parse(candidates)
        }
        return []
    })


const addCandidate = (candidate: Candidate) => {
    setCandidatesData((state: CandidateEntity[])=>{
        const stateCandidate = new CandidateEntity(candidate)
        return [...state, stateCandidate]
    })

    localStorage.setItem('project-user-registration', JSON.stringify(candidatesData))
}


    return(
        <RegistrationContext.Provider value={{candidatesData, addCandidate}}>
            {children}
        </RegistrationContext.Provider>
    )
}