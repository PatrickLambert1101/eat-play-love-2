import React from 'react';
import PageContainer from '../../components/styles/PageContainer.js';
import Layout from '../../components/layout';
import AnimateContent from '../../components/AnimateContent';

export default () => (
  <Layout location={this.props.location.pathname}>
    <PageContainer>
      <AnimateContent>
        <h1>Thank you</h1>
        <h4>Your message has been sent</h4>
      </AnimateContent>
    </PageContainer>
  </Layout>
);
