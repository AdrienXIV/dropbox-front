import { createStyles, Theme } from "@material-ui/core";

export type Styles = "headerBar" ; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    headerBar:{
        flex: 1,
        display: 'flex',
        padding: '0 24px',
        minHeight: '64px',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
});

export default styles;