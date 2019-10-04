import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import moment from 'moment';
import fetch from 'isomorphic-unfetch';
// import Nav from '../components/nav'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postcode: '',
      timestamp: '',
      idImgUrl: '#',
      idNumber: '',
      address: '',
      faceImgUrl: '#',
      id: '',
      isMatch: '',
      channel: '',
      matchPercentage: '',
      Name: '',
      percentageColor: ''
    };
  }
  setPrecentageColor = (matchPercentage) => {
    if (matchPercentage < 30)
      return 'text-danger blink';
    else if (matchPercentage >= 30 && matchPercentage < 50)
      return 'text-warning';
    else
      return 'text-success';
  }
  convertYYYYMMDDHHmmssDate = (dtStr, dateFormat = 'DD MMM HH:mm') => {
    console.log("dtStr: ", dtStr);
    return dtStr ? moment(moment.unix(dtStr), 'YYYYMMDDHHmmss', false).format(dateFormat) : '';
    // return dtStr ? moment(dtStr, 'YYYYMMDDHHmmss', false).format(dateFormat) : '';
  };

  // async UNSAFE_componentWillMount() {
  //   const {customerInfo}  = this.props
  //   this.setState({
  //     postcode: customerInfo[0].postcode,
  //     timestamp: customerInfo[0].timestamp,
  //     idImgUrl: customerInfo[0].idImgUrl,
  //     idNumber: customerInfo[0].idNumber,
  //     address: customerInfo[0].address,
  //     faceImgUrl: customerInfo[0].faceImgUrl,
  //     id: customerInfo[0].id,
  //     isMatch: customerInfo[0].isMatch,
  //     channel: customerInfo[0].channel,
  //     matchPercentage,
  //     Name: customerInfo[0].Name,
  //     percentageColor: this.setPrecentageColor(matchPercentage)
  //   });
  // }

  // static async getInitialProps() { 
  //   // var proxyUrl = 'http://cors-anywhere.herokuapp.com/';
  //   var URL = 'https://2b7wnyovxk.execute-api.ap-southeast-1.amazonaws.com/default/robotGet';
  //   const res = await fetch( URL)
  //   const customerInfo = await res.json();
  //   // console.log("images:: ", images);
  //   return  { customerInfo };
  // }

  async ss() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var URL = 'https://2b7wnyovxk.execute-api.ap-southeast-1.amazonaws.com/default/robotGet';
    const res = await fetch(proxyUrl + URL)
    const customerInfo = await res.json();
    console.log("images22:: ", customerInfo[0]);
    const matchPercentage = customerInfo[0].matchPercentage;
    this.setState({
      postcode: customerInfo[0].postcode,
      timestamp: customerInfo[0].timestamp,
      idImgUrl: customerInfo[0].idImgUrl,
      idNumber: customerInfo[0].idNumber,
      address: customerInfo[0].address,
      faceImgUrl: customerInfo[0].faceImgUrl,
      id: customerInfo[0].id,
      isMatch: customerInfo[0].isMatch,
      channel: customerInfo[0].channel,
      matchPercentage,
      Name: customerInfo[0].Name,
      percentageColor: this.setPrecentageColor(matchPercentage)
    });

  }

  render() {
    const { matchPercentage, percentageColor, isMatch, id, timestamp, Name, postcode, address, idImgUrl, faceImgUrl } = this.state;
    const displayMatch = isMatch ? "Matches" : "Doesn't Match";
    // this.ss();
    setTimeout(function () { this.ss() }.bind(this), 10);
    console.log("moment.unix() :", moment.unix(timestamp).format());

    return (
      <Fragment>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/static/favicon.ico' importance='low' />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/style.css" />
        </Head>

        <div className='hero container'>
          <div className="row row-margin row-style">
            <h1 className='title'>Welcome to Next.js!</h1>
            <p className='description'>
              To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
          </div>
          <div className="block row-margin">
            <div className='row py-2 row-style'>
              <div className='col-4'>
                {/* <img width="320px" src='/static/MyKad.jpg' /> */}
                <img width="320px" src={idImgUrl} />
              </div>
              <div className='col-4 text-center'>

                {/* <img className='circle' src='/static/omar_test.jpg' /> */}
                <img className='circle' src={faceImgUrl} />
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
            <div className="row pb-1 fs-19">
              <div className="col-4" >
                <div className="row">
                  <div className="col-2 ml-1" style={{ fontSize: 19 }}><b>Name:</b></div>
                  <div className="col-9" style={{ fontSize: 19 }}> {Name}</div>|
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-2 text-center "><b> IC: </b></div>
                  <div className="col-9 " > {id}</div>|
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-3 " ><b>Time:</b></div>
                  <div className="col-9 " > {this.convertYYYYMMDDHHmmssDate(timestamp)}</div>
                </div>
              </div>
            </div>

            <hr className="mb-1 mt-1" />
            <div className="row mb-2 fs-19">
              <div className="col-8" >
                <div className="row">
                  <div className="col-1 mr-3 ml-1 "><b>Address:</b></div>
                  <div className="col-10 ">{address}</div> |
                </div>
              </div>
              <div className="col-4">
                <div className="row ">
                  <div className="col-3" ><b> Postcode: </b></div>
                  <div className="col-9">{postcode}</div>
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
