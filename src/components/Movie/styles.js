import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
	movie: {
		padding: "10px",
	},
	title: {
		color: theme.palette.text.primary,
		textOveflow: "elipsis",
		whiteSpace: "nowrap",
		overflow: "hidden",
		marginTop: "10px",
		marginBottom: 0,
		textAlign: "center",
	},
	image: {
		borderRadius: "20px",
		height: "300px",
		marginBottom: "10px",
		"&:hover": {
			transform: "scale(1.05)",
		},
	},
	links: {
		alignItems: "center",
		fontWeight: "bolder",
		TextDecodecoration: "none",
		[theme.breakpoints.up("xs")]: {
			display: "flex",
			flexDirection: "column",
		},
		"&hover": {
			cursor: "pointer",
			TextDecodecoration: "none",
		},
	},
}));
