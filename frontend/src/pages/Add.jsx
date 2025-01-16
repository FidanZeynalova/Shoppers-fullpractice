import React from 'react'
import { useGetDataQuery, usePostDataMutation } from '../App/Slices/slice'
import { Helmet } from 'react-helmet'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FaDeleteLeft } from "react-icons/fa6";

let schema = yup.object().shape({
  name: yup.string().required("Required"),
  price: yup.number().required("Required").positive().integer(),
  img: yup.string().url().required("Required"),
});

function Add() {
  let [postData] = usePostDataMutation()
  let { data, refech, isLoading } = useGetDataQuery()
  console.log(data);


  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/Z46fDL" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Add</title>
      </Helmet>
      <div className='Add'>
        <Formik
          initialValues={{ name: '', img: '', price: '' }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await postData(values)
            refech()
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" className="input" placeholder="New Name" />
              <ErrorMessage name="name" component="div" />

              <Field type="text" name="img" className="input" placeholder="New Image" />
              <ErrorMessage name="img" component="div" />

              <Field type="number" name="price" className="input" placeholder="New Price" />
              <ErrorMessage name="price" component="div" />
              <button type="submit" disabled={isSubmitting}>Submit </button>
            </Form>
          )}
        </Formik>
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Name</td>
              <td>Price</td>
              <td>Delete</td>
            </tr>
          </thead>
          {
            isLoading ? (
              <h1>...IsLoading</h1>
            ) : (
              data.map((item) => {
                return <tr key={item._id}>
                  <td style={{ width: "200px", height: "200px" }} ><img src={item.img} alt="" style={{ width: "100%", height: "100%" }} /></td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><button style={{ padding: "10px", fontSize: "25px", backgroundColor: "aqua", borderRadius: "10px" }} onClick={()=>handleDelete(item._id)}><FaDeleteLeft /></button></td>
                </tr>
              })
            )
          }
        </table>
      </div>
    </>
  )
}

export default Add
