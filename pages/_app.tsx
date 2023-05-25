import { darkTheme, lightTheme, customTheme } from '@/themes'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import Cookies from 'js-cookie'
import type { AppContext, AppProps } from 'next/app'
import { useEffect, useState } from 'react'

interface Props extends AppProps{
  theme: string
}
export default function App({ Component, pageProps, theme = 'dark'}: Props) {
  const [currentTheme,setCurrentTheme] = useState(lightTheme)
  const cookieTheme = Cookies.get('theme') || 'dark';

  useEffect(() => {
    const selectedTheme: Theme = cookieTheme === 'light' 
  ? lightTheme 
  : cookieTheme === 'dark' ? darkTheme
  : customTheme

    setCurrentTheme(selectedTheme);
  },[])
  


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// App.getInitialProps = async(appContext: AppContext) => {

//   const validTheme = ['light', 'dark', 'custom'];
//   const {theme} = appContext.ctx.req? (appContext.ctx.req as any).cookies: {theme: 'light'};

//   return {
//     theme: validTheme.includes(theme)? theme: 'light'
//   }
// }
