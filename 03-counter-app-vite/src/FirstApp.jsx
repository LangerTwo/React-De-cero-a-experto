
// const newMessage = {
//   message: 'Hola, soy un mensaje',
//   title: 'Mi primer mensaje'
// }

const getResult = () => {
  return 4 + 4;
}

export const FirstApp = ( {title, subTitle} ) => {

  // console.log(props)

  return (
    <>
      <h1>{ title }</h1>
      <h1>{ subTitle }</h1>
      {/* <h1>{ getResult() }</h1> */}
      {/* <code> { JSON.stringify( newMessage ) } </code> */}
      <p>soy un subtitulo</p>
    </>
  )
}