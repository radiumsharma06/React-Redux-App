import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

const Heading = ({headingText}) =>
<Header as="h3" icon textAlign="center">
    <Icon name='tv' />
    <Header.Content>
        {headingText}
    </Header.Content>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/todos'>About</Link></li>
      </ul>
    </nav>
</Header>

export default Heading;
