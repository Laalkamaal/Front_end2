import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import TableQuiz from "../components/TableQuiz";
import { useNavigate } from "react-router";
function Quiz()
{
    const navigate=useNavigate();
    return(

        <div>
        <Navbar/>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
       
            <h1 style={{
                marginLeft:"100px",
                display:"inline-flex",
            }}> My Quiz
            </h1>
            <button 
            style={{
                height:"30px",
                width:"10%",
                marginLeft:"900px",
                backgroundColor:"blue",
                color:"white",
                display:"inline-flex"
            }} onClick={GotoCreate}>Create New Quiz</button>
            <br></br>
            <br></br> <br></br> <br></br> <br></br>
            <TableQuiz/>
            
        </div>
    )
    function GotoCreate()
    {
        navigate('/create')
    }
}
export default Quiz;








