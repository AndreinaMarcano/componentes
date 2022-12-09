  export class estudiante {
  firstName: string;
  lastName: string;
  createAt: Date;
  age: number;
  constructor(
    firstName: string,
    lastName: string,
    createAt: Date,
    age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.createAt = createAt;
    this.age = age;
  }
}
