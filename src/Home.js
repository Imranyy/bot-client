const $qrcode=require('qrcode.react');
const Home = ({qrcode}) => {
    const home=[
    {
        id:1,
        firstName:'imran',
        middleName:'matano',
        lastName:'ngati'
    },
    {
        id:2,
        title:"React Js Tutorial",
        date:"June 02, 2022 11:17:52 AM",
        "body":"React, Django framework, Python"
      },
      {
        id:3,
        title:"The Presidency Title Race",
        date:"June 02, 2022 11:17:52 AM",
        "body":"Presidential Politics is "
      }
]
    return (
       <>
        <div className='container'>
            <div className='qrcode'>{qrcode}</div>
            <h1>{home&&home.map(item=>{
                <p>{item.firstName}</p>
            })}</h1>
        </div>
       </>
    )
}

export default Home;
