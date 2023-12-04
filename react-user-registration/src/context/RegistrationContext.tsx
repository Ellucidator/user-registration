import {createContext, useState } from "react"
import { Candidate } from "../entities/candidate"
import CandidateEntity from "../entities/candidate"

export const RegistrationContext = createContext({})

export default function RegistrationContextProvider(props:{
    children: React.ReactNode
}) {
    const {children} = props

    const [candidatesData, setCandidatesData] = useState([{}])


const addCandidate = (cadidate: Candidate) => {
    setCandidatesData(state=>{
        const stateCandidate = new CandidateEntity(cadidate)
        return [...state, stateCandidate]
    })
}


    return(
        <RegistrationContext.Provider value={{candidatesData, addCandidate}}>
            {children}
        </RegistrationContext.Provider>
    )
}