import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img_2 from '../assets/img2.jpg';
import img_3 from '../assets/img3.jpg';
import img_4 from '../assets/img4.jpg';
import img_5 from '../assets/img5.jpg';
import img_6 from '../assets/img6.jpg';
import img_7 from '../assets/img7.jpg';
import img_8 from '../assets/img8.jpg';
import img_9 from '../assets/img9.jpg';
import img_10 from '../assets/img10.jpg';
import Pagination from 'react-bootstrap/Pagination';
import Image from 'react-bootstrap/Image';
function AppWork ()
{
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    const worksData = [
        {
          id: 1,
          link: 'https://www.google.com',
          image: img_2,
          title: 'Lonely Path',
          subtitle: 'Web Design'
        },
        {
          id: 2,
          link: 'https://www.google.com',
          image: img_3,
          title: 'Photographer Girl',
          subtitle: 'Branding'
        },
        {
          id: 3,
          link: 'https://www.google.com',
          image: img_4,
          title: 'The Difference',
          subtitle: 'Web Design'
        },
        {
          id: 4,
          link: 'https://www.google.com',
          image: img_5,
          title: 'Nature Patterns',
          subtitle: 'Branding'
        },
        {
          id: 5,
          link: 'https://www.google.com',
          image: img_6,
          title: 'The Difference',
          subtitle: 'Photography'
        },
        {
          id: 6,
          link: 'https://www.google.com',
          image: img_7,
          title: 'Winter Sonata',
          subtitle: 'Web Design'
        },
        {
          id: 7,
          link: 'https://www.google.com',
          image: img_8,
          title: 'Lonely Path',
          subtitle: 'Branding'
        },
        {
          id: 8,
          link: 'https://www.google.com',
          image: img_9,
          title: 'Appreciation',
          subtitle: 'Photography'
        },
        {
          id: 9,
          link: 'https://www.google.com',
          image: img_10,
          title: 'Happy Days',
          subtitle: 'Web Design'
        }
      ]
   return (<section id="works" className="block works-block">

                <Container fluid>
                <div className="title-holder">
                    <h2>Our works</h2>
                    <div className="subtitle">our awesome works</div>
                </div>
                    <Row className='portfoliolist'>
                        {
                            worksData.map (works => {
                                return ( 
                                                <Col sm={4} key={works.id}>
                                                    <div className='portfolio-wrapper'>
                                                        <a href={works.link}>
                                                        <Image src={works.image} />
                                                        <div className='label text-center'>
                                                            <h3>{works.title}</h3>
                                                            <p>{works.subtitle}</p>
                                                        </div>
                                                        </a>
                                                    </div>
                                                    </Col>
                                            )
                            })
                        }
                    </Row>
                      <Pagination>{items}</Pagination>
                    </Container>
             </section>);
}
export default AppWork;