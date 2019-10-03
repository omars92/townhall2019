import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import moment from 'moment';
// import "../scss/styles.scss";
// import fetch from 'isomorphic-unfetch';
// import Nav from '../components/nav'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postcode: 'postcode',

      // timestamp: 1570073289026,
      timestamp: 20180916062330,
      idImgUrl: "idImgUrl",
      idNumber: "idNumber",

      address: "address",

      faceImgUrl: "faceImgUrl",
      id: "1570073289026",
      isMatch: true,
      channel: "7",
      matchPercentage: '73.3',
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
  setPrecentageColor = () => {
    if (this.state.matchPercentage < 30)
      return 'text-danger blink';
    else if (this.state.matchPercentage >= 30 && this.state.matchPercentage < 50)
      return 'text-warning';
    else
      return 'text-success';
  }
  convertYYYYMMDDHHmmssDate = (dtStr, dateFormat = 'DD MMM YYYY HH:mm') => {
    // return dtStr ? moment(moment.unix(dtStr).format(), 'YYYYMMDDHHmmss', false).format(dateFormat) : '';
    return dtStr ? moment(dtStr, 'YYYYMMDDHHmmss', false).format(dateFormat) : '';
  };
  render() {
    const { matchPercentage, percentageColor, isMatch, id, timestamp } = this.state;
    const displayMatch = isMatch ? "Matches" : "Doesn't Match";
    console.log("moment.unix() :" , moment.unix(timestamp).format() );
    return (
      <Fragment>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/static/favicon.ico' importance='low' />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>

        <div className='hero container'>
          <div className="row row-margin">
            <h1 className='title'>Welcome to Next.js!</h1>
            <p className='description'>
              To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
          </div>
          <div className="block row-margin">
            <div className='row py-2'>
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
            </div>
            <hr className="mb-1" />
            <div className="row">
              <div className="col-4" >
                <div className="row">
                  <div className="col-2" style={{ fontSize: 19 }}><b>Name:</b></div>
                  <div className="col-9" style={{ fontSize: 19 }}> Omar Abdul Rahman Salim</div>|
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-2 text-center" style={{ fontSize: 19 }}><b> IC: </b></div>
                  <div className="col-9" style={{ fontSize: 19 }}> {id}</div>|
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-3" style={{ fontSize: 19 }}><b>Time:</b></div>
                  <div className="col-9" style={{ fontSize: 19 }}> {this.convertYYYYMMDDHHmmssDate(timestamp + '' )}</div>
                </div>
              </div>
            </div>

            <hr className="mb-1" />
            <div className="row mb-2">
              <div className="col-8" >
                <div className="row">
                  <div className="col-1 mr-2" style={{ fontSize: 19 }}><b>Address:</b></div>
                  <div className="col-10" style={{ fontSize: 19 }}>Pacific 63, Jalan 13/6, Section 13, 46200 Petaling Jaya, Selangor</div> |
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-3" style={{ fontSize: 19 }}><b> Postcode: </b></div>
                  <div className="col-9" style={{ fontSize: 19 }}>46200</div>
                </div>
              </div>
            </div>
            
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
      </Fragment>
    );
  }
}

export default Home;
