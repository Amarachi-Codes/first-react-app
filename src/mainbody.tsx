import React from "react";

function Join() {
    return (
        <button>Join Us</button>
    )
}
function Maincontent() {
    const Myname = "Doris Amarachi";
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero sed ab. Nobis, commodi corporis aut nam deserunt quaerat sed.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatum voluptatem aliquid sed molestias deleniti vitae, nesciunt, eligendi incidunt doloremque, odit labore. Sed magnam expedita sint in deleniti officiis. Mollitia.</p>
            <p>Join us Today</p>
            <Join />
            <p>My name is {Myname}</p>
        </>
    )
}
export default Maincontent;