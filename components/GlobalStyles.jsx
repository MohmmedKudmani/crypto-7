import { Global } from '@mantine/core'

function GlobalStyles({ modelOpened }) {
  return (
    <Global
      styles={(theme) => ({
        body: {
          paddingTop: '80px', // header height value
          overflow: modelOpened ? 'hidden' : 'visible',
        },

        '::-webkit-scrollbar': {
          width: '16px',
        },

        '::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundClip: 'content-box',
          backgroundColor: '#888',
        },

        '::-webkit-scrollbar-track': {
          borderRadius: '8px',
        },

        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
      })}
    />
  )
}

export default GlobalStyles
