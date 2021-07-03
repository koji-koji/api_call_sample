import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#222', 
      main: '#222',
      dark: '#222',
      contrastText: '#fff'
    },
    //secondary: {
    //  main: '#19857b',
    //},
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme