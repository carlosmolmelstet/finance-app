import { Box } from "@chakra-ui/react";

import { ExpenseDTO } from "@/services/expenses/get-by-id";
import { Grid, GridItem } from "@chakra-ui/react";
import { ChartStatistics } from "@/components/Charts/ChartStatistics";
import { WalletIcon } from "@/components/Icons/Icons";

type CategoryAmount = {
  id: string;
  name: string;
  amount: number;
  percentage: number;
};

type ExpensesByCategoriesProps = {
  categories: Array<CategoryAmount>;
};

export default function ExpensesByCategories({
  categories,
}: ExpensesByCategoriesProps) {
  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={8}
      >
        {categories.slice(0, 6).map((category) => {
          return (
            <GridItem key={category.id}>
              <ChartStatistics
                title={category.name}
                amount={category.amount}
                percentage={category.percentage}
                icon={<WalletIcon h={"15px"} w={"15px"} />}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
