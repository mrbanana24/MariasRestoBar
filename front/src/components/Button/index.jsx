import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Regular button
const RButton = ({onClick, text, extraStyle}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick} style={extraStyle} >{text}</Button>
    </Stack>
  );
}

export default RButton;
