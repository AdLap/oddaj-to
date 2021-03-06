import React, { useState } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ContactFormSuccess from './ContactFormSuccess';

const ContactForm = () => {
    const [success, setSuccess] = useState(false);

    const styleForm = {
        width: '528px',
        height: '327px',
        marginTop: '128px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const styleInputBox = {
        display: 'flex',
        gap: '16px'
    }

    const styleLabel = {
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: '600',
        fontSize: '16px',
        color: '#3C3C3C',
        letterSpacing: '0',
        width: '100%'
    }

    const styleInput = {
        width: '100%',
        border: 'none',
        background: 'transparent',
        borderBottom: '.75px solid #3C3C3C',
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: '400',
        fontSize: '18px',
        letterSpacing: '0',
        color: '#3C3C3C',
        marginTop: '12px'
    }

    const styleTextArea = {
        width: '100%',
        height: '97px',
        border: 'none',
        background: 'transparent',
        borderBottom: '.75px solid #3C3C3C',
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: '400',
        fontSize: '18px',
        letterSpacing: '0',
        color: '#3C3C3C',
        marginTop: '12px',
        resize: 'none'
    }

    const styleBtn = {
        background: 'transparent',
        border: '.75px solid #3C3C3C',
        fontFamily: '"Open Sans", sans-serif',
        fotnSize: '18px',
        fontWeight: '300',
        letterSpacing: '0',
        color: '#000000',
        padding: '13px 52px',
        cursor: 'pointer',
        alignSelf: 'flex-end'
    }

    const styleErrMsg = {
        fontSize: '14px',
        fontWeight: '400',
        color: '#FF0000',
        marginTop: '10px'
    }

    return (
        <>
            {success && <ContactFormSuccess />}
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={values => {
                    axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact',
                        values
                    , {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(resp => {
                            if (resp.status === 200) {
                                setSuccess(true);
                            }
                        })
                        .catch(error => alert(error))
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={Yup.object().shape({
                    name: Yup
                        .string()
                        .matches(/^[aA-zZ]+$/, 'Imi?? nie powinno zawiera?? spacji i cyfr')
                        .min(2, 'Imi?? musi mie?? co najmniej 2 znaki')
                        .required('Podane imi?? jest nieprawid??owe'),
                    email: Yup
                        .string()
                        .email('Nieprawid??owy adres email')
                        .required('Wpisz adres email'),
                    message: Yup
                        .string()
                        .min(120, 'Wiadomo???? musi mie?? co najmniej 120 znak??w')
                        .required('Wiadomo???? nie mo??e by?? pusta')
                })}
            >
                {
                    ({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} style={styleForm} className='contact__form'>
                            <div style={styleInputBox}>
                                <label htmlFor='name' style={styleLabel}>Wpisz swoje imi??
                                    <Field
                                        name='name'
                                        type='text'
                                        style={styleInput}
                                        placeholder='Krzysztof' />
                                    <ErrorMessage name='name' component='div' style={styleErrMsg} />
                                </label>

                                <label htmlFor='email' style={styleLabel}>Wpisz sw??j email
                                    <Field
                                        name='email'
                                        type='email'
                                        style={styleInput}
                                        placeholder='abc@xyz.pl' />
                                    <ErrorMessage name='email' component='div' style={styleErrMsg} />
                                </label>
                            </div>

                            <label htmlFor='message' style={styleLabel}>Wpisz swoj?? wiadomo????
                                <Field
                                    name='message'
                                    as='textarea'
                                    rows='4'
                                    style={styleTextArea}
                                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.' />
                                <ErrorMessage name='message' component='div' style={styleErrMsg} />
                            </label>

                            <button type='submit' style={styleBtn}>Wy??lij</button>
                        </form>
                    )
                }
            </Formik>
        </>
    );
}

export default ContactForm;
