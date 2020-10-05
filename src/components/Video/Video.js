import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({

  video: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: -1,
    objectFit: 'cover',
    width: '100w',
    // height: '0vh',
    pointerEvents: 'none'
  },

})

export default useStyles;