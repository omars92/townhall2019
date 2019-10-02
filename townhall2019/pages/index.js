import React, { Component, Fragment } from 'react';
import Head from 'next/head';
// import fetch from 'isomorphic-unfetch';
// import Nav from '../components/nav'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prencet: '50',
      precentColor: ''
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({
      precentColor: this.precentColor()
    });
    console.log("hello willmount");
  }
  precentColor() {
    if (this.state.prencet < '30')
      return 'text-danger';
    else if (this.state.prencet >= '30' && this.state.prencet < '50')
      return 'text-warning';
    else
      return 'text-success';
  }
  render() {
    return (
      <Fragment>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/static/favicon.ico' importance='low' />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        {/* <Nav /> */}

        <div className='hero container' >
          <div className="row">
            <h1 className='title'>Welcome to Next.js!</h1>
            <p className='description'>
              To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
          </div>
          <div className='row block py-2'>
            <div className='col-4'>
              <img width="320px" src='/static/MyKad.jpg' />
            </div>
            <div className='col-4 text-center'>

              <img className='circle' src='/static/omar_test.jpg' />
            </div>
            <div className={`col-4 text-center num blink ${this.state.precentColor}`}>{this.state.prencet}%</div>
            {/* <a href='https://nextjs.org/docs' className='card'>
                <h3>Documentation &rarr;</h3>
                <p>Learn more about Next.js in the documentation.</p>
              </a>
              <a href='https://nextjs.org/learn' className='card'>
                <h3>Next.js Learn &rarr;</h3>
                <p>Learn about Next.js by following an interactive tutorial!</p>
              </a>
              <a
                href='https://github.com/zeit/next.js/tree/master/examples'
                className='card'
              >
                <h3>Examples &rarr;</h3>
                <p>Find other example boilerplates on the Next.js GitHub.</p>
              </a> */}

          </div>
        </div>

        <style jsx>{`
   
      .hero {
        width: 100%;
        color: #333;
        background-image="./static/wallpaper.jpg"
      }
      
      .circle {
        border-radius: 50%;
        width: 200px
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 30px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
      
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .num {
        font-size: 130px;
      }
      .green-num-color {
        color: green;
      }
      .yellow-num-color {
        color: yellow;
      }
      .red-num-color {
        color: red;
      }
      .block {
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .blink {
        animation: blink-animation 1s steps(5, start) infinite;
        -webkit-animation: blink-animation 1s steps(5, start) infinite;
      }
      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
      @-webkit-keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
    `}</style>
      </Fragment>
    );
  }
}

export default Home;
