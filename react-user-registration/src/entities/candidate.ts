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

    constructor(candidate: Candidate) {
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
