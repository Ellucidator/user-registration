export interface Candidate {
    name: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    fieldOfStudy: string;
}

class CandidateEntity implements Candidate {
    name: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    fieldOfStudy: string;
    date: Date;
    id:number

    constructor(candidate: Candidate) {
        this.id = Math.floor(Math.random() * 10000); 
        this.name = candidate.name;
        this.email = candidate.email;
        this.phone = candidate.phone;
        this.age = candidate.age;
        this.gender = candidate.gender;
        this.fieldOfStudy = candidate.fieldOfStudy;
        this.date = new Date();
    }

}

export default CandidateEntity
