import React from 'react'
import New from './New'
import Popular from './Popular'

function withHighlight(Component) {
    return function(props) {
      if (props.views < 100) {
        return <New> <Component {...props} /> </New>;
      } else if (props.views > 1000) {
        return <Popular> <Component {...props} /> </Popular>;
      } else {
        return <Component {...props} />;
      }
    }
  }

  export default withHighlight;
