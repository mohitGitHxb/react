import React , {useState , useEffect}from 'react'
import { Col , Row , Container } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import HeaderImg from '../assets/img/header-img.svg';
const Banner = () => {

    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random()*100);

    const toRotate = ['Web Developer' , 'Pro Player' , 'DSA GOD'];
        const period = 2000;


        const tick  = ()=>{
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let UpdatedText = isDeleting ? fullText.substring(0,text.length - 1) :fullText.substring(0,text.length + 1);

            setText(UpdatedText);
            // setLoopNum(i);
            if(isDeleting){
                setDelta(prev => prev / 2);
            }
            if(!isDeleting && UpdatedText === fullText){
                setDelta(period);
                setIsDeleting(true);
            }
            else if(isDeleting && UpdatedText === ''){
                setIsDeleting(false);
                setLoopNum(loopNum+1);
                setDelta(500);
            }
        }
        useEffect(()=>{
            let ticker = setInterval(() => {
                tick()
            },delta);

            return () => clearInterval(ticker);
        },[text]);
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome</span>
                <h1>{` ${'MosfetAmplifer : '} ${text}`}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                <button onClick={(e)=>console.log(e)}>
                    Let's connect
                    <ArrowRightCircle size={25} />
                </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={HeaderImg} alt="header-image"/>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
