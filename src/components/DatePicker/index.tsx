import pt from "date-fns/locale/pt";
import moment from "moment";
import { RefObject, useRef, useState } from "react";
import DatePickerComponent, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
registerLocale("pt", pt);
import { useOutsideClick } from "@chakra-ui/react";
import { style } from "./style";

interface DatePickerProps {
  initialDates?: {
    startDate: Date;
    endDate: Date;
  };
  callback?: (dates: { startDate: Date; endDate: Date }) => void;
}

export default function DatePicker({
  initialDates,
  callback,
}: DatePickerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [startDate, setStartDate] = useState(
    initialDates ? initialDates.startDate : moment().toDate()
  );
  const [endDate, setEndDate] = useState(
    initialDates ? initialDates.endDate : moment().add(7, "days").toDate()
  );
  const ref = useRef<HTMLDivElement>(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (end) {
      onClose();
    }

    if (callback) {
      callback({ startDate: start, endDate: end });
    }
  };
  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  return (
    <Box sx={style} position="relative" w="min-content">
      <HStack onClick={onOpen}>
        <Heading size="sm" color="gray.300" fontWeight="medium">
          De:{" "}
        </Heading>
        <Input
          w="140px"
          readOnly
          value={moment(startDate).format("DD/MM/YYYY")}
        />
        <Heading size="sm" color="gray.300" fontWeight="medium">
          Até:{" "}
        </Heading>
        <Input
          w="140px"
          readOnly
          value={endDate ? moment(endDate).format("DD/MM/YYYY") : "--/--/----"}
        />
      </HStack>
      <Flex
        w="100%"
        position="absolute"
        zIndex="overlay"
        pt={2}
        display={isOpen ? "flex" : "none"}
        ref={ref}
      >
        <DatePickerComponent
          locale="pt"
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          closeOnScroll={(e) => {
            onClose();
            return true;
          }}
          inline
        />
      </Flex>
    </Box>
  );
}
