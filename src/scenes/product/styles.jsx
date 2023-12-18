import { useMediaQuery, useTheme } from "@mui/material";

export const useStyles = () => {
    const theme = useTheme()
    
    return {
        productContainer: {
            
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
            overFlow: 'hidden'
        },
        imgDisplay: {
            width: '90%',
            display: {
                md: 'grid'
            },
            gridTemplate: 'auto auto / repeat(2, 1fr)',
            gridGap: '1rem'
        }
    }
}