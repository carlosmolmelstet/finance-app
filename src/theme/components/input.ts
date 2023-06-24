const baseStyle = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
};

const variantOutline = {
  field: {
    _invalid: {
      borderColor: "red.300",
      boxShadow: "0 0 0 1px red.300",

      _focusVisible: {
        borderColor: "red.300",
        boxShadow: "0 0 0 1px red.300",
      },
    },
    _focusVisible: {
      borderColor: "teal.400",
      boxShadow: "0 0 0 1px teal.400",
      _invalid: {
        borderColor: "red.300",
        boxShadow: "0 0 0 1px red.300",
      },
    },
  },
};

const variants = {
  outline: variantOutline,
};

const input = {
  baseStyle,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export default input;
