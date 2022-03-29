import Employee from '../interfaces/employee';

class Nurse implements Employee {
  constructor(private name: string, private email: string) {
    this.name = name;
    this.email = email;
  }

  getEmployeeDescription(): string {
    return `Nurse ${this.name} \nEmail: ${this.email}`;
  }
}
export default Nurse;
