import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';




function Fsd() {

  const data=[{
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png',
    tittle:'The Top 10 Tools Every Full Stack Developer Should Master in 2023',
    condent:"As a full stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer."
},{
  img:'https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png',
  tittle:'The Ultimate Guide to Real-World Full Stack Development Applications',
  condent:"Full stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.  But what exactly is full stack development, and what are the real-world applications of this skill set? In this comprehensive guide, we will explore the ins and outs of full stack development, the technologies involved, and the top real-world projects that can help beginners and experienced professionals alike showcase their expertise"
},{
  img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg',
  tittle:'Best Ways to Learn Full Stack Development in 2023',
  condent:"Full stack development is and will be a promising and an in-demand career in the upcoming years. According to Stack Overflow, there are more than 90,000 developers who responded to the tools being used, in a survey. You would be wondering how to get into this high-paying profession. Worry not, this blog will let you know about some of the best ways you can choose to get into full stack development."
},{
  img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-6.png',
  tittle:"Top Skills To Become a Full Stack Developer in 2023",
  condent:"Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! In this comprehensive guide, we will explore the skills and knowledge required to excel in this multifaceted role.  Everybody in the tech industry knows what full stack development is and how crucial of a skill it is to have, not to mention the attractive salary packages that await and what a great career path it is!"

}







]

  return (
    <div className='fsd'> 
    { data.map((item,index)=>  
    <div className='carddiv' >     
     <Card  key={index}style={{ width: '18rem',height:'100%'}}>
  <Card.Img variant="top" src={item.img}/>
  <Card.Body>
    <Card.Title>{item.tittle}</Card.Title>
    <Card.Text>
     {item.condent}      
    </Card.Text>
  </Card.Body>
</Card>
</div>)
}

</div>
)
}

export default Fsd