import { Box, Button, Container, Stack } from "@mui/material";

function App() {
  return (
    <Container>
      <h1>REACT APPLICATION</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Box component="section" sx={{ p: 2, mt: 5, border: "1px dashed grey" }}>
        This Box renders as an HTML section element.
      </Box>
    </Container>
  );
}

export default App;
