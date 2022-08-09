// function Instagram(props) {
//     console.log(props);
//     return(
//         <div>
//             <div>
//                 <h1>{props.blog}</h1>
//                 <p>{props.posts }</p>
//                 <p>{props.followers}</p>
//                 <p>{props.following}</p>
//             </div>
//             </div>
//     )
// }

// export default Instagram;

// Alternative Option: using props parameters such as blog,followers,posts.

function Instagram({blog,posts,followers,following}) {
   
    return(
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

export default Instagram;