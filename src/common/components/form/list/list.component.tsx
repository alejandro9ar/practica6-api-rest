import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/AddCircle';
import * as classes from './list.styles';

interface Props {
  title: string;
  label: string;
  items: string[];
  error?: boolean;
  helperText?: string;
  onRemoveItem: (index: number) => void;
  onAddItem: (sentence: string) => void;
}

export const ListComponent: React.FunctionComponent<Props> = (props) => {
  const {
    title,
    label,
    error,
    items,
    onRemoveItem,
    onAddItem,
    helperText,
  } = props;
  const [newItem, setNewItem] = React.useState<string>('');

  const handleOnChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleOnAddItem = () => {
    onAddItem(newItem);
    setNewItem('');
  };

  return (
    <List style={{width: '100%', padding: 0}} subheader={
      <ListSubheader disableGutters component='div'>
        {title}
      </ListSubheader>
    }>
      {items.map((item, index) => (
        <ListItem disableGutters>
          <ListItemText
            primary={item}
          />
          <ListItemSecondaryAction>
            <IconButton edge='end' aria-label='delete' onClick={() => onRemoveItem(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <ListItem disableGutters>
        <TextField className={classes.textField} value={newItem} onChange={handleOnChange} placeholder={label} />
        <ListItemSecondaryAction>
          <IconButton disabled={!Boolean(newItem.length)} edge='end' aria-label='add' onClick={handleOnAddItem}>
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </List>
  );
};
