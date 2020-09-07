import React, {useContext} from 'react';
import Table from '../../components/Table/table';
//context consumer
import {Context as AssetContext} from '../../Context/AssetContext';

// material ui imports
import {
  Grid,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: '45ch',
  },
  button: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginTop: theme.spacing(3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '400px',
  },
}));

export default function Department() {
  const {state: AssetListState} = useContext(AssetContext);
  console.log(AssetListState);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      direction='column'
      alignItems='stretch'
      style={{marginTop: '1.5rem'}}>
      <Grid item style={{marginLeft: '1.5rem'}}>
        <Typography variant='h4'> Assets </Typography>
      </Grid>

      <Grid
        container
        item
        direction='row'
        justify='space-between'
        style={{padding: '1.5rem 1.2rem 0rem 1.2rem'}}>
        <Grid item>
          <Button color='primary' variant='contained'>
            Filter
          </Button>
        </Grid>
        <Grid item>
          <Button color='primary' variant='contained' onClick={handleOpen}>
            {' '}
            Add Items{' '}
          </Button>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
            <Fade in={open}>
              <div className={classes.paper}>
                <Grid item>
                  <Typography variant='h5'> Add Asset </Typography>
                  <form>
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='Type'
                    />
                    <br />
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='Status'
                    />
                    <br />
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='Condition'
                    />
                    <br />
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='Departments'
                    />
                    <br />
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='Incharge'
                    />
                    <br />
                  </form>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.button}
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth>
                    Create
                  </Button>
                </Grid>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>

      <Grid item>
        <Table data={AssetListState.assets} columns={departmentListColumns} />
      </Grid>
    </Grid>
  );
}

const departmentListColumns = [
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Condition',
    accessor: 'condition',
  },
  {
    Header: 'Departments',
    accessor: 'department.name',
  },
  {
    Header: 'Incharge ',
    accessor: 'inCharge.name',
  },
];
