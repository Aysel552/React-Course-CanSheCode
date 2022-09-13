// 1st Option:


// function FirstName(props) {
//     return (
//     <div>
//         {props.anyWordYouWant.map((element => {
//         const { id, firstName } = element;

//         return (
//           <div key={id}>
//             <h1>{id} - {firstName}</h1>
//           </div>
//         )
//       }))}
//     </div>
//     )
// }

// export default FirstName;


// 2nd Option

function FirstName({anyWordYouWant}) {
    return (
    <div>
        {anyWordYouWant.map((element => {
        const { id, firstName } = element;

        return (
          <div key={id}>
            <h1>{id} - {firstName}</h1>
          </div>
        )
      }))}
    </div>
    )
}

export default FirstName;