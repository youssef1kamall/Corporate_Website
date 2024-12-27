import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AboutusImage from '../assets/img1.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

function AppAbout ()

{
    const html=60;
    const responsive=80;
    const photoshop=85;

    return (
      <section id="about" className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About us</h2>
                    <div className='subtitle'>
                        Learn More About us
                    </div>
                </div>
            <Row>
                <Col sm={6}>
                <Image src={AboutusImage} />
                </Col>
                <Col sm={6}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit perspiciatis quidem, vero veniam deleniti distinctio ipsa, obcaecati, incidunt magni labore sunt voluptates porro autem culpa rerum! Voluptas, hic eos?
                </p>
                <p>
                    Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolorsit  Lorem ipsum dolor amet consectetur adipisicing elit. Hic sit perspiciatis quidem, vero veniam deleniti distinctio ipsa, obcaecati, incidunt magni labore sunt voluptates porro autem culpa rerum! Voluptas, hic eos?
                </p>
                    <div className='progress-block'>
                            <h4>HTML/CSS/JAVASCRIPT</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                    </div>
                    <div className='progress-block'>
                            <h4>Resposive</h4>
                            <ProgressBar now={responsive} label={`${responsive}%`} />
                    </div>
                    <div className='progress-block'>
                            <h4>PHOTOSHOP</h4>
                            <ProgressBar now={photoshop} label={`${photoshop}%`} />
                    </div>
                </Col>
            </Row>
            </Container>
      </section>
    );

}
export default AppAbout;