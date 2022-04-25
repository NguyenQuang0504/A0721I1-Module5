import {IStudent} from "../student/IStudent";

export class StudentDao {
  static students: IStudent[] = [
    {
      id: 1,
      name: "Nguyen Van Quang",
      gender: 1,
      mark: 80,
      address: "Hue"
    },
    {
      id: 2,
      name: "Nguyen Van Tuan",
      gender: 1,
      mark: 30,
      address: "Da Nang"
    },
    {
      id: 3,
      name: "Duong Thi Thuy",
      gender: 0,
      mark: 100,
      address: "TP Ho Chi Minh"
    },
    {
      id: 5,
      name: "Nguyen Van Anh",
      gender: 2,
      mark: 20,
      address: "Quang Nam"
    }
  ]
}
