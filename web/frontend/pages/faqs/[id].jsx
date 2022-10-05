import React, {useState, useContext} from 'react';
import { Card, Page, Layout, SkeletonBodyText, EmptyState } from "@shopify/polaris";
import { Loading, TitleBar } from "@shopify/app-bridge-react";
import FaqEdit from '../../components/FAQ/FaqEdit';
import CreateTopic from '../../components/Modal/CreateTopic';
import { FaqContext } from '../../components/providers/FaqProvider';
const Faq = () => {

  const breadcrumbs = [{ content: "FAQ", url: "/" }];

  const isLoading = false;
  const isRefetching = false;
  const FaqCode = {
    createdAt: "2022-06-13",
    destination: "checkout",
    title: "My first Topic",
    product: {}
  };

  const handleModal = () => {
    setToggleModal(!toggleModal);
  };

  //Topic Modal
  const [toggleModal, setToggleModal] = useState(false);
  
  //topics 
  const [topics, setTopics] = useState([]);

  const {state} = useContext(FaqContext)
  
  if (isLoading || isRefetching) {
    return (
      <Page>
        <TitleBar
          title="Edit FAQ"
          breadcrumbs={breadcrumbs}
          primaryAction={null}
        />
        <Loading />
        <Layout>
          <Layout.Section>
            <Card sectioned title="FAQ Title">
              <SkeletonBodyText />
            </Card>
            <Card title="Topics">
              <Card.Section>
                <SkeletonBodyText lines={1} />
              </Card.Section>
              <Card.Section>
                <SkeletonBodyText lines={3} />
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
  const Markup = 
  !topics?.length ? (
    <Card sectioned>
    <EmptyState
      heading="Create any number of topics"
      action={{
        content: 'Create Topic',
        onAction: () => handleModal()
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      fullWidth
    >
    </EmptyState>
  </Card>) : 
 null;

  return (
    <Page>
      <TitleBar
        title={`Edit FAQ ${state.title}`}
        breadcrumbs={breadcrumbs}
        primaryAction={{
          content:"Create Topic",
          onAction:()=> handleModal(),
        }}
        secondaryActions={[
          {content: 'Edit'},
        ]}
      />
      <FaqEdit FaqCode={FaqCode}
       topics={topics}
       setTopics={setTopics}
       />
      {Markup}
      <CreateTopic 
        setToggleModal={setToggleModal}
        toggleModal={toggleModal}
        topics={topics}
        setTopics={setTopics}
      />
    </Page>
  );
}

export default Faq;