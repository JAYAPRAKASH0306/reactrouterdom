import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';




function Career() {

  const data=[{
    img:"https://t4.ftcdn.net/jpg/04/22/75/43/240_F_422754338_8mV1KgejRJEHF9cXSWsSbFbR5So6Bcm9.jpg",
    tittle:'Top 8 Career Opportunities for Data Engineers',
    condent:"Have you ever felt confused when you decided to set up your career path as a Data engineer? This happens to almost everyone out there because you know what Data engineering is and its roles and responsibilities, but do you know the available career opportunities for Data Engineers?"
},{
  img:'data:image/png;base64,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',
  tittle:'How to Become a UI/UX Designer in India',
  condent:"Are you fascinated by the user experience of your favorite apps or websites like Netflix, Amazon, etc.,? Are you someone with an eye for aesthetics, problem-solving, and human-centered innovation? Then, It is high time, you learn UI/UX design & become a creator of the website that would join the above list. Yes, UI/UX is not complicated if you learn it the right way."},{
  img:'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2023-01/game-development-courses.jpg',
  tittle:'Game development 2023',
  condent:"The game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes with each passing moment. You have several exciting opportunities to build a remarkable game development career and fulfill your passion.  This comprehensive guide will offer valuable insights into the industry’s current state, explore emerging trends and cutting-edge technologies, highlight in-demand skills and qualifications, and shed light on potential career paths"

},{
  img:'https://digitalcatalyst.in/blog/wp-content/uploads/2022/03/major-components-of-digital-marketing.png',
  tittle:"Career Opportunities in Digital Marketing | Digital Marketing Career",
  condent:"As we move forward in today’s digital age, the need for businesses to engage with their customers online has become essential. With the widespread availability of smartphones, social media platforms, and online marketplaces, consumers’ behavior and purchasing patterns have undergone a significant transformation. As such, digital marketing has become crucial to any successful business strategy."
}







]

  return (
    <div className='fsd'> 
    { data.map((item,index)=>  
    <div className='carddiv'>     
     <Card  key={index}style={{ width: '18rem',height:'100%' }}>
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

export default Career