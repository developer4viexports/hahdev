// src/components/OwnerInfo.jsx
import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import ownerImg from '../assets/images/owner.png';

function OwnerInfo({ owner }) {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bgcolor: 'black',
                color: 'white',
                cursor: 'pointer',
                '&:hover': { opacity: 0.95 },
                transition: 'opacity 0.3s ease',
            }}
            onClick={() => navigate('/about')}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Text */}
                    <Grid item xs={6}>
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.5rem' },
                                fontWeight: 700,
                                lineHeight: 1.2,
                            }}
                        >
                            Get to Know the
                            <br />
                            Visionary Behind
                            <br />
                            Home Away From
                            <br />
                            Home Developments
                            <br />
                            Inc.
                        </Typography>
                        <Typography
                            component="p"
                            sx={{
                                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                                fontWeight: 'bold',
                                mt: 2,
                            }}
                        >
                            Prajwal Shah, CEO
                        </Typography>
                    </Grid>

                    {/* Image */}
                    <Grid item xs={6}>
                        <Box
                            component="img"
                            src={owner}
                            alt="Prajwal Shah"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                // option: if you want the image a bit smaller on mobile:
                                maxHeight: { xs: 3000, sm: 300, md: 'none' },
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default OwnerInfo;
