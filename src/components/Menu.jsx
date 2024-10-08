import React from 'react';
import styled from 'styled-components'
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
const Container = styled.div`
  flex:1;
  background-color:${({theme})=>theme.bgLighter};
  height:100vh;
  color:${({theme})=>theme.text};
  font-size:15px;
  position:sticky;
  top:0;

`
const Wrap =styled.div`
  padding: 18px 26px;
`
const Logo = styled.div`
   display:flex;
   align-items:center;
   gap:5px;
   font-weight:bold;
   margin-bottom:25px;
   font-family:courier;
`

const Items = styled.div`
 display:flex;
 align:center;
 gap:10px;
 curser:pointer;
 padding:8px 0px;
 `
 const Hr = styled.hr`
  margin:15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
 `
 const Login = styled.div``
 const Button = styled.button`
  padding:5px 15px;
  background-color:transparent;
  border:1px solid #3ea6ff;
  color:#3ea6ff;
  border-radius:3px;
  font-weight:500;
  margin-top:10px;
  courser:pointer;
  display:flex;
  align-items:center;
  gap:5px;
 `
const Menu = ({darkMode, setDarkMode}) => {

  return (
    <Container>
        <Wrap>
            <Logo>
                <YouTubeIcon/>
                VideoApp
            </Logo>
            <Items>
                <HomeIcon/>
                Home
            </Items>
            <Items>
                <ExploreIcon/>
                Explore
            </Items>
            <Items>
                <SubscriptionsIcon/>
                Subscription
            </Items>
            <Hr/>
            <Items>
                <LibraryAddIcon/>
                Library
            </Items>
            <Items>
                <HistoryIcon/>
                History
            </Items>
            <Hr/>
            <Login>
                Sign in Here.
                <Button><AccountCircleIcon/>SIGN IN</Button>
            </Login>
            <Hr/>
            <Items>
                <MusicNoteIcon/>
                Music
            </Items>
            <Items>
                <SportsCricketIcon/>
                Sports
            </Items>
            <Items>
                <NewspaperIcon/>
                News
            </Items>
            <Items>
                <LocalMoviesIcon/>
                Entertainment
            </Items>
            <Hr/>
            <Items>
                <SettingsIcon/>
                Setting
            </Items>
            <Items onClick={()=>setDarkMode(!darkMode)}>
                <LightModeIcon/>
                Light Mode
            </Items>
        </Wrap>

    </Container>
  )
}

export default Menu