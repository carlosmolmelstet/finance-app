import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./global";
import { breakpoints } from "./breakpoints";
import { components } from "./components";

export default extendTheme({ breakpoints, components }, globalStyles);
