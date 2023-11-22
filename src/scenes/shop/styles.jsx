import { useMediaQuery, useTheme } from "@mui/material";

export const useStyles = () => {
    const theme = useTheme()

    return {
        shopContainer: {
            position: 'relative',
            padding: {
                xs: '20px 10px',
                md: '20px 40px'
            },
            width: '90%',
            margin: {
                xs: '0 auto',
                xl: 'none'
            }
        },
        productsContainer: {
            display: 'grid',
            width: '100%',
            gridTemplate: {
                xs: 'auto auto / repeat(2, 1fr)',
                sm: 'auto auto / repeat(3, 1fr)',
                lg: 'auto auto / repeat(5, 1fr)'
            },
            gridGap: {
                xs: '1rem',
                md: '1.5rem'
            },
            marginTop: '2.5rem'
        }
    }
}