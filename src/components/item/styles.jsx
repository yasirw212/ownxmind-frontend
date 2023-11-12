import { useMediaQuery, useTheme } from "@mui/material";

export const useStyles = () => {
    const theme = useTheme()
    
    return {
       button: {
        padding: {
            xs: '.25rem',
            sm: '.4rem .25rem'
        }
       },
       homeButton: {
        padding: {
            xs: '.25rem',
            md: '.5rem 1rem'
        }
       },
       buttonText: {
        fontSize: {
            xs: '.4rem',
            sm: '.5rem',
        }
       } ,
       cardActions: {
        display: 'flex',
        justifyContent: {
            xs: 'center',
            md: 'space-around',
            lg: 'center'
        },
        padding: '0rem 0 2rem 0',
        width: {
            sm: '60%',
            md: '75%',
            lg: '70%'
        },
        margin: '0 auto',
        // background: 'pink'
       },
       cardContent: {

            paddingTop: ''
       },
       contentTypography: {
            fontSize: {
                xs: '.75rem',
                sm: '1rem',
            },
            margin: 0,
            padding: 0
       }
    }
}