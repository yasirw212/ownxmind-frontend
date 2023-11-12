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
                xs: 'flex',
                md: 'grid'
            },
            // width: {
            //     md: '80%'
            // },
            width: '90%',
            margin: '0 auto'
        }
    }
}