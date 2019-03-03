import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
    render(){
        return(
            <h3>404 - <Link to = "/">Go Home</Link></h3>
        )
    }
}

export default NotFoundPage;