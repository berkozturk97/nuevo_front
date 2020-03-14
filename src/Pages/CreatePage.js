import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { addBook } from '../API/BookAPI'
import AlertModal from '../Components/AlertModal';
import SuccessModal from '../Components/SuccessModal';



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
    },notchedOutline: {
        borderWidth: "1px",
        borderColor: "black !important"
      }
}));


export default function CreatePage() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        namee: "",
        price: "",
        description: "",
        productPhoto: "",
        author: "",
        publisher: "",
        showAlert: false,
        showSuccess: false,
        alertInfo: ""
    });
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    const AddBooks = async () => {
        let body = {
            name: values.namee,
            productPhoto: values.productPhoto,
            price: values.price,
            description: values.description,
            author: values.author,
            publisher: values.publisher
        }
        console.log(body);

        if (
            values.productPhoto.trim().length === 0 ||
            values.price.trim().length === 0 ||
            values.namee.trim().length === 0 ||
            values.publisher.trim().length === 0 ||
            values.author.trim().length === 0 ||
            values.description.trim().length === 0
        ) {
            setValues({
                ...values,
                alertInfo: "Girdiginiz bilgilerin dogrulugundan emin olunuz.",
                showAlert: true
            })
        } else {
            let body = {
                name: values.namee,
                productPhoto: values.productPhoto,
                price: values.price,
                description: values.description,
                author: values.author,
                publisher: values.publisher
            }
            let responseData = await addBook({ body: body });
            if (responseData !== null || responseData !== undefined) {
                setValues({
                    ...values,
                    successInfo: "Ürünü Başarıyla Eklediniz",
                    showSuccess: true,
                    author: "",
                    productPhoto: "",
                    namee: "",
                    price: "",
                    description: "",
                    publisher: ""
                })

            }
        }
    }
    const handleClose = () => {
        setValues({
            ...values,
            alertInfo: "Tüm alanları doğru girdiğinizden emin olunuz.",
            showAlert: false
        })
    };
    const handleCloseSuccess = () => {
        setValues({
            ...values,
            showSuccess: false
        })
    };
    return (
        <Container component="main" maxWidth="xs">
            <AlertModal openAlert={values.showAlert} closePopUp={handleClose} alertInfo={values.alertInfo} />
            <SuccessModal openSuccess={values.showSuccess} closePopUpSuccess={handleCloseSuccess} successInfo={values.successInfo} />
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" style={{ color: '#191919' }}>
                    Ürün Ekle
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
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
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                                value={values.price}
                                onChange={handleInputChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="price"
                                label="Kitabin Fiyatı"
                                id="price"
                                autoComplete="price"
                            />
                            {/* <FormHelperText className={classes.helperText}>{values.password.length < 7 ? "Şifre en az 7 haneli olmalıdır." : ""}</FormHelperText> */}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
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
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
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
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                                value={values.author}
                                onChange={handleInputChange}
                                error={false}
                                autoComplete="fname"
                                name="author"
                                variant="outlined"
                                required
                                fullWidth
                                id="author"
                                label="Yazarin İsmi"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
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
                        onClick={AddBooks}
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
        </Container>
    );
}