import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  projectsContainer: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  zIndex: -1,
  objectFit: 'cover',
  width: '100w',
  pointerEvents: 'none'
},
})

export default useStyles;