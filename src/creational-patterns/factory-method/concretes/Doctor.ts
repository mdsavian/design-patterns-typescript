import Employee from '../interfaces/employee';

class Doctor implements Employee {
  constructor(
    private name: string,
    private email: string,
    private doctorRegister: number,
  ) {
    this.name = name;
    this.email = email;
    this.doctorRegister = doctorRegister;
  }

  getEmployeeDescription(): string {
    return `Doctor ${this.name} \nEmail: ${this.email} \nRegister: ${this.doctorRegister}`;
  }
}
export default Doctor;
