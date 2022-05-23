import { Global } from '@mantine/core'

function GlobalStyles({ modelOpened }) {
  return (
    <Global
      styles={(theme) => ({
        body: {
          overflow: modelOpened ? 'hidden' : 'overlay',
        },
        '::-webkit-scrollbar': {
          width: '16px',
          position: 'fixed',
        },

        '::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundClip: 'content-box',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.orange[5]
              : theme.colors.pink[5],
        },

        '::-webkit-scrollbar-track': {
          backgroundColor: theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
        },

        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.fn.rgba(
            theme.colorScheme === 'dark'
              ? theme.colors.orange[5]
              : theme.colors.pink[5],
            0.7
          ),
        },
      })}
    />
  )
}

export default GlobalStyles
