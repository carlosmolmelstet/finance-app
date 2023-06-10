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
import { currency } from "@/utils/currency.helper";

interface CardStatProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  percentage?: number;
}

export function CardStat({ title, icon, value, percentage }: CardStatProps) {
  return (
    <Card borderRadius={16} h="100%">
      <CardBody
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stat>
          <StatLabel color="gray.500" fontWeight={"bold"}>
            {title}
          </StatLabel>
          <Flex align="flex-end">
            <StatNumber fontSize={24} color="gray.200" mr={2}>
              {currency.format(value)}
            </StatNumber>
            {percentage && (
              <Tooltip
                label="Comparação com o mês anterior"
                bg="gray.900"
                color="gray.100"
              >
                <StatHelpText w="fit-content">
                  <StatArrow type={percentage > 0 ? "increase" : "decrease"} />
                  {percentage}%
                </StatHelpText>
              </Tooltip>
            )}
          </Flex>
        </Stat>
        <IconBox bg={"teal.300"} color="white" h="40px" w="40px" me="12px">
          {icon}
        </IconBox>
      </CardBody>
    </Card>
  );
}
