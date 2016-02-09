import React from 'react';
import Button from './index';

export default (
  <div style={{ padding: '20px' }}>
    <p><Button href="http://www.economist.com">Load more</Button></p>
    <p><Button disabled href="http://www.economist.com">I am disabled</Button></p>
    <p><Button shadow href="http://www.economist.com">I have a shadow</Button></p>
    <p>
      <Button shadow icon={{ icon: 'facebook', size: '28px' }}
        href="http://www.economist.com"
      >
        I have an icon
      </Button>
    </p>
    <p>
      <Button unstyled icon={{
        icon: 'video' }}
        href="http://www.economist.com"
      >
        Unstyled with icon
      </Button>
    </p>
    <p>
      <Button icon={{
        icon: 'video',
        color: 'honolulu',
        'useBackground': true }}
        href="http://www.economist.com"
      >
        Use icon as background
      </Button>
    </p>
    <p>
      <Button icon={{ icon: 'facebook', size: '56px', rounded: true }}
        href="http://www.economist.com"
        i13nModel={{
          action: 'click',
          element: 'facebook link',
        }}
      >
        I have an bigger icon and I'm tracked
      </Button>
    </p>
  </div>
);
