import React, {useState} from 'react';
import { Provider, TitleBar} from '@shopify/app-bridge-react';
import { EmptyState, Layout, Page, Card } from '@shopify/polaris';
import FaqList from '../FAQ/FaqList';
import CreateFAQ from '../Modal/CreateFAQ';
import FaqProvider from '../providers/FaqProvider';

const Home = () => {

  //Empty State

  //Modal state
  const [active, setActive] = useState(false);
  const handleModal = () => {
    setActive(!active);
  };

  //FAQS
  const [faqs, setFaqs] = useState([]);

  const Markup = 
  !faqs?.length ? (
    <Card sectioned>
    <EmptyState
      heading="Create an FAQ section to get started"
      action={{
        content: 'Create FAQ',
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
      title="FAQ APP" 
      primaryAction={{
        content:"Create FAQ",
        onAction:()=> handleModal(),
      }}
      />
      <Layout fullWidth>
        <Layout.Section fullWidth>
        {Markup}
          <FaqList 
            faqs={faqs}
            setFaqs={setFaqs}
            setActive={setActive}
            /> 
        </Layout.Section>
      </Layout>
      <CreateFAQ 
      active={active} 
      setActive={setActive}
      faqs={faqs}
      setFaqs={setFaqs}
      />
    </Page>
  );
}

export default Home;