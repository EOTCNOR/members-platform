import { Member } from '../models/member';

export const MEMBERS: Member[] = [
  {
    id: 1,
    name: 'Member1Name',
    fatherName: 'Member1FatherName',
    baptismName: 'Member1BaptismName',
    address: {
      street: 'Member1Street',
      postCode: 'Member1PostCode',
      city: 'Member1City'
    },
    contact: {
      mobilePhone: 'Member1MobilePhone',
      phone: 'Member1HomePhone',
      email: 'Member1Email'
    },
    family: [
      {
        name: 'Member1FamilyName1',
        fatherName: 'Member1FamilyFatherName1',
        baptismName: 'Member1FamilyBaptismName1',
        relationship: 'Member1Family1',
        memberChurch: 'Member1Famil1Church'
      },
      {
        name: 'Member1FamilyName2',
        fatherName: 'Member1FamilyFatherName2',
        baptismName: 'Member1FamilyBaptismName2',
        relationship: 'Member1Family2',
        memberChurch: 'Member1Family1Church'
      },
      {
        name: 'Member1FamilyName3',
        fatherName: 'Member1FamilyFatherName3',
        baptismName: 'Member1FamilyBaptismName3',
        relationship: 'Member1Family3',
        memberChurch: 'Member1Famil1Church'
      }
    ]
  },
  {
    id: 2,
    name: 'Member2Name',
    fatherName: 'Member2FatherName',
    baptismName: 'Member2BaptismName',
    address: {
      street: 'Member2Street',
      postCode: 'Member2PostCode',
      city: 'Member2City'
    },
    contact: {
      mobilePhone: 'Member2MobilePhone',
      phone: 'Member2HomePhone',
      email: 'Member2Email'
    },
    family: [
      {
        name: 'Member2FamilyName1',
        fatherName: 'Member2FamilyFatherName1',
        baptismName: 'Member2FamilyBaptismName1',
        relationship: 'Member2Family1',
        memberChurch: 'Member2Famil1Church'
      },
      {
        name: 'Member2FamilyName2',
        fatherName: 'Member2FamilyFatherName2',
        baptismName: 'Member2FamilyBaptismName2',
        relationship: 'Member2Family2',
        memberChurch: 'Member2Family1Church'
      },
      {
        name: 'Member2FamilyName3',
        fatherName: 'Member2FamilyFatherName3',
        baptismName: 'Member2FamilyBaptismName3',
        relationship: 'Member2Family3',
        memberChurch: 'Member2Famil1Church'
      }
    ]
  },
  {
    id: 3,
    name: 'Member3Name',
    fatherName: 'Member3FatherName',
    baptismName: 'Member3BaptismName',
    address: {
      street: 'Member3Street',
      postCode: 'Member3PostCode',
      city: 'Member3City'
    },
    contact: {
      mobilePhone: 'Member3MobilePhone',
      phone: 'Member3HomePhone',
      email: 'Member3Email'
    },
    family: [
      {
        name: 'Member3FamilyName1',
        fatherName: 'Member3FamilyFatherName1',
        baptismName: 'Member3FamilyBaptismName1',
        relationship: 'Member3Family1',
        memberChurch: 'Member3Famil1Church'
      },
      {
        name: 'Member3FamilyName2',
        fatherName: 'Member3FamilyFatherName2',
        baptismName: 'Member3FamilyBaptismName2',
        relationship: 'Member3Family2',
        memberChurch: 'Member3Family1Church'
      },
      {
        name: 'Member3FamilyName3',
        fatherName: 'Member3FamilyFatherName3',
        baptismName: 'Member3FamilyBaptismName3',
        relationship: 'Member3Family3',
        memberChurch: 'Member3Famil1Church'
      }
    ]
  }
];
