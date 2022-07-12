import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import styled, {keyframes} from 'styled-components';
import { bounce,fadeIn,shake,zoomIn } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const Shake = styled.div`animation: 8s ${keyframes`${shake}`} infinite`;

const getTimedelta = () => {
  const now = new Date();
  const timedelta = new Date(`2023-1-1`) - now.getTime();
  const days = Math.floor(timedelta / (24 * 60 * 60 * 1000));
  const hours = Math.floor((timedelta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((timedelta % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timedelta % (60 * 1000)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds
  };
};

function App() {
  const [countdown, setCountdown] = useState();
  const [loading, setLoading] = useState(true);
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timedelta = getTimedelta();

      setCountdown(timedelta);
      setLoading(false)

      if (timedelta.seconds < 0) {
        setIsNewYear(true)
      }

    }, 1000)

    return () => clearInterval(interval);
  });

  if (loading) {
    return (
      <div className='body' style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/image5.jpg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        minHeight: '100vh',
        margin: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <p style={{ fontSize: 60, fontWeight: 'bold', textShadow: '0px 3px 0px #b2a98f,0px 14px 10px rgba(0,0,0,0.15),0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1' }}>Loading...</p>
        <ReactLoading type="spin" color="#FFFFFF"
          height={100} width={50} />
      </div>
    )
  }

  if (isNewYear) {
    return (
      <div className='body' style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/image4.jpg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        minHeight: '100vh',
        margin: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <Bounce><p style={{ fontSize: 80, fontWeight: 'bold', textShadow: '2px 5px 5px black' }}>HAPPY NEW YEAR 2023!!!🥳</p></Bounce>
      </div>
    )
  }


  return (
    <div className='body' style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/image6.jpg'})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      minHeight: '100vh',
      margin: 0,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      <Shake><p style={{ fontSize: 75, fontWeight: 'bold', textShadow: '2px 5px 5px red' }}>New Year Countdown</p></Shake>
      <div className='countdownElement' style={{ display: 'flex' }}>
        <div className='countdownDays' style={{ textAlign: 'center' }}>
          <p className='numberText' style={{ margin: '0 4rem', lineHeight: 5, fontWeight: 'bold', fontSize: '35px', textShadow: '2px 5px 5px red' }} >{countdown.days}</p>
          <span style={{ fontSize: '20px', fontFamily: 'cursive', textShadow: '2px 5px 5px red' }}>days</span>
        </div>
        <div className='countdownHours' style={{ textAlign: 'center' }}>
          <p className='numberText' style={{ margin: '0 4rem', lineHeight: 5, fontWeight: 'bold', fontSize: '35px', textShadow: '2px 5px 5px red' }} >{countdown.hours}</p>
          <span style={{ fontSize: '20px', fontFamily: 'cursive', textShadow: '2px 5px 5px red' }}>hours</span>
        </div>
        <div className='countdownMinutes' style={{ textAlign: 'center' }}>
          <p className='numberText' style={{ margin: '0 4rem', lineHeight: 5, fontWeight: 'bold', fontSize: '35px', textShadow: '2px 5px 5px red' }} >{countdown.minutes}</p>
          <span style={{ fontSize: '20px', fontFamily: 'cursive', textShadow: '2px 5px 5px red' }}>minutes</span>
        </div>
        <div className='countdownSeconds' style={{ textAlign: 'center' }}>
        <p className='numberText' style={{ margin: '0 4rem', lineHeight: 5, fontWeight: 'bold', fontSize: '35px', textShadow: '2px 5px 5px red' }} >{countdown.seconds}</p>
          <span style={{ fontSize: '20px', fontFamily: 'cursive', textShadow: '2px 5px 5px red' }}>seconds</span>
        </div>

      </div>

    </div>
  );
}

export default App;