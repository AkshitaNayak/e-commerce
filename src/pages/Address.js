import React, { useContext, useState } from "react";
import { useFormik } from 'formik'
import '../App.css'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext/AppContext";

export default function Address() {

    const paymentOptions = ["EMI", "UPI", "COD", "Debit Card", "Credit Card"]
    let navigate = useNavigate()
    let appContext = useContext(AppContext)
    


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            paymentOption: ''
        },

        onSubmit: function (values) {
            console.log(values)
            localStorage.setItem('orderDetails',JSON.stringify(values))
            appContext.saveOrder()
            navigate('/')
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Enter your full Name'),
            email: Yup.string().email('Please enter Valid Email').required(),
            address: Yup.string().required('Enter address'),
            paymentOption: Yup.string().required()
        })
    })


    return (
        <div>
            <div className='form-holder'>Checkout

                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Full Name</label>

                    <input type="text" className={`${formik.touched.name && formik.errors.name ? 'red-border' : 'purple-border'}`}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name="name" id="name" />

                    {formik.touched.name && formik.errors.name && (<span className='error'>{formik.errors.name}</span>)}


                    <label htmlFor="Email">Email</label>
                    <input type="email" className={`${formik.touched.email && formik.errors.email ? 'red-border' : 'purple-border'}`}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name="email" id="email" />

                    {formik.touched.email && formik.errors.email && (<span className='error'>{formik.errors.email}</span>)}


                    <label htmlFor="address">Full Address</label>
                    <textarea type="text" className={`${formik.touched.address && formik.errors.address ? 'red-border' : 'purple-border'}`} name="address" id="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />

                    {formik.touched.address && formik.errors.address && (<span className='error'>{formik.errors.address}</span>)}






                    <label htmlFor="paymentOption">Payment option</label>

                    <select name="paymentOption"
                        className={`${formik.touched.paymentOption &&
                            formik.errors.paymentOption ?
                            'red-border' : 'purple-border'}`} id="paymentOption" 
                            onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        value={formik.values.paymentOption}>
                            <option value="">Please Select a payment method</option>
                        {

                            paymentOptions.map((paymentOption, index) => {
                                return (


                                    <option value={paymentOption} key={index}>{paymentOption}</option>

                                )
                            })
                        }
                    </select>

                    {formik.touched.paymentOption && formik.errors.paymentOption && (<span className='error'>{formik.errors.paymentOption}</span>)}


                    <button type="submit" >Submit</button>




                </form>

               
            </div>

        </div>
    )
}
