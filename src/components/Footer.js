import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import mail from '../img/mail.svg';
import FootLogo from './FootLogo.js';
import pinterest from '../img/pinterest.svg';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const FootBottom = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1000px;
  margin-bottom: 60px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    img {
      max-width: 220px;
    }
  }
`;
const Social = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
  width: 100%;
`;
const SocialLogo = styled.img`
  height: 80px;
  @media (max-width: 900px) {
    height: 50px;
  }
`;
const SocialWrapper = styled.div`
  h3 {
    margin-top: -20px;
  }
  width: 60%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const FooterLogo = styled.div`
  flex: 1;
  & > div {
    width: 80%;
  }
  @media (max-width: 480px) {
    img {
      width: 100%;
    }
  }
  margin-bottom: 30px;
  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <footer>
        <FootBottom>
          <FooterLogo>
            <FootLogo />
          </FooterLogo>
          <SocialWrapper>
            <h1>Follow us</h1>
            <h3>Get all the latest updates</h3>
            <Social>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={'https://www.facebook.com/eatplayloveretreat/'}
              >
                <SocialLogo src={facebook} />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={'https://www.instagram.com/eatplayloveretreat/'}
              >
                <SocialLogo src={instagram} />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={'mailto:eatplayloveretreat@gmail.com'}
              >
                <SocialLogo src={mail} />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={'https://za.pinterest.com/eatplayloveshop/'}
              >
                <SocialLogo src={pinterest} />
              </a>
            </Social>
          </SocialWrapper>
        </FootBottom>
      </footer>
    );
  }
}
