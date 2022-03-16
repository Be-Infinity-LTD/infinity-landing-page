import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => createStyles({
    mainGrid: {
        whiteSpace: 'pre-line',
        margin: '100px auto 200px',
        width: '1000px'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#020202',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#020202',
        marginTop: '30px'
    },
    subtitleCenter: {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#020202',
        marginTop: '30px',
        textAlign: 'center'
    },
    contents: {
        fontSize: '16px',
        margin: "50px 0",
        color: '#4A4848',
        letterSpacing: '1px',
        lineHeight: '2'
    },
    subitem: {
        display: 'flex',
        margin: '30px 0'
    },
    subChildItem: {
        display: 'flex',
        margin: '10px 0'
    },
    subItemNumber: {
        fontSize: '16px',
        width: '30px',
        flexShrink: 0,
        color: '#4A4848'
    },
    subItemContent: {
        fontSize: '16px',
        letterSpacing: '1px',
        color: '#4A4848'
    },
    [theme.breakpoints.down(600)]: {
        mainGrid: {
            margin: '30px 15px 130px',
            width: 'auto'
        },
        title: {
            fontSize: '25px',
        },
        subtitle: {
            fontSize: '20px'
        },
        subtitleCenter: {
            fontSize: '20px'
        },
        contents: {
            fontSize: '14px',
            margin: "30px 0"
        },
    }
}))
