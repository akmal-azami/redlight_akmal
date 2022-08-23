const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette values for light mode
					primary: "#f1f2f6",
					secondary: "#ffffff",
					text: {
						primary: grey[900],
						secondary: grey[800],
					},
			  }
			: {
					// palette values for dark mode
					primary: "#181f3b",
					secondary: grey[500],
					background: {
						default: deepOrange[900],
						paper: deepOrange[900],
					},
					text: {
						primary: "#fff",
						secondary: grey[500],
					},
			  }),
	},
});
