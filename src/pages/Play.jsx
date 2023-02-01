import { useState } from 'react';
import '../Styling/Play.css';
function Play() {
    const [name, setName] = useState("");//to store name of user
    const [sub, setSub] = useState("");//user will enter that subject in which he want to play the quiz.
    const [visible, setVisible] = useState(true);//Once user enter details, it will setvisible false and quiz window will appear.
    const [question, setquestion] = useState("");//will keep on changing question by fetching it from array.
    const [optionOne, setoption1] = useState("");//same
    const [optionTwo, setoption2] = useState("");//same
    const [optionThree, setoption3] = useState("");//same
    const [optionFour, setoption4] = useState("");//if we create one more option.
    const [Result, setResult] = useState(0);//increase marks by 1 and store in Result
    const [ShowRes, setShowRes] = useState(false);//As we reach last question and user press next after this, ShowRes is set true
    const [showfinal, setshowfinal] = useState(false);//will show the result, once SHOW RESULT BUTTON IS clicked
    const [visibleTwo, setVisible2] = useState(false);//
    const [optionColorOne, set_option_color_one] = useState("lightpink")//change colour of option once selected
    const [optionColorTwo, set_option_color_two] = useState("lightpink")
    const [optionColorThree, set_option_color_three] = useState("lightpink")
    const [nosubject, setNoSubject] = useState(false);
    let finddata = [];
    const [count, setcount] = useState(0);
    function SubmitDetails() {

        console.log(name);
        console.log(sub);
        //setVisible(false);
        //setVisible2(true);
        //return array whose subject is matched 
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        if (finddata.length === 0) {
            setVisible(false);
            setVisible2(true);
            setNoSubject(true);
            console.log("No Questions found of this Subject")
        }
        else {
            setVisible(false);
            setVisible2(true);

        }

    }
    function ChangeQuestion()//action of next button
    {
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count]

        if (count < finddata.length) {
            setquestion(x[2]);
            setoption1(x[3]);
            setoption2(x[4]);
            setoption3(x[5]);
            setcount(count + 1);

        }
        else {
            setquestion("NO MORE QUESTION")
            setoption1("");
            setoption1("");
            setoption1("");
            setShowRes(true);
            setVisible2(false);

        }
        console.log(question)
        console.log(finddata)
        console.log(count);

    }


    const [data] = useState(() => {
        const savedItem = localStorage.getItem("questions");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || "";
    });



    return (
        <div className={visible ? "background" : "background2"}>
            {visible &&
                <h1 className="heading">Enter the info to play quiz</h1>}
            {visible && <input placeholder="Enter Subject" className="input_subject" value={sub} onChange={StoreSubject}></input>}
            {visible && <input placeholder="Enter Your Name" className="input_name" value={name} onChange={StoreName}></input>}
            {visible && <button placeholder="Submit" className='submit_initial'
                onClick={SubmitDetails}>Submit</button>}

            {visibleTwo &&
                <h1 className="heading_sub">{sub}</h1>}
            {!visible &&

                <div className='question'>{nosubject ? "Subject is not found" : question}


                </div>






            }
           
            {visibleTwo && !nosubject &&
                <div className='options_div'>
                    <div className='options'
                        onClick={chk_correct_1}
                    >{optionOne}

                    </div>
                    <div placeholder="Option" className='options'
                        onClick={chk_correct_2}
                    >{optionTwo}

                    </div>
                    <div placeholder="Option" className='options'
                        onClick={chk_correct_3}

                    >{optionThree}

                    </div>

                </div>
                
            }
             {visibleTwo &&!nosubject&&
                <button className='button_submit' onClick={ChangeQuestion}>{count===0?"Start":"Next"}
                </button>
            }

            {/* TO SEE THE RESULT OF QUIZ AFTER THE QUIZ ENDS */}
            {
                ShowRes &&
                <button style={{
                    height: "100px",
                    width: "100px",
                    marginTop: "300px",
                    marginLeft: "300px"
                }} onClick={Showscore}>SHOW RESULT</button>
            }
            {
                showfinal &&
                <div style={{
                    height: "100px",
                    width: "100px",
                    marginTop: "500px",
                    marginLeft: "100px",
                    fontSize: "30px",
                    fontWeight: "bolder"

                }}>Your Score is {Result}
                </div>
            }

        </div>
    )
    function StoreName(event) {

        console.log(event.target.value)
        setName(event.target.value)
    }

    function StoreSubject(event) {
        console.log(event.target.value)
        setSub(event.target.value)
    }
    function chk_correct_1() {
        if (optionColorTwo === "green" || optionColorThree === "green") {
            console.log("it will not work")
        }
        else {
            set_option_color_one("green")

        }




        //onClicking next button exceute this 
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count - 1]
        if (x[6] === 3) {
            console.log("correct")
            setResult(Result + 1);

        }
        else {
            console.log("InCorrect")
        }
    }
    function chk_correct_2() {
        set_option_color_two("green")
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count - 1]
        if (x[6] === 4) {
            console.log("correct")
            setResult(Result + 1);
        }
        else {
            console.log("InCorrect")
        }
    }
    function chk_correct_3() {
        set_option_color_three("green")
        finddata = data.filter((item) => (
            item[0] === sub

        ));
        const x = finddata[count - 1]
        if (x[6] === 5) {
            console.log("correct")
            setResult(Result + 1);
        }
        else {
            console.log("InCorrect")
        }
    }
    function Showscore() {
        setshowfinal(true);
        setVisible2(false);
    }


}
export default Play;