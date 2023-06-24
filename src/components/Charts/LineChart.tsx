import { compactCurrency } from "@/utils/currency.helper";
import { Box, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function LineChart() {
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
      colors: ["#4FD1C5", "#FC8181"],
    },
    colors: ["#4FD1C5", "#FC8181"],
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
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
          cssClass: "chart_label",
        },
      },
    },
  };

  function getRandomArbitrary() {
    return Math.random() * (5000 - 1000) + 1000;
  }

  const series: ApexOptions["series"] = [
    {
      name: "Receitas",

      data: Array.from({ length: 6 }, () => getRandomArbitrary()),
    },
    {
      name: "Despesas",
      data: Array.from({ length: 6 }, () => getRandomArbitrary()),
    },
  ];

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
