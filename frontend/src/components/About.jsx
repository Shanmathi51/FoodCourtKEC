// export default About;
import React from 'react';
import './About.css'; 
function About() {
  const videoSrc = "assets/vid.mp4"; 

  const sections = [
    { title: "Ambience", content: "he seating area is spacious, accommodating large groups of students at a time. The ambience is lively, making it a popular hangout spot for students during breaks.", imageUrl:'//tse3.mm.bing.net/th?id=OIP.fZEAkyq22E0q1v1FDf2g5wAAAA&pid=Api&P=0&h=180 '},
    { title: "Services", content: "The food court at KEC offers a wide range of cuisine options, catering to both vegetarian and non-vegetarian preferences. The dishes include South Indian, North Indian, Chinese, and snacks like sandwiches, juices, and fast food.", imageUrl:'//tse1.mm.bing.net/th?id=OIP.QuTLD3R9NduXHTi5to2LJgHaFj&pid=Api&P=0&h=180'}
  ];

  return (
    <div className='bg'>
    <div className="about-container">
      {/* Background video */}
      
      {sections.map((section, index) => (
        <div key={index} className={`content ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
          <section className="section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
          <div className="photo">
            <img src={section.imageUrl} alt={section.title} width={150} height={220} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default About;

