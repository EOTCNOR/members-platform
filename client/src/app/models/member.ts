import { Address } from './address';
import { Contact } from './contact';
import { Relative } from './relative';

export class Member {
  id: number;
  name: string;
  fatherName: string;
  baptismName: string;
  address: Address;
  contact: Contact;
  family: Relative[];
}
