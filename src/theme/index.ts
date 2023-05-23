import { createTheme } from "@mui/material/styles";

export default function useCustomMuiTheme() {
  const theme = createTheme({
    palette:{
        primary: {
          main: '#fff',
        },
        secondary: {
          main: '#000',
        },
        text: {
          primary: '#fff',
          secondary: '#fff',
        },
        info: {
          main: '#fff',
        },
        common: {
          white: '#fff',
        },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "#003577",
            color: "#ffffff",
          },
          outlined: {
            color: "#003577",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: "#000",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#cdcdcd",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#cdcdcd",
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
            },
            "& .MuiInputLabel-root.Mui-disabled": {
              color: "#cdcdcd",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          outlined: {
            borderColor: "#fff",
            "&.Mui-disabled": {
              borderColor: "#fff",
            },
          },
          icon: {
            color: "#fff",
          },
          select: {
            color: "#fff",
          },
          iconFilled: {
            color: "#fff",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            background: "#222338",
            "& .MuiListItem-root": {
              color: "#fff",
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            background: "#222338",
          },
          root: {
            "& .MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-disabled MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot .MuiInputBase-root-MuiOutlinedInput-root":
              { borderColor: "#ccc" },
            "& .MuiAutocomplete-inputRoot ": {
              borderColor: "#fff",
              outline: "#fff",
            },
          },
          endAdornment: {
            "& svg": {
              color: "#fff",
            },
          },
          inputRoot: {
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& fieldset": {
              borderColor: "#fff",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&.Mui-disabled": {
              WebkitTextFillColor: "#ccc",
            },
          },
        },
      },
    },
  });

  return theme
}
