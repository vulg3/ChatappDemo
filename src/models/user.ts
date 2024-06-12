export interface User {
  _id: string;
  _idUser: string;
  email: string;
  name: string ;
  avatar: string | null;
  status: string | null;
  birthDate: string;
  phonenumber: string;
  listChat: any[];
  room: [];
  active: boolean;
}

export interface UpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SearchUsersDto {
  name: string;
}