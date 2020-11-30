import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'

  },

  '@media (max-width: 415px)': {
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'

    }
  }
})

export default useStyles;