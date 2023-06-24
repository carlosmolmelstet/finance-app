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
  variants,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export default input;
