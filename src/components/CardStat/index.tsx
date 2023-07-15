import {
  Card,
  CardBody,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tooltip,
} from "@chakra-ui/react";
import IconBox from "../Icons/IconBox";
import { WalletIcon } from "../Icons/Icons";
import { currencyFormat } from "@/utils/currency.helper";

interface CardStatProps {
  title: string;
  icon: React.ReactNode;
  value: number;
}

export function CardStat({ title, icon, value }: CardStatProps) {
  return (
    <Card borderRadius={16} h="100%">
      <CardBody
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stat py={2}>
          <StatLabel color="gray.500" fontWeight={"bold"}>
            {title}
          </StatLabel>
          <StatNumber fontSize={24} color="gray.200" mr={2}>
            {currencyFormat.format(value)}
          </StatNumber>
        </Stat>
        <IconBox bg={"teal.300"} color="white" h="40px" w="40px" me="12px">
          {icon}
        </IconBox>
      </CardBody>
    </Card>
  );
}
