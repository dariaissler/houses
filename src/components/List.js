import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';
import moment from 'moment';
import Table from './Table'


const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: 800,
      
    },
    list: {
      margin: '0 auto',
      width: 800,
    }
  }));

const List = ({getCompanies, data, houses, getHouses}) => {
  
    const classes = useStyles();
    const [company, setCompany] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      getCompanies()
    }, [])

    const handleChange = (e) => {
      setCompany(e.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
 
    return (

        <div className={classes.list}>
      <Button className={classes.button} onClick={handleOpen}>
        Choose a company
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">List of the companies</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={company}
          onChange={handleChange}
        >
        {data.map(item => <MenuItem key={item.index} onClick={() => getHouses(item.id)}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>

     { houses && houses.length > 0 && <Table houses={houses}/> }
    </div>
    )
}

export default List
