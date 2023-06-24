import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import IconBox from "../Icons/IconBox";
import { currencyFormat } from "@/utils/currency.helper";

interface ChartStatisticsProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  percentage: number;
}

export function ChartStatistics({
  title,
  amount,
  icon,
  percentage,
}: ChartStatisticsProps) {
  return (
    <Flex direction="column">
      <Flex alignItems="center">
        <IconBox h={"30px"} w={"30px"} bg="teal.300" me="6px">
          {icon}
        </IconBox>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
      <Text fontSize="lg" fontWeight="bold" mb="6px" my="6px">
        {currencyFormat.format(amount)}
      </Text>
      <Progress
        colorScheme="teal"
        borderRadius="12px"
        h="5px"
        value={percentage}
      />
    </Flex>
  );
}
