import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },

  '@media (max-width: 505px)': {
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'

    }
  }
})

export default useStyles;