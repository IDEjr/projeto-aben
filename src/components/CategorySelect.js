import { Button, Grid } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';

const buttonStyle = {
  borderRadius: 10
}

const CategorySelect = ({
  value,
  setValue,
  options,
}) => {

  const isSelected = useCallback(e => value.includes(e), [value]);

  const onChange = useCallback(val => {
    setValue(prev => ([
      ...prev.filter(e => e !== val),
      ...(isSelected(val)
        ? []
        : [val]
      )
    ]))
  }, [isSelected, setValue]);

  return (
    <Grid
      container
      spacing={1}
    >
      {
        options.map(e => (
          <Grid item key={e.value}>
            <Button
              sx={buttonStyle}
              color="primary"
              variant={isSelected(e.value) ? "contained" : "outlined"}
              onClick={() => onChange(e.value)}
            >
              {e.label}
            </Button>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default CategorySelect;
