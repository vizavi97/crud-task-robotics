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
            </label>
        </div>
    )
}
