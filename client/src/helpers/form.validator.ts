import {CreateUserType, User} from "../store/interfaces/user";

//Валидация произвольная и показательная в зависимости от задач - решение индивидуальное
export const blurFormValidator = (name: keyof User | string, value: string): string | undefined => {
    if (name === "name" && value.length < 2) {
        return "Поле имени должно быть длинее 2 символов"
    }
    if (name === "surname" && value.length < 2) {
        return "Поле Фамилии должно быть длинее 2 символов"
    }
    if (name === "middleName" && value.length < 2) {
        return "Поле Отчество должно быть длинее 2 символов"
    }
    if (name === "phoneNumber" && value.length < 5) {
        return "Ошибка: это поле заполнено некорректно"
    }
    if (name === "phoneNumber" && value.match("[A-Za-z]")) {
        return "Ошибка: это поле заполнено некорректно"
    }
    //не стал валидировать все поля, при необходимости можно отвалидировать все
}

export const submitFormValidator = (form: CreateUserType): string | undefined => {
    if (Object.entries(form).some(elem => !String(elem[1]).length)) {
        return "Ошибка: Все поля должны быть заполнены"
    }
    if (form.name.length < 2) {
        return "Поле имени должно быть длинее 2 символов"
    }
    if (form.surname.length < 2) {
        return "Поле Фамилии должно быть длинее 2 символов"
    }
    if (form.middleName.length < 2) {
        return "Поле Отчества должно быть длинее 2 символов"
    }
    if (form.phoneNumber.length < 5) {
        return "Ошибка: это поле заполнено некорректно"
    }
    if (form.phoneNumber && form.phoneNumber.match("[A-Za-z]")) {
        return "Ошибка: это поле заполнено некорректно"
    }
}