import React, { Component, Fragment } from 'react';
import Head from 'next/head';
// import "../scss/styles.scss";
// import fetch from 'isomorphic-unfetch';
// import Nav from '../components/nav'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postcode: 'postcode',
      timestamp: '1570073289026',
      idImgUrl: "idImgUrl",
      idNumber: "idNumber",
      address: "address",
      faceImgUrl: "faceImgUrl",
      id: "1570073289026",
      isMatch: false,
      channel: "7",
      matchPercentage: '3.3',
      Name: "name",

      percentageColor: ''

    };
  }
  UNSAFE_componentWillMount() {
    this.setState({
      percentageColor: this.setPrecentageColor()
    });
    console.log("hello willmount");
  }
  setPrecentageColor() {
    if (this.state.matchPercentage < 30)
      return 'text-danger blink';
    else if (this.state.matchPercentage >= 30 && this.state.matchPercentage < 50)
      return 'text-warning';
    else
      return 'text-success';
  }
  render() {
    const { matchPercentage, percentageColor, isMatch } = this.state;
    const displayMatch = isMatch ? "Matches" : "Doesn't Match";
    console.log("")
    return (
      <Fragment>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/static/favicon.ico' importance='low' />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/style.css" />
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
            <div className={`col-4 text-center`}>
              <div className={`match pb-5 pt-2 ${percentageColor}`}>
                <u>{displayMatch}</u>
              </div>
              <div className={`num ${percentageColor}`}>
                {matchPercentage}%
              </div>
            </div>
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
      </Fragment>
    );
  }
}

export default Home;
