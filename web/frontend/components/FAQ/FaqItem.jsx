import React, { useContext } from 'react';
import { Card, ButtonGroup, Button, Icon, Heading } from '@shopify/polaris';
import { DeleteMinor } from '@shopify/polaris-icons';
import { StylesButton } from '../Modal/style';
import { useNavigate } from '@shopify/app-bridge-react';
import { FaqContext } from '../providers/FaqProvider';


const FaqItem = ({title, id, deleteFaq}) => {
  
  const navigate = useNavigate();
  const {setState} = useContext(FaqContext)
  
  const faq = () => {
    setState({title,id})
    navigate(`/faqs/${id}`)
  }
  
  return (
    <Card >
      <StylesButton>
        <Card.Section>
          <Heading>
            {title} -- ID: {id}
          </Heading>
        </Card.Section>
        <Card.Section>
          <ButtonGroup>
            <Button 
            primary 
            onClick={() => faq()}
            >
              Edit
            </Button>
            <Button 
            onClick={() => deleteFaq(id)}
            >
              <Icon source={DeleteMinor} color="base"/>
            </Button>
          </ButtonGroup>
        </Card.Section>
      </StylesButton>
    </Card>
  );
}

export default FaqItem;