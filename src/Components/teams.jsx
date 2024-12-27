import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img_1 from "../assets/team1.jpg"
import img_2 from "../assets/team2.jpg"
import img_3 from "../assets/team3.jpg"
import img_4 from "../assets/team4.jpg"
import img_5 from "../assets/team5.jpg"
import img_6 from "../assets/team6.jpg"
import img_7 from "../assets/team7.jpg"
import img_8 from "../assets/team8.jpg"




function AppTeams ()
{


    const teamsData = [
        {
          id: 1,
          image: img_1,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Gabriel Hart',
          designation: 'CEO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        },
        {
          id: 2,
          image: img_2,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'David Antony',
          designation: 'Manager',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        },
        {
          id: 3,
          image: img_3,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Nicholas Perry',
          designation: 'UX Designer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        },
        {
          id: 4,
          image: img_4,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Sarah Wills',
          designation: 'Developer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        },
        {
          id: 5,
          image: img_5,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Sophia Pitt',
          designation: 'Developer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        },
        {
          id: 6,
          image: img_6,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Taylor Lopez',
          designation: 'Developer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        },
        {
          id: 7,
          image: img_7,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Ryan Giggs',
          designation: 'Content Writer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        },
        {
          id: 8,
          image: img_8,
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'David Smith',
          designation: 'SEO Expert',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
        }
      ]
    return (<section id="teams" className="block teams-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our teams</h2>
            <div className="subtitle">some of our experts</div>
          </div>
          <Row>
            {
              teamsData.map(teams => {
                return (
                  <Col sm={3} key={teams.id}>
                    <div className='image'>
                      <Image src={teams.image} />
                      <div className='overlay'>
                        <div className='socials'>
                          <ul>
                            <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                            <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='content'>
                      <h3>{teams.name}</h3>
                      <span className='designation'>{teams.designation}</span>
                      <p>{teams.description}</p>
                    </div>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </section>);
}

export default AppTeams;