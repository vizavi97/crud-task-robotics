import {User} from "../store/interfaces/user";

//Валидация произвольная и показательная в зависимости от задач - решение индивидуальное
export const formValidator = (name: keyof User | string, value: string): string | undefined  => {
    if (name === "name" && value.length < 5) {
        return "Поле имени должно быть длинее 5 символов"
    }
    if (name === "surname" && value.length < 5) {
        return "Поле Фамилии должно быть длинее 5 символов"
    }
    if (name === "surname" && value.length < 5) {
        return "Поле Фамилии должно быть длинее 5 символов"
    }
    if (name === "phoneNumber" && value.length < 5) {
        return "Ошибка: это поле заполнено некорректно"
    }
    if (name === "phoneNumber" && value.match("[A-Za-z]")) {
        return "Ошибка: это поле заполнено некорректно"
    }

    //не стал валидировать все поля, при необходимости можно отвалидировать все
}