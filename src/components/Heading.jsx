import React from 'react';
import Card from './UI/Card';

import style from './Heading.module.css';

function Heading() {
  return (
    <Card>
      <h2 className={style.heading}>Simple React Project</h2>
    </Card>
  )
}

export default Heading
