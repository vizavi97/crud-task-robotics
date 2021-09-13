import React from 'react'
import {User} from "../store/interfaces/user";
import {convertDate} from "../helpers/date.helper";
import {useDispatch} from "react-redux";
import {deleteUser} from "../store/action/user.action";

interface TableRowInterface extends User {
    number: number
}

export const TableRow: React.FC<TableRowInterface> = ({
                                                          name,
                                                          surname,
                                                          birthday,
                                                          birthPlace,
                                                          email,
                                                          id,
                                                          lastUpdate,
                                                          middleName,
                                                          phoneNumber,
                                                          registerDate,
                                                          role,
                                                          number
                                                      }) => {
    const dispatch = useDispatch()
    const deleteHandler = (id:string) => dispatch(deleteUser(id))

    return (
        <tr>
            <td className={"content-table__name"}>{number + " " + surname + " " + name[0].toUpperCase() + "." + middleName[0].toUpperCase() + "."}</td>
            <td className={"content-table__role"}>{role.title}</td>
            <td className={"content-table__birthday"}>{convertDate(birthday)}</td>
            <td className={"content-table__place"}>{birthPlace}</td>
            <td className={"content-table__email"}>{email}</td>
            <td className={"content-table__phone"}>{phoneNumber}</td>
            <td className={"content-table__register"}>{convertDate(registerDate)}</td>
            <td className={"content-table__update"}>{convertDate(lastUpdate, true)}</td>
            <td className={"content-table__change"}>
                <button type={"button"}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.36 14.48H0.64C0.286 14.48 0 14.766 0 15.12V15.84C0 15.928 0.072 16 0.16 16H15.84C15.928 16 16 15.928 16 15.84V15.12C16 14.766 15.714 14.48 15.36 14.48ZM2.914 12.8C2.954 12.8 2.994 12.796 3.034 12.79L6.398 12.2C6.438 12.192 6.476 12.174 6.504 12.144L14.982 3.666C15.0005 3.6475 15.0153 3.62552 15.0253 3.60133C15.0353 3.57713 15.0405 3.55119 15.0405 3.525C15.0405 3.49881 15.0353 3.47287 15.0253 3.44867C15.0153 3.42448 15.0005 3.4025 14.982 3.384L11.658 0.058C11.62 0.02 11.57 0 11.516 0C11.462 0 11.412 0.02 11.374 0.058L2.896 8.536C2.866 8.566 2.848 8.602 2.84 8.642L2.25 12.006C2.23054 12.1131 2.2375 12.2234 2.27025 12.3273C2.30301 12.4311 2.36059 12.5254 2.438 12.602C2.57 12.73 2.736 12.8 2.914 12.8Z"
                            fill="#B7BAC6"/>
                    </svg>
                </button>
            </td>
            <td className={"content-table__delete"}>
                <button type={"button"}  onClick={() => deleteHandler(id)}>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.8222 5.64126L11.1717 15.495C11.1458 15.6364 11.0713 15.7642 10.9611 15.8565C10.8509 15.9487 10.7118 15.9995 10.5681 16H2.98075C2.83704 15.9995 2.69803 15.9487 2.5878 15.8565C2.47758 15.7642 2.40308 15.6364 2.37721 15.495L0.726713 5.64126C0.712496 5.55356 0.717421 5.46383 0.741151 5.37821C0.764881 5.2926 0.806854 5.21313 0.864189 5.14526C0.921524 5.0774 0.992864 5.02274 1.07331 4.98504C1.15376 4.94734 1.24141 4.9275 1.33025 4.92687H12.2063C12.2962 4.92571 12.3852 4.94424 12.4672 4.98115C12.5491 5.01807 12.622 5.07248 12.6807 5.14056C12.7394 5.20864 12.7825 5.28874 12.8069 5.37524C12.8314 5.46174 12.8366 5.55254 12.8222 5.64126ZM13.5489 3.07929C13.5489 3.24263 13.484 3.39927 13.3685 3.51477C13.253 3.63027 13.0964 3.69515 12.933 3.69515H0.615858C0.452523 3.69515 0.295877 3.63027 0.180381 3.51477C0.064885 3.39927 0 3.24263 0 3.07929C0 2.91596 0.064885 2.75931 0.180381 2.64381C0.295877 2.52832 0.452523 2.46343 0.615858 2.46343H3.69515V0.615858C3.69515 0.452523 3.76004 0.295877 3.87553 0.180381C3.99103 0.0648849 4.14767 0 4.31101 0H9.23788C9.40121 0 9.55786 0.0648849 9.67335 0.180381C9.78885 0.295877 9.85373 0.452523 9.85373 0.615858V2.46343H12.933C13.0964 2.46343 13.253 2.52832 13.3685 2.64381C13.484 2.75931 13.5489 2.91596 13.5489 3.07929ZM8.62202 2.46343V1.23172H4.92687V2.46343H8.62202Z"
                            fill="#B7BAC6"/>
                    </svg>
                </button>
            </td>
        </tr>
    )
}
