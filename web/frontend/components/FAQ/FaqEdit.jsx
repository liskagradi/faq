import React from 'react';
import {Layout, Page } from "@shopify/polaris";
import TopicList from '../Topics/TopicList';

const FaqEdit = ({topics, setTopics}) => {


  return (
    <Page title="Topics">
      <Layout fullWidth>
        <Layout.Section fullWidth>
          <TopicList 
          topics={topics}
          setsetTopics={setTopics}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default FaqEdit;