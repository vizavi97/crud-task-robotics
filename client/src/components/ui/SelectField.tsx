import React, {ChangeEvent} from 'react'
import {Role, User} from "../../store/interfaces/user";

interface SelectFieldInterface {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    name: keyof User | string
    value: string
    label: string
    array: Role[]
    disabled?: boolean
}

export const SelectField: React.FC<SelectFieldInterface> = ({
                                                                onChange,
                                                                label,
                                                                name,
                                                                value,
                                                                disabled = false,
                                                                array
                                                            }) => {


    return (
        <div className={"select"}>
            <label>
                <span>{label}</span>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                >
                    {array.map((item) =>
                        <option value={item.id} key={item.id}>
                            {item.title}
                        </option>
                    )}
                </select>
                <span className={"select-arrow"}>
                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 -4.15258e-07L-6.55671e-08 1.5L5.5 7L11 1.5L9.5 -6.55671e-08L5.5 4L1.5 -4.15258e-07Z"
                                fill="#B5C2D2"/>

                        </svg>

                    </span>
            </label>
        </div>
    )
}
