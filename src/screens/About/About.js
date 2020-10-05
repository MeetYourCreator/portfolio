import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    jhustifyContent: 'center',
    backgroundColor: 'blue'
  },

  press: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },

  image: {
    display: 'flex',
    width: 600
  }

})

export default useStyles;