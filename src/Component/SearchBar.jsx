import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Tooltip } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px ', display: 'flex', alignItems: 'center', width:{md:'45%',xs:'100%'}, mx: 'auto', color: '#202124', fontSize: '.875rem', fontWeight: '400',zIndex:1 ,boxShadow:' 0 .2px 5px black',overflow:'hidden',wordWrap:'break-word'}}
    >

      <InputBase
        sx={{ ml: 1, flex: 1, color: '#202124' }}
        placeholder="Take a Note...."
        inputProps={{ 'aria-label': 'Take a Note' }}

      />
      <Tooltip title="New List">
        <IconButton type="submit" sx={{ p: '10px', mr:{md:1,xs:0} }} aria-label="search">
          <CheckBoxOutlinedIcon />
        </IconButton>
      </Tooltip>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      <Tooltip title="New Note With Drawing">
        <IconButton sx={{ p: '10px', mr:{md:1,xs:0}}} aria-label="directions">
          <BrushIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="New Note With Image">
        <IconButton sx={{ p: '10px', mr:{md:1,xs:0} }} aria-label="directions">
          <ImageOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}
