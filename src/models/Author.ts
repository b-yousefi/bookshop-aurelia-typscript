import moment from "moment";
import { DbFile } from "./DbFile";
import { Entity } from "./Entity";
import { Links } from "./Links";

export class Author extends Entity {
  fullName: string;
  birthday: Date;
  description: string;
  picture: DbFile;

  constructor(
    fullName: string,
    birthday: Date,
    description: string,
    picture: DbFile,
    _links: Links
  ) {
    super(_links);
    this.fullName = fullName;
    this.birthday = birthday;
    this.description = description;
    this.picture = picture;
  }

  get readableBirthdayDate(): string {
    return moment(this.birthday).format("MMMM Do YYYY");
  }
}
