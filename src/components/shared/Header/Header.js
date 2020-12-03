import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'

  },

  '@media (max-width: 505px)': {
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'

    }
  }
})

export default useStyles;