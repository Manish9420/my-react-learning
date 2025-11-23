import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();

    function goTOAbout() {
           navigate("/about"); 
    }

    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <button onClick={goTOAbout}>Go to About Page Buddy !</button>
        </div>
    )
}