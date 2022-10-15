import { useState, useEffect } from 'react';
import {QRCodeSVG} from 'qrcode.react';
const Home = () => {
    const [qrcode,setQrcode]=useState('')
    useEffect(()=>{
      const getQrcode=async()=>{
          try {
            const url='http://localhost:5000/';
           const response=await fetch(url,{
              method:'GET'
            })
            const parseRes=await response.json();
            setQrcode(parseRes);
            console.log(parseRes)
        } catch (error) {
            console.log(error);
        }
      }
      getQrcode();
    },[]);
    return (
       <>
        <div className='container'>
        <p>Scan  Qrcode</p><br/>
           <QRCodeSVG value={qrcode} />
        </div><br/>
       </>
    )
}

export default Home;
