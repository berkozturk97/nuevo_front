import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import AlertModal from '../components/AlertModal/AlertModal';
import axios from 'axios';
import { history } from '../App';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Sebear
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root1: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
        width: 400,
        borderRadius: 10,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid 191919',
        
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    alertButton: {
        backgroundColor: '#5D3DBD',
        color: '#FFD10D'
    },
    helperText: {
        color: 'red'
    }
}));


export default function CreatePage() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = React.useState("");
    React.useEffect(() => {
    }, [])
    const [values, setValues] = React.useState({
        namee: "",
        price: "",
        description: "",
        productPhoto: "",
        author: "",
        publisher: "",
        showAlert: false,
        alertInfo: ""
    });
    const handleInputChange = e => { 
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    // const updateCard = async () => {
    //     if (
    //         values.creditCardNameSurname.trim().length === 0 ||
    //         values.creditCardNo.trim().length === 0 ||
    //         values.creditCardDate.trim().length === 0 ||
    //         values.creditCardCvc.trim().length === 0
    //     ) {
    //         setValues({
    //             ...values,
    //             alertInfo: "Tüm alanları doğru girdiğinizden emin olunuz.",
    //             showAlert: true
    //         })
    //     } else {
    //         if (values.creditCardNameSurname.trim().length === 0 ||
    //             values.creditCardNo.trim().length < 16 ||
    //             values.creditCardDate.trim().length < 5 ||
    //             values.creditCardCvc.trim().length < 3) {
    //             alert('Bilgilerinizi kontrol ediniz.')
    //             //Buraya güzel alert tasarla
    //         } else {
    //             let REQUEST_URL = 'http://goturapp.herokuapp.com/users/updateCardInfo/'+ userInfo.USER_ID;
    //             let body = {
    //                 //_id: userInfo.USER_ID,
    //                 creditCardNo: values.creditCardNo,
    //                 creditCardDate: values.creditCardDate,
    //                 creditCardCvc: values.creditCardCvc,
    //                 creditCardNameSurname: values.creditCardNameSurname 
    //             }
    //             console.log(body)
    //             await axios.put(REQUEST_URL, body)
    //                 .then(response => {
    //                     console.log(response);
    //                     setValues({
    //                         ...values,
    //                         alertInfo: "Bilgileriniz GoturPayment© guvencesi ile kayit edilmistir! Simdi ana sayfaya aktarilacaksiniz",
    //                         showAlert: true
    //                     })
    //                     setTimeout(() => {
    //                         history.push({ pathname: "/anasayfa"})
    //                     }, 3000);
                        
    //                 })
                    
    //                 .catch(error => {
    //                     console.log("sdfsd")
    //                     console.log(error)
    //                 })
    //         }
    //     }
    // }

    const handleClose = () => {
        setValues({
            ...values,
            showAlert: false
        })
    };
    return (
        <Container component="main" maxWidth="xs">
            {/* <AlertModal openAlert={values.showAlert} closePopUp={handleClose} alertInfo={values.alertInfo} /> */}
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" style={{ color: '#191919' }}>
                Ürün Ekle
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={values.namee}
                                onChange={handleInputChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Kitabin Adi"
                                name="namee"
                                autoComplete="cardowner"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                //error={values.errorpassword}
                                value={values.price}
                                onChange={handleInputChange}
                                variant="outlined"
                                required
                                fullWidth
                                //helperText="Şifre en az 7 haneli olmalıdır."
                                name="price"
                                label="Kitabin Fiyatı"
                                id="price"
                                autoComplete="price"
                            />
                            {/* <FormHelperText className={classes.helperText}>{values.password.length < 7 ? "Şifre en az 7 haneli olmalıdır." : ""}</FormHelperText> */}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={false}
                                value={values.description}
                                onChange={handleInputChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="description"
                                label="Kitabın Açıklaması"
                                id="description"
                                autoComplete="description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={values.productPhoto}
                                onChange={handleInputChange}
                                error={false}
                                autoComplete="fname"
                                name="productPhoto"
                                variant="outlined"
                                required
                                fullWidth
                                id="productPhoto"
                                label="Fotoğraf Url"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={values.author}
                                onChange={handleInputChange}
                                error={false}
                                autoComplete="fname"
                                name="author"
                                variant="outlined"
                                required
                                fullWidth
                                id="author"
                                label="Yazarin Ismi"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={values.publisher}
                                onChange={handleInputChange}
                                error={false}
                                autoComplete="fname"
                                name="publisher"
                                variant="outlined"
                                required
                                fullWidth
                                id="publisher"
                                label="Yayın Evi"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        // onClick={updateCard}
                        className={classes.submit}
                        style={{ backgroundColor: '#191919' }}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Kaydet
                      </Button>
                    <Grid container justify="flex-end">
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}