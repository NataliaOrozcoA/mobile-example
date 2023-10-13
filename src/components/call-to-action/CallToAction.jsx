import React from 'react'
import { createRipples } from '../../utils/button'


const style = {
    position: 'relative',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px 40px',
    backgroundColor: 'var(--main-color)',
    borderRadius: '10px',
    fontWeight: '700',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
}

function CallToAction({children}) {

    const handleClick = (e) => {
        createRipples({event: e});
    }

  return (
    <div style={style} onClick={handleClick}>{children}</div>
  )
}

export default CallToAction;