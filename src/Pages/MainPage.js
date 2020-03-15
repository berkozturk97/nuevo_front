import React, { useEffect, useState } from 'react';
import BookCard from '../Components/BookCard'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { getBook } from '../API/BookAPI';
import Container from '@material-ui/core/Container';
import { history } from '../App';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));



export default function MainPage() {
  const classes = useStyles();
  const [book, setBook] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    getBooks();
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value);
  }
  const getBooks = async () => {
    let responseData = await getBook();
    if (responseData !== null || responseData !== undefined) {
      setBook(responseData)
      console.log(responseData)
    }
  }

  const goDetail = (item) => {
    history.push({ pathname: "/detail", search: "/" + item._id, state: { item: item } })
  }

  // const renderItems = () => {
  //   return book.map((data, index) => {
  //     return <BookCard key={index}
  //       title={data.name}
  //       productPhoto={data.productPhoto}
  //       price={data.price}
  //       onClick={() => goDetail(data)}
  //     />
  //   })
  // }
  const renderFilteredItems = book.filter(data => {
    if(search === null) return data
    else if(data.name.toLowerCase().includes(search.toLowerCase()) || data.author.toLowerCase().includes(search.toLowerCase()) || data.publisher.toLowerCase().includes(search.toLowerCase())) {
      return data
    }
  }).map((data,index) => {
    return <BookCard key={index}
    title={data.name}
    productPhoto={data.productPhoto}
    price={data.price}
    onClick={() => goDetail(data)}
  />
  })

  return (
    <div>
      <div className={classes.search}>
        <InputBase
          style={{borderBlockColor: 'black'}}
          placeholder="Search…"
          value={search}
          onChange={handleChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Container maxWidth="lg" className={classes.container} style={{ flexDirection: 'column', flex: 1 }}>
        {renderFilteredItems}
      </Container>

    </div>
  )
}