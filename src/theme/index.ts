import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./global";
import { breakpoints } from "./breakpoints";

export default extendTheme({ breakpoints }, globalStyles);
