import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="not Found" />
                    <h3>Ohhh!</h3>
                    <p>We can't seem to find page you are looking for</p>
                </div>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <p>something wrong</p>
        </Wrapper>
    )
};
export default Error;