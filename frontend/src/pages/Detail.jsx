import React from 'react'
import { useGetDataByIdQuery, useGetDataQuery } from '../App/Slices/slice'
import { NavLink, useParams } from 'react-router'
import { FcLike } from 'react-icons/fc'
import { RiArrowGoBackFill } from "react-icons/ri";
import { Helmet } from 'react-helmet';

function Detail() {
  let { id } = useParams()
  let { data, isLoading } = useGetDataByIdQuery(id)
  return (
    <>
       <Helmet>
       <link rel="icon" type="image/svg+xml" href="https://is.gd/QDdvxo" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Detail</title>
       </Helmet>
      <div className="Detail">
        <h1 style={{fontSize:"40px"}}>Detail</h1>
        {
          isLoading ? (
            <h1>... IsLoading</h1>
          ) : (
            <div className="card">
              <img src={data.img} alt=""style={{width:"100%",height:"500px"}}/>
              <p>{data.name}</p>
              <span>${data.price}</span>
              <div className="btns">
                <button><NavLink to={`/`} style={{ color: "black" }}><RiArrowGoBackFill /></NavLink></button>
                <button><FcLike /></button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Detail
