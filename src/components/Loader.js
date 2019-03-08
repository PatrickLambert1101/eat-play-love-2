import React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';
import styled from 'styled-components';
import posed from 'react-pose';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const imgStyles = { objectFit: 'contain' };

const Spin = posed.div({
  hidden: {
    opacity: 0,
    position: 'absolute',
    transition: {
      opacity: { ease: 'easeOut', duration: 500, delay: 200 }
    }
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 500 }
    }
  }
});

const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    position: absolute;
    width: 120px;
    left: 50vw;
    top: 30vh;
    margin-left: -60px;
    opacity: 1;
    animation: spin 1.7s linear infinite;
  }
`;
export default function Loader() {
  return (
    <div>
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <Spin
              pose={
                ['exiting'].includes(transitionStatus) ? 'visible' : 'hidden'
              }
            >
              <StaticQuery
                query={graphql`
                  query LoaderQuery {
                    file(relativePath: { regex: "img/epl.png/" }) {
                      name
                      childImageSharp {
                        fluid(maxWidth: 120, maxHeight: 120, quality: 80) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                  }
                `}
                render={data => (
                  <Spinner>
                    <PreviewCompatibleImage
                      imgStyle={imgStyles}
                      imageInfo={data.file}
                    />
                  </Spinner>
                )}
              />
            </Spin>
          );
        }}
      </TransitionState>
    </div>
  );
}
