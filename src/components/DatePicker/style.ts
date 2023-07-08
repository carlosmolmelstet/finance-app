import { SystemStyleObject } from "@chakra-ui/react";

export const style: SystemStyleObject = {
  ".react-datepicker": {
    border: "1px solid",
    borderColor: "gray.600",
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "-1px 4px 14px 0px #29515178",
  },
  ".react-datepicker__header": {
    bg: "gray.800",
    borderColor: "gray.600",
  },
  ".react-datepicker__month-container": {
    bg: "gray.700",
  },
  ".react-datepicker__navigation-icon": {
    top: "4px",
  },
  ".react-datepicker__navigation-icon::before": {
    borderColor: "gray.400",
    borderWidth: "1px 1px 0 0",
  },
  ".react-datepicker__navigation:hover .react-datepicker__navigation-icon::before":
    {
      borderColor: "teal.300",
    },
  ".react-datepicker__current-month": {
    color: "gray.300",
    textTransform: "capitalize",
  },
  ".react-datepicker__day-name": {
    color: "gray.400",
    fontFamily: "heading",
  },
  ".react-datepicker__day": {
    color: "white",
    fontFamily: "heading",
  },
  ".react-datepicker__day:hover": {
    background: "teal.500",
  },
  ".react-datepicker__day--in-range": {
    background: "teal.400",
  },
  ".react-datepicker__day--in-selecting-range": {
    background: "teal.600",
  },
  ".react-datepicker__day--keyboard-selected": {
    background: "teal.400",
  },
};
