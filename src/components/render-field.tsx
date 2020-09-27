import React from 'react'

const RenderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }: any) => (
    <>
        <div className="input-label">
            <input {...input} placeholder={placeholder} type={type} />
            <label htmlFor={label}>{label}</label>
        </div>
        {touched && ((error && <span className="input-error">{error}</span>) || (warning && <span>{warning}</span>))}
    </>
)

export default RenderField