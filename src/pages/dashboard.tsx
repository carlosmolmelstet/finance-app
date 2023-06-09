import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Stack,
  StackDivider,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import AuthenticatedLayout from "./_layout/Authenticated/Authenticated.layout";

function MockCard() {
  return (
    <Card borderRadius={16}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function MockStat() {
  return (
    <Card borderRadius={16}>
      <CardBody>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>R$ 345.670,00</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>{" "}
      </CardBody>
    </Card>
  );
}

export default function Page() {
  return (
    <AuthenticatedLayout>
      <Grid
        templateColumns={{
          base: "repeat(4, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
        }}
        rowGap={8}
        columnGap={4}
        w="100%"
      >
        <GridItem colSpan={{ base: 4, lg: 3 }}>
          <MockStat />
        </GridItem>
        <GridItem colSpan={{ base: 4, lg: 3 }}>
          <MockStat />
        </GridItem>
        <GridItem colSpan={{ base: 4, lg: 3 }}>
          <MockStat />
        </GridItem>
        <GridItem colSpan={{ base: 4, lg: 3 }}>
          <MockStat />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 8 }}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={4}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={4}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 8 }}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 8 }}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={4}>
          <MockCard />
        </GridItem>
      </Grid>
    </AuthenticatedLayout>
  );
}
