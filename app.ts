import axios from 'axios';

enum Gender {
  female = 'female',
  male = 'male',
}

enum BloodGroup {
  OPlus = 'O+',
  OMinuse = 'O-',
  APlus = 'A+',
  AMinuse = 'A-',
  BPlus = 'B+',
  BMinuse = 'B-',
  ABPlus = 'AB+',
  ABMinuse = 'AB-',
}

interface IHair {
  color: string;
  type: string;
}

interface IAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: { lat: number; lng: number };
  country: string;
}

interface IBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface ICompany {
  department: string;
  name: string;
  title: string;
  address: IAddress;
}

interface ICrypto {
  coin: string;
  wallet: string;
  network: string;
}

interface IUser {
  id: number;
  firstNama: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: BloodGroup;
  height: number;
  weight: number;
  eyeColor: string;
  heir: IHair;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  compony: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: ICrypto;
  role: string;
}

const getUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const res: Promise<IUser[]> = axios.get('https://dummyjson.com/users').then((res) => res.data);
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
