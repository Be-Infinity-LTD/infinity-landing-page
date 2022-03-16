import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => createStyles({
    mainGrid: {
        whiteSpace: 'pre-line',
        margin: '100px auto 200px',
        width: '1000px',
        wordBreak: "break-word"
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#020202'
    },
    contents: {
        margin: '30px 0',
        fontSize: '16px',
        color: '#4A4848',
        letterSpacing: '1px',
        lineHeight: '2'
    },
    [theme.breakpoints.down(600)]: {
        mainGrid: {
            margin: '30px 15px 130px',
            width: 'auto'
        },
        title: {
            fontSize: '25px',
        },
        contents: {
            fontSize: '14px'
        },
    }
}))
