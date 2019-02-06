import React from 'react';
import PageContainer from '../components/styles/PageContainer';
import styled from 'styled-components';

const ReviewStyle = styled.div`
  color: ${props => props.theme.textBrown};
  font-style: italic;
  font-weight: 600;
  margin-bottom: 3em;
  margin-top: 5em;
  text-align: left;
  span {
    padding-left: 2em;
    font-size: 1.4em;
    margin-top: -5px;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      left: 7px;
      top: 50%;
      margin-top: -1px;
      height: 2px;
      width: 15px;
      background-color: ${props => props.theme.textBrown};
    }
  }
`;

class Review extends React.Component {
  render() {
    return (
      <PageContainer>
        <ReviewStyle>
          <p>“{this.props.review}”</p>
          <span>{this.props.author}</span>
        </ReviewStyle>
      </PageContainer>
    );
  }
}

export default Review;
