function Welcome(props) {
    return (
        <>
            <h1>Welcome to Call Out {props.name ? props.name : "no name"}</h1>
            <p>{props.store ? props.store : "no store"}</p>
            <p>{props.location}</p>
        </>
    )



}

export default Welcome;
