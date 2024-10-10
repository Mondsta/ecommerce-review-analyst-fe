// pages/index.js
import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";

const Index = () => {
  return (
    <main>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" sx={{ my: 8 }}>
          <Typography variant="h2" fontWeight="bold">
            Welcome to E-Commerce Anomaly Analyst
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Try Now
          </Button>
        </Box>

        {/* Feature Section */}
        <Grid container spacing={4} sx={{ my: 8 }}>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <img
                src="/images/feature1.png"
                alt="Feature 1"
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Intelligent Responses
              </Typography>
              <Typography color="textSecondary">
                Get accurate and meaningful answers for your queries.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <img
                src="/images/feature2.png"
                alt="Feature 2"
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Personalization
              </Typography>
              <Typography color="textSecondary">
                Tailor-made responses based on your preferences.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <img
                src="/images/feature3.png"
                alt="Feature 3"
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Seamless Experience
              </Typography>
              <Typography color="textSecondary">
                Enjoy smooth and intuitive conversations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Index;
