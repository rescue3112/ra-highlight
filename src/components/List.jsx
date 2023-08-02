import React from 'react'
import Video from './Video'
import Article from './Article'
import withHighlight from './Highlight'

const HighlitedVideo = withHighlight(Video);
const HighlitedArticle = withHighlight(Article);

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlitedVideo {...item} />
                );

            case 'article':
                return (
                    <HighlitedArticle {...item} />
                );
        }
    });
};

export default List;
