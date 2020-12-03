import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'

  },

  '@media (max-width: 505px)': {
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'

    }
  }
})

export default useStyles;