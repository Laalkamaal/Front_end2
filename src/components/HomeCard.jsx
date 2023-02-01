import { fontSize, fontWeight, style } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';



function HomeCard() {
            
    const navigate=useNavigate();
  return (
    <div style={{padding:"10px"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Card onClick={GotoCreate} style={{ height:'18rem',width: '18rem',backgroundColor:'#f5f5f5', display:'inline-block',padding:'10px',margin:'10px',fontSize:'20px',fontWeight:'bold',left:"40px"}}>
        
      
      <Card.Body>
        <span style={{top:'0px',left:'20px',position:'relative', padding:'20px'}}>Create New Quiz</span>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/quiz-social-media-instagram-sticker-template-icon-user-interface-question-button-stories-social-media-design-vector-illustration-230665293.jpg" />
      </Card.Body>
    </Card>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Card onClick={GotoQuiz} style={{ height:'18rem',width: '18rem',backgroundColor:'#f5f5f5',display:'inline-block',padding:'10px',margin:'10px',fontSize:'20px',fontWeight:'bold',left:"80px"}}>
        <Card.Body>
        <span style={{top:'0px',left:'20px',position:'relative', padding:'20px'}}>My Quizes</span>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqekBeQJ9wSKoLJmUat7WRxeq0ljbPBaDrdlxQktZmoR2VyvelcnqqVG4f8bRn7AWSAM&usqp=CAU" />

       
      </Card.Body>
    </Card>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Card onClick={GotoPlay} style={{ height:'18rem',width: '18rem',backgroundColor:'#f5f5f5',display:'inline-block',padding:'10px',margin:'10px',fontSize:'20px',fontWeight:'bold',left:"120px" }}>
       <Card.Body >
       <span style={{top:'0px',left:'20px',position:'relative', padding:'20px'}}>Play Quiz</span>
        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAABCFBMVEX////0iwD0pyGtSp/WUpnTUprRUZqvSp67TZ2qSZ+1S56yS57IT5unSJ/xWJa4TJ30kQffVJiiR6D0lg3rV5f0nBTBTpzGT5vkVZjcVJnMUJv0ohv0WZXmVpf0lAv/W5T47fX++e/4xnD+8uH/3ur/ZpvrZ6Lpb6ffYaDaaafbe7LWf7fRdrPQhLzTlMXVnsv4n8PDg7+sWanQX6PFXKTowt7vtdPx0eTdksHrdqvsosffo8vprM/15PC5Z6/ctdjXkcH1sj7w1+n74rXgdq7CZqv9687on8b3vFf73ai4a7Hbq9K5XKj505D3s0z5xHT5y3z4t2H3rUr2ojP6yon705z848G9g8A4gNqyAAAG7klEQVR4nO3aaUMaRxwG8BGFKIIHKDZYEcSkJjGmqVrSGGrUqNhU8Ujs9/8mnXv+Mzu7O3so+2KeFwns+WPuBRHy8fHx8fHx8fHx8fHx8bFne3Nz89WkEYFsyhTJ9kqxNn8lmTSIxVSRLCxMWoWsKpqVQrBM1cIKyesJs+yqlZUNnN8mxopSbfxC8ry2bU21EKpaJnm582yuCNWGqWKZeR5WoAJjVDRvnpoV2azCVOVyuVKpvH1CV3oVSbv97klZoarlCFWbplar5W/LQ7VG0trNnZWHiiU3W9QgmljVas3ivM+FlbdqdnYRZy8jy0k1k1S1WK1W5+c/pGb9HqMix6RVzc+/wElnAyp9R1eo0KlAuaqqQDWNMzeXuE7DVKSUXjIWsqhqpmrWqmIonHq9/jEpy64iLsnKrqrXGwlYXdGubDslK1JFDolU1Zmq8UeS4lqJZzHVPn2zT1XkFVcdkNeHDqpGkuISXXCbvWV9kC/5/mT/UZU6Y1CrfaIvWrKwSHEtxqoSs/Cw8BdnqYFBurBKP2cNmayuiyoJC/Hhij/n8EH0M3vHSq1cuTRYzHWkWE6qhCw2OSuWHBkQWyNXKl+Mc0BxdekrOIjmokJiySBZWMXb1kCwSMtifZCzWoI1S18Mc1eh13zGseyakSw5tF9yDzsAj1f0f2PCIaq/ETrOoEKIT4M2VlmwMGlI++AaZ9FhAfe/XcHSVP/ISwhUYhXik7NNJVjtttgmWGJcoP92DRW8SFoV4ksGm4qx9pWKB7O+AlaEiruSq9BntpAxtr6dkYPoO1OF5MBwzFg21dZJT7pSqMjITgZR8W6wA5ZXdMspZ9FpULIG6gKaakg3lWhOmCuVik847DVYH5crnIXaSsUK6bwl+qCuIl0QqHDSiRhrGbA0VYDF6+6IrGS6igVU05oqC6sLpsEdfSnKNvJB9AsvK1ytdB0jWXAQJRvOSrm46NDOXn7Tl6IaS+UQsvRpkGwp5cWS0+C2vhTlLNPFV1fsjT7h5MkiT11d+nJgLEXJtk813gEROmi1jqRKscA0mCML0adB+kr/RqbdxkvSwxpr7LvmE865RVUfGq7MrG+INK3gst3+3HUuzjWXDDoriwrZv72KfBoUp743FzIIui4ysd4kVp2KU4PLK+DKhEJwFHV9nucnvggu+rJaQEyVvko+sHzLQKfE+YAq5XIhiiVUh5YDwr/7CKhyZF0qVdghB+lVI9Uzr3qJXEIVdYybirFgiy/Z48QyVPD8kdi4F6oSi3dNVSr1w1nr6+sOMKoSP08ELyKKXqq+/ysWMmLGYRk2tAuQN32LiCW+Qk/LsqlHFjlBiS9tvwdVgc+F3zzaRDSr8cVVqbAvHAKfzYBVq+Ak9u1V4FrX+kk20foqiQsroqiAa6CdRVu7OpFvHennBApJxoEVq9L6jpjs5vRJEJlXoe9tIpxmM57loFIu9cZYMlzAyxCH+hwjg9TMTWWUBndpZ/L9sniMO9wIUQJVgLW1dWJsuQgYbCzQjvQb3ElSp9NJpZJjykWguAJ1CjobZAUa9ZiLCMpZNTJvb+OehLFg6YCmDa9zJUSdpaUlVxW8+3XonpKdpVeaatk34CqPQkTST8OK3hXKEqWjOttYHXIhRDhT7ovpCJWxU29IjKVVmupsP+QRfUnCuXJWgTufxbBuRY09yv16W5KdrSOP6AkRyZ27KuYhSuyjRSRY6si+VmuqacsmNAVyn0DVi2WpRm3p/toYqZq2TfWQQGVOr2bUAHlrVplk0TIib1TTtqjchwYSpRrZdqu5tmRldTq8+wsWMwRVU7aru7Bubbtv10Fns8y1ckDSGVlVgHVi2z2GiyTLZKtVm47IokK3kqVPr9erq2TwUeuRB6MhSZYNYqpUHIf5Xkl2NrhZ1ZsoITyqyZlNHRdSPuEs14KzLkZEIcl6oyXUFA1J1mI/BcvNpRa2YIQAi7Ym72x461hOI/ywK/1eebOsw5ESya4mp5EpsizrwXvdubOcnvvPVmFnkywoIrnRiyOQJZOVtXGBxb+cYTWRqrYIll5AkUc7s2Q7+imKEIrib2Rn4fTHS7YDnaI1JL5tDETqWg/hqgfI+mG9z7iJdzmv5fHqTWtItMR+6jcVFwt+dGtpOt86MlpDCqshm6sjt2i781HJmS28iuwuuQlU2qP7Q4SLK4KkF8A935JoVZc2Marc6iVn16RY0a5kK94nh509TriwaIzRSmCTfaf+RLlvTjXvs/3E5TOpTJt/JYOOG41GdxIUmA/sR5yP5Ffn4V4j9V865R3jp6WCqFAxVaiYKtQtpIr+NFFAFSqmChVTJf/8sWAqVEwVKqZKuSbtMNItpIqk8d+kBT4+Pj4+Pj4+Pj4Tyv+Dqj5nSUMXJQAAAABJRU5ErkJggg==" />
     
       
      </Card.Body>
    </Card>
    


    </div>
    
  )
    function GotoCreate()
        {
            
            navigate("/create")
            

        }
    function GotoQuiz()
        {
              
            navigate("/quiz")
        }
    function GotoPlay()
        {
              
            navigate("/play")
        }

}

export default  HomeCard;







