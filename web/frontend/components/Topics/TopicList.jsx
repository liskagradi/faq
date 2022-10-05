import React from 'react';
import TopicItem from './TopicItem';

const TopicList = ({topics, setTopics}) => {

  const deleteTopic = id => {
    const topicsUpdated = topics.filter(topic => topic.id !== id);
    setTopics(topicsUpdated);
  };
  return (
    <>
    {
      topics.map((topic) => 
        <TopicItem 
        title={topic.text}
        key={topic.id}
        id={topic.id}
        deleteTopic={deleteTopic}
        />
      )
    }
  </>
  );
}

export default TopicList;