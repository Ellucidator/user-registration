import { useContext } from "react";
import { RegistrationContext } from "../context/RegistrationContext";

export default function useRegistration() {

    return useContext(RegistrationContext)
}