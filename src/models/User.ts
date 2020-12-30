import { Entity } from "./Entity";
import { Links } from "./Links";

export class User extends Entity {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string,
    _links?: Links
  ) {
    super(_links);
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}
