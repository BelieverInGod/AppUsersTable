import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function OptionsInput( {option , setOption , options, label} ) {
  const [value, setValue] = useState(option);
  
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={option}
        onInputChange={(event, newInputValue) => {
          setOption(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label={label} />}
        clearIcon={null}
      />
    </div>
  );
}