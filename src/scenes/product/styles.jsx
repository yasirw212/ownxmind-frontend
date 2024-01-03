import { useMediaQuery, useTheme } from "@mui/material";

export const useStyles = () => {
    const theme = useTheme()
    
    return {
        productContainer: {
            position: 'relative',
            top: '-1vh',
            margin: '0 auto',
            overFlow: 'hidden',
            fontFamily: 'serif'
        },
        imgContainer: {
            display: {
                md: 'grid'
            },
            width: '90%',
            margin: '0 auto',
            overflowY: 'hidden',
            overflowX: 'scroll'
        },
        imgDisplay: {
            width: '90%',
            maxWidth: '800px',
            display: {
                xs: 'flex',
                sm: 'grid'
            },
            gridTemplate: 'auto auto / repeat(2, 1fr)',
            gridGap: '1rem'
        }
    }
}