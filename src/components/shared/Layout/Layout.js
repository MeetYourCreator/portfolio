import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    // width: '100vw',
    backgroundColor: 'rgb(0,0,0)',
    overflow: 'hidden'
  },

  layoutChildren: {
    overflow: 'hidden',
    scrollBehaviour: 'smooth',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'center'
  }

})

export default useStyles;