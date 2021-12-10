import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Tooltip, IconButton } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaletteIcon from '@mui/icons-material/Palette';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import InputBase from '@mui/material/InputBase';
import Sdata from './Sdata';
function SimplePaper(props) {

    const PaperStyled = styled(Paper)(({ theme }) => ({
        backgroundColor: props.backcolor,
        borderColor: props.backborder,
        height: 'auto',
        border: '1px solid transparent',
        padding: '12px',
    }));


    return (
        <Box sx={{ mt: 4, overflowX: 'none' }}
        >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <PaperStyled sx={{ width: { xs: '100%', md: '260px' } }}>
                    <Tooltip title="Select Note">
                        <IconButton sx={{ marginTop: '-40px', zindex: 1, marginLeft: '-26px' }} aria-label="directions">
                            <CheckCircleIcon sx={{ fontSize: '24px', zindex: 1, opacity: 1, fill: 'black' }} />
                        </IconButton>
                    </Tooltip>
                    <Stack direction="row">
                        <Typography variant='p' component="div" sx={{ ml: 2, flexGrow: 1, fontWeight: '500', color: '#202124', fontSize: '.975rem', letterSpacing: '.01428571em', fontFamily: 'Roboto,Arial,sans-serif',overflow:'hidden',wordWrap:'break-word',mb:1 }}>
                            {props.title}
                        </Typography>
                        <Tooltip title="Pin Note">
                            <IconButton sx={{ marginTop: '-4px', ml: 5 }} aria-label="directions">
                                <PushPinIcon sx={{ fontSize: '20px', zindex: 1, opacity: 1, color: "#5f6368" }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>

                    <Stack direction="row">
                        <Typography variant='p' component="div" sx={{ ml: 2, flexGrow: 1, color: '#202124', fontSize: '.75rem', letterSpacing: '.01428571em', fontFamily: 'Roboto,Arial,sans-serif',overflow:'hidden',wordWrap:'break-word' }}>
                           {props.message}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={.5} mt={2}>
                        <Tooltip title="Remind Me">
                            <IconButton aria-label="directions">
                                <AddAlertIcon sx={{ fontSize: '20px', zindex: 1, opacity: 1, color: "#5f6368" }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Collobrate">
                            <IconButton aria-label="directions">
                                <GroupAddIcon sx={{ fontSize: '20px', zindex: 1, opacity: 1, color: "#5f6368" }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Change Color">
                            <IconButton aria-label="directions">
                                <PaletteIcon sx={{ fontSize: '20px', zindex: 1, opacity: 1, color: "#5f6368" }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add Image">
                            <IconButton aria-label="directions">
                                <ImageIcon sx={{ fontSize: '20px', zindex: 1, opacity: 1, color: "#5f6368" }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Archeive">
                            <IconButton aria-label="directions">
                                <ArchiveIcon sx={{ fontSize: '20px', zindex: 1, opacity: 1, color: "#5f6368" }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More">
                            <IconButton aria-label="directions">
                                <MoreVertIcon sx={{ fontSize: '20px', zindex: 1, opacity: 1, color: "#5f6368" }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </PaperStyled>
            </Stack>

        </Box>
    );
}

export default function Card() {
    
    const [userData, setUserData] = useState("");
    const [noteData,setNoteData] = useState(Sdata);
    const colors =['#f28b82','#d7aefb','#aecbfa','#fbbc04','#fff475','#a7ffeb'];
    const randomValue = (list) => {
        return list[Math.floor(Math.random() * list.length)];
    };
    const insert = () => {
        let copy = [...noteData];

        var colorName = randomValue(colors);
        console.log(colorName);
        let text = userData;
        let result = text.substring(0, 15);
        copy = [...copy, { id: copy.length + 1,title:result ,message: userData,backcolor:colorName,backborder:colorName}];
        
        setNoteData(copy);
        setUserData("");
        // userData("");
         document.getElementById('mess').value = '';
       
     };
    return (
        <>
            <Paper
                component="div"
                sx={{ p: '2px 4px ', display: 'flex', alignItems: 'center', width: { md: '45%', xs: '100%' }, mx: 'auto', color: '#202124', fontSize: '.875rem', fontWeight: '400', zIndex: 1, boxShadow: ' 0 .2px 5px black' }}
            >

                <InputBase
                    sx={{ ml: 1, flex: 1, color: '#202124' }}
                    placeholder="Take a Note...."
                    inputProps={{ 'aria-label': 'Take a Note' }}
                    id="mess"
                    onChange={(e) => setUserData(e.currentTarget.value)}
                   
                />
                <Tooltip title="New List">
                    <IconButton type="submit" sx={{ p: '10px', mr: { md: 1, xs: 0 } }} aria-label="search" onClick={() => insert()}>
                        <CheckBoxOutlinedIcon />
                    </IconButton>
                </Tooltip>
                {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                <Tooltip title="New Note With Drawing">
                    <IconButton sx={{ p: '10px', mr: { md: 1, xs: 0 } }} aria-label="directions">
                        <BrushIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="New Note With Image">
                    <IconButton sx={{ p: '10px', mr: { md: 1, xs: 0 } }} aria-label="directions">
                        <ImageOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Paper>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container sx={{ mx: 'auto' }}>
                  {
                      noteData.map((e) =>(
                        <Grid item xs={12} md={3} key={e.id}>
                            <SimplePaper title={e.title} backcolor={e.backcolor} message={e.message} />
                         </Grid>
                      ))
                  }
                    

                </Grid>
            </Box>
        </>
    );
}
