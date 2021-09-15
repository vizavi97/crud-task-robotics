import React, {ChangeEvent, CSSProperties, FocusEvent, HTMLInputTypeAttribute, useState} from 'react'
import {formValidator} from "../../helpers/form.validator";
import {User} from "../../store/interfaces/user";

interface InputFieldInterface {
    type: HTMLInputTypeAttribute
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    name: keyof User | string
    placeholder: string
    value: string
    label: string
    style?: CSSProperties
    disabled?: boolean
}

type InputFieldError = {
    status: boolean,
    message: string | null
}

export const InputField: React.FC<InputFieldInterface> = ({
                                                              type = "text",
                                                              onChange,
                                                              label,
                                                              name,
                                                              placeholder,
                                                              style,
                                                              value,
                                                              disabled = false,
                                                          }) => {
    const [error,setError] = useState<InputFieldError>({
        status: false,
        message: null
    })
    const blurEvent = (event: FocusEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        const validationError = formValidator(name,value)
        if(validationError) {
            setError(() => ({status: true, message: validationError}))
        }
        else {
            setError(() => ({status: false, message: null}))
        }
    }
    return (
        <div className={error.status ? "input input-invalid" : "input"}>
            <label>
                <span>{label}</span>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    style={style}
                    value={value}
                    onChange={onChange}
                    onBlur={blurEvent}
                    disabled={disabled}
                />
            </label>
            {error.status && <div><p>{error.message}</p></div>}
        </div>
    )
}
