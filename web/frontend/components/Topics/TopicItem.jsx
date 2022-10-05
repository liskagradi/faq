import React from 'react';
import { Card, ButtonGroup, Button, Icon, Heading } from '@shopify/polaris';
import { DeleteMinor } from '@shopify/polaris-icons';
import { StylesButton } from '../Modal/style';

const TopicItem = ({title, id, editTopic, deleteTopic}) => {
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
          onClick={() => editTopic(id,title)}
          >
            Edit
          </Button>
          <Button 
          onClick={() => deleteTopic(id)}
          >
            <Icon source={DeleteMinor} color="base"/>
          </Button>
        </ButtonGroup>
      </Card.Section>
    </StylesButton>
  </Card>
  );
}

export default TopicItem;