import {useState, useCallback} from 'react';
import {Modal, TextField, Button } from "@shopify/polaris";
import { v4 as uuidv4 } from 'uuid';
import { StylesButton } from './style';


const CreateFAQ = ({setActive, active, setFaqs, faqs}) => {
 
  const [title, setTitle] = useState('');
  const handleTitle = useCallback((newValue) => setTitle(newValue), []);


  const registerFaq = () => {
    
    const newFaq = {
      id: uuidv4(),
      text: title
    };

    if (newFaq.text.trim()) {
      newFaq.text = newFaq.text.trim();

      const faqsUpdated = [newFaq, ...faqs];
      setFaqs(faqsUpdated);
    }
    setActive(false);
    setTitle('');
  };
  return (
    <div>
      <Modal
        small
        open={active}
        onClose={() => setActive(false)}
        title="Create FAQ section"
      >
        <Modal.Section>
        <StylesButton>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitle}
            autoComplete="off"
          />
          <Button onClick={() => registerFaq()} >
            Save
          </Button>
          </StylesButton>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default CreateFAQ;