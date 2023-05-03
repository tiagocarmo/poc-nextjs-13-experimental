'use client';

import { ThemeProvider } from 'styled-components';

const theme = {
  r: 'red',
  g: 'green',
  b: 'blue'
};

export default function StyledComponentsTheme({
  children
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
