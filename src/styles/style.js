import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    pageTitle: {
        fontSize: "34px",
        fontWeight: "normal"
    },
    cardWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        alignItems: "center",
        border: "1px dashed #3f51b5",
        borderRadius: "10%",
        margin: "6px",
    },
    image: {
        width: "250px",
        height: "auto",
        backgroundRepeat: "no-repeat",
        borderRadius: "25%"
    },

})

export default useStyle;