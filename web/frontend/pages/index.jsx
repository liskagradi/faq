import {
  Page,
  Layout,
  Frame
} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import Home from '../components/Home/Home';


export default function HomePage() {
  return (
    <Frame>
      <Page>
        <TitleBar title="FAQ APP" primaryAction={null} />
        <Layout>
          <Layout.Section>
            <Home/>
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  );
}
