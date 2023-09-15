import { useRouteError } from "react-router-dom"

const SinglePageError = () => {
    const error = useRouteError();
    console.log(error.message);
    return (
        <h2>there was an error...</h2>
    )
}

export default SinglePageError