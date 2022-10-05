import {useState, useCallback} from 'react';
import {Modal, TextField, Button } from "@shopify/polaris";
import { v4 as uuidv4 } from 'uuid';

const CreateTopic = ({setToggleModal, toggleModal, setTopics, topics}) => {
 
  const [titleTopic, setTitleTopic] = useState('');
  const handleTitleTopic = useCallback((newValue) => setTitleTopic(newValue), []);


  const registerTopic = () => {

    const newTopic = {
      id: uuidv4(),
      text: titleTopic
    };

    if (newTopic.text.trim()) {
      newTopic.text = newTopic.text.trim();

      const topicsUpdated = [newTopic, ...topics];
      setTopics(topicsUpdated);
    }

    setToggleModal(false);
    setTitleTopic('');
  };
  return (
    <div>
      <Modal
        small
        open={toggleModal}
        onClose={() => setToggleModal(false)}
        title="Create topic for [faq title]"
      >
        <Modal.Section>
            <TextField
              label="Title"
              value={titleTopic}
              onChange={handleTitleTopic}
              autoComplete="off"
            />
            <Button 
              primary 
              onClick={() => registerTopic()} 
            >
              Save
            </Button>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default CreateTopic;