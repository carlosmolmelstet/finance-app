import { compactCurrency } from "@/utils/currency.helper";
import { Box, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface LineChartProps {
  series: ApexOptions["series"];
  categories: string[];
}

export function LineChart({ series, categories }: LineChartProps) {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    tooltip: {
      theme: "dark",
      cssClass: "chart_tooltip",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    legend: {
      show: true,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "#A0AEC0",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [],
      },
      colors: ["#FC8181", "#4FD1C5"],
    },
    colors: ["#FC8181", "#4FD1C5"],
    yaxis: {
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
        },
        formatter: function (value) {
          return compactCurrency(value);
        },
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
          cssClass: "chart_label",
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      width="100%"
      height="100%"
    />
  );
}
