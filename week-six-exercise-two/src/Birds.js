// 1st option


// function Birds(props) {
//     return (
//         <div>
//       {props.info.map((element => {
//         const { id, image } = element;

//         return (
//           <div>
//             <h1>{id}</h1>
//             <img src={image} alt='Bird'/>
//           </div>
//         )
//       }))}

//     </div>
//     )
// }

// export default Birds;

// 2nd option

function Birds({info}) {
    return (
        <div>
      {info.map((element => {
        const { id, image } = element;

        return (
          <div key={id}>
            <h1>{id}</h1>
            <img src={image} alt='Bird'/>
          </div>
        )
      }))}

    </div>
    )
}

export default Birds;