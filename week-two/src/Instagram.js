// import

// function

// 2nd option: using props names:

function Instagram({blog,posts,followers,following}) {
    return (
        <div>
            <div>
                <h1>{blog}</h1>
                <p>{posts}</p>
                <p>{followers}</p>
                <p>{following}</p>
            </div>
            </div>
    )
}



//1st option using props

// function Instagram(props) {
//     return (
//         <div>
//             <div>
//                 <h1>{props.blog}</h1>
//                 <p>{props.posts}</p>
//                 <p>{props.followers}</p>
//                 <p>{props.following}</p>
//             </div>
//             </div>
//     )
// }


// export

export default Instagram;


