const newMessage={
    name:"Tefa Salcedo",
    phone:120085756,
    email:"e@e.com",
    city:"Bogota",
    message:"Hola mundo",
    hora:"11:01:47 am 6/2/2024",
};

function personalData(fecha,message, email){
    return `Message send: "${message}", enviado desde ${email} a las ${fecha}`
}


export const Appt=()=>{
    return (
        <>
        <h1>{newMessage.name}</h1>
        {/* Si necesito ver todo el objeto */}
        {/* <code>{JSON.stringify(newMessage)}</code>

        <p>{personalData(newMessage.hora, newMessage.message, newMessage.email)}</p>
        <p>Soy un subtitulo</p>
        <h1>  { 1+1*5} </h1>
         */}

        </>
    )
}