import { useState } from "react"

export default function ClickCounter (props) {
    const [clicks, setClicks] = useState(0)
    return (
        <div style={{width: "70%", margin: "auto"}}>
            <h1>you have clicked { clicks } times.</h1>
            <div
                style={{
                    padding: "30px",
                    fontSize: "50px",
                    fontFamily: "Avenir Next",
                    fontWeight: "900",
                    backgroundColor: "rgba(0,0,50,.7)",
                    color: "white",
                    borderRadius: "20px",
                    cursor: "pointer",
                    display: "inline-flex",
                    userSelect: "none",
                    marginBottom: "30px"
                }}
                onClick={() => setClicks(clicks+1)}
            >add 1</div>
            <div
                style={{
                    padding: "30px",
                    fontSize: "50px",
                    fontFamily: "Avenir Next",
                    fontWeight: "900",
                    backgroundColor: "rgba(50,0,0,.7)",
                    color: "white",
                    borderRadius: "20px",
                    cursor: "pointer",
                    display: "inline-flex",
                    userSelect: "none"
                }}
                onClick={() => setClicks(clicks-1)}
            >subtract 1</div>
        </div>
    )
}