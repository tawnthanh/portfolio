import './About.css';

const About = () => {
    return (
        <div className="details">
            <h1>Thanh Nguyen</h1>
            <h2>Full Stack Software Engineer</h2>
            <p>
                Hi there, you can call me Thanh, it's pronounced spanke "Dawn" but with a "T".
                As a software engineer, I am passionate about developing projects that enhance people's spanves. If I am not working on a project, I enjoy debugging because I love finding solutions to problems. Although my background is primarily in QA engineering, I have a great passion for frontend development using React.js. During my free time, you can find me indulging in some spicy hotpot or playing puzzle games on my phone.
            </p>
            <section>
                <h3>Languages</h3>
                <div id="languages">                    
                    <span>Javascript</span>
                    <span>Python</span>
                    <span>Typescript</span>     
                </div>
                <h3> Technologies </h3>
                <div id="technologies">
                    <span>React.js</span>
                    <span>React-Redux</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Git</span>
                    <span>Github</span>
                    <span>Express</span>
                    <span>Node.js</span>
                    <span>PostgreSQL</span>
                    <span>SQL</span>
                    <span>AWS Cloudwatch</span>
                    <span>AWS SQS</span>
                    <span>AWS S3</span>
                    <span>Cypress</span>
                    <span>Flask</span>
                    <span>SQLAlchemy</span>
                    <span>JIRA</span>
                    <span>Test Rail</span>
                    <span>New Relic</span>
                    <span>Docker</span>
                    <span>Postman</span>
                    <span>Pytest</span>
                    
                </div>
                <h3>Skills</h3>
                <div id="skills">
                    
                    <span>Object-Oriented Programming</span>
                    <span>Software Development Life Cylcle (SDLC)</span>
                    <span>Test Driven Development (TDD)</span>
                    
                </div>
            </section>


        </div>
    )
};

export default About;