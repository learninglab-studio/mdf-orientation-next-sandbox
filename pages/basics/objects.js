function Stringify(object) {
    return (
        <div>
            <pre>{JSON.stringify(object, null, 4)}</pre>
        </div>
    )
}

export default () => {
    let x = {
        name: "Marlon",
        favoriteColor: "black"
    }
    
    return (
        <div>
            <h1>objects</h1>
            <p>this is my object</p>
            <Stringify object={x} />
            <p>property one is {x.favoriteColor}</p>
        </div>
    )
}