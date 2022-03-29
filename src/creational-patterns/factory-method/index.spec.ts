import { getEmployeeDescription } from '.';
import Doctor from './concretes/Doctor';
import Nurse from './concretes/Nurse';

describe('Factory Method', () => {
  it('Should create a Doctor', () => {
    const mockDoctor = new Doctor('John', 'john.doe@gmail.com', 345);

    const description = getEmployeeDescription(mockDoctor);

    expect(description).toContain('Doctor');
    expect(description).toContain('John');
    expect(description).toContain('john.doe');
    expect(description).toContain('345');
  });

  it('Should create a Nurse', () => {
    const mockNurse = new Nurse('Mary', 'mary.doe@gmail.com');

    const description = getEmployeeDescription(mockNurse);

    expect(description).toContain('Nurse');
    expect(description).toContain('Mary');
    expect(description).toContain('mary.doe');
  });
});
