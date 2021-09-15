import React, {SyntheticEvent} from 'react'
import DatePicker from 'react-datepicker'

interface InputFieldInterface {
    onChange: (date: Date, event: SyntheticEvent<any> | undefined,) => void;
    name: string;
    value: string;
    label: string;
}

export const DatePickerField: React.FC<InputFieldInterface> = ({
                                                                   onChange,
                                                                   label,
                                                                   value,
                                                                   name
                                                               }) => {
    return <div className={"input input-date"}>
        <label>
            <span>{label}</span>
            <DatePicker
                value={value}
                onChange={onChange}
                name={name}
                dropdownMode="select"
                showMonthDropdown
                showYearDropdown
                adjustDateOnChange
            />
            <div className={"input-date__icon"}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 8H16V15.2C16 15.4122 15.9157 15.6157 15.7657 15.7657C15.6157 15.9157 15.4122 16 15.2 16H0.8C0.587827 16 0.384344 15.9157 0.234315 15.7657C0.0842854 15.6157 0 15.4122 0 15.2V8ZM12 1.6H15.2C15.4122 1.6 15.6157 1.68429 15.7657 1.83431C15.9157 1.98434 16 2.18783 16 2.4V6.4H0V2.4C0 2.18783 0.0842854 1.98434 0.234315 1.83431C0.384344 1.68429 0.587827 1.6 0.8 1.6H4V0H5.6V1.6H10.4V0H12V1.6Z"
                        fill="#B7BAC6"/>
                </svg>
            </div>
        </label>
    </div>
}
