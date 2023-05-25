import { LayOut } from '@/components/layOuts'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { GetServerSideProps } from 'next'

interface Props {
    theme: string
}

const themeChanger: FC<Props> = ({theme}) => {
    const [currentTheme, setCurrentTheme] = useState(theme);

    const selectedTheme = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentTheme(e.target.value);
    }

    useEffect(() => {
        Cookies.set('theme', currentTheme);
    },[currentTheme])
  return (
    <LayOut>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>tema</FormLabel>
                    <RadioGroup 
                        value={currentTheme}
                        onChange={selectedTheme}
                    >
                        <FormControlLabel value='light' control={<Radio/>} label="light"></FormControlLabel>
                        <FormControlLabel value='dark' control={<Radio/>} label="dark"></FormControlLabel>
                        <FormControlLabel value='custom' control={<Radio/>} label="custom"></FormControlLabel>
                    </RadioGroup>
                </FormControl>
                <Button>request</Button>
            </CardContent>
        </Card>
    </LayOut>
  )
}

export default themeChanger;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    const {theme = 'light'} = req.cookies;
    const validTheme = ['light','dark','custom'];

    return {
        props: {
            theme: validTheme.includes(theme)? theme: 'light'
        }
    }
}