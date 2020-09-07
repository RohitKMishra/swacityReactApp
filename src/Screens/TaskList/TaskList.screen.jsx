import React, {useContext} from 'react';
import Table from '../../components/Table/table';
//context consumer
import {Context as TaskContext} from '../../Context/TaskContext';

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

export default function TaskListScreen() {
  const {state: TaskListState} = useContext(TaskContext);

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
        <Typography variant='h4'> Tasks </Typography>
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
                  <Typography variant='h5'> Add Tasks </Typography>
                  <form>
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='Title'
                    />
                    <br />
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='Department'
                    />
                    <br />
                    <TextField
                      className={classes.textField}
                      id='standard-basic'
                      label='SuperVisor inCharge'
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
        <Table data={TaskListState.tasks} columns={TaskListColumns} />
      </Grid>
    </Grid>
  );
}

const TaskListColumns = [
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Start Time',
    accessor: 'startTime',
  },
  {
    Header: 'End Time',
    accessor: 'endTime',
  },
  {
    Header: 'Department',
    accessor: 'department.name',
  },
  {
    Header: 'In Charge',
    accessor: 'inCharge.name',
  },
];
