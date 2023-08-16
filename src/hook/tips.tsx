import "../hook/tips.css";
import { Typography, Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React from "react";
import Export from "../assets/Export file.svg";
import { PieChart, pieArcClasses } from "@mui/x-charts";

const data = [
  { id: 0, value: 13, label: "Cash Tips", color: "#B15B5B" },
  { id: 1, value: 86, label: "Credit Tips", color: "#7775D2" },
  { id: 2, value: 1, label: "Gift Tips", color: "#C8DE44" },
];

export default function Tips(): JSX.Element {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,

          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.1 }}>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Tips by Store -
            <Typography sx={{ color: "#5C6A82" }}>37007</Typography>|
            <Typography sx={{ color: "#5C6A82" }}>
              Pay Period: 06/19/23 - 07/02/23
            </Typography>
          </Typography>
        </Box>
        <Button
          variant="text"
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            px: 2,
            color: "white",
            borderRadius: "64px",
            bgcolor: "#007DFF",
            gap: 1,
            fontWeight: 600,
          }}
        >
          <img src={Export} />
          Export
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", width: "40%" }}>
          <Box sx={{ width: 200, height: 150 }}>
            <Box sx={{ position: "absolute", px: 10, py: 7 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                $4079.88
              </Typography>
              <Typography sx={{ color: "#5C6A82", fontSize: "12px" }}>
                Total Tips
              </Typography>
            </Box>
            <PieChart
              sx={{ position: "relative" }}
              series={[
                {
                  data,
                  innerRadius: 40,
                  outerRadius: 60,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 100,
                  cy: 70,
                },
              ]}
              legend={{ hidden: true }}
            >
              {/* <text x={100} y={100} textAnchor="middle" dominantBaseline="middle">
            Donut
           </text> */}
            </PieChart>
          </Box>

          <Box sx={{ color: "#5C6A82", width: 230 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                p: 0.5,
                width: 250,
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  border: "1px solid transparent",
                  bgcolor: "#B15B5B",
                  width: 20,
                  height: 10,
                  borderRadius: "2px",
                }}
              ></Typography>
              <Typography sx={{ fontSize: "14px", width: 70 }}>
                Cash Tips
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: 600,
                  gap: 0.5,
                  letterSpacing: "0.5px",
                  alignItems: "center",
                }}
              >
                $558.00{" "}
                <Typography
                  sx={{ fontWeight: 600, color: "black", fontSize: "12px" }}
                >
                  (13%)
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                p: 0.5,
                width: 300,
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  border: "1px solid transparent",
                  bgcolor: "#7775D2",
                  width: 20,
                  height: 10,
                  borderRadius: "2px",
                }}
              ></Typography>
              <Typography sx={{ fontSize: "14px", width: 70 }}>
                Credit Tips
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: 600,
                  gap: 0.5,
                  letterSpacing: "0.5px",
                  alignItems: "center",
                }}
              >
                $3497.00{" "}
                <Typography
                  sx={{ fontWeight: 600, color: "black", fontSize: "12px" }}
                >
                  (86%)
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: 0.5,
                gap: 2,
                width: 300,
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  border: "1px solid transparent",
                  bgcolor: "#C8DE44",
                  width: 20,
                  height: 10,
                  borderRadius: "2px",
                }}
              ></Typography>
              <Typography sx={{ fontSize: "14px", width: 70 }}>
                Gift Tips
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: 600,
                  gap: 0.5,
                  letterSpacing: "0.5px",
                  alignItems: "center",
                }}
              >
                $24.00{" "}
                <Typography
                  sx={{ fontWeight: 600, color: "black", fontSize: "12px" }}
                >
                  (1%)
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            fontSize: "14px",
            width: "100%",
            m: 2,
            display: "flex",
            height: "100%",
            gap: 2,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 130,
              p: 3,
              position: "relative",
              borderRadius: "10px",
              border: "1px solid rgba(231, 231, 231, 0.93)",
              bgcolor: "#E9F4FF",
            }}
          >
            <Box sx={{ color: "#42A0FF" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                $4079
              </Typography>
              Total Tips
            </Box>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                position: "absolute",
                left: "93%",
                zIndex: 1,
                background: "white",
                top: 27,
                borderRadius: "64px",
                border: "1px solid rgba(231, 231, 231, 0.93)",
              }}
            >
              <Typography sx={{ fontSize: 28 }}>/</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              p: 3,
              borderRadius: "10px",
              position: "relative",
              width: 130,
              border: "1px solid rgba(231, 231, 231, 0.93)",
              bgcolor: "#FFF2F2",
            }}
          >
            <Box sx={{ color: "#FF4E4E" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                1195.28
              </Typography>
              Total Labour Hours
            </Box>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                position: "absolute",
                left: "93%",
                background: "white",
                top: 27,
                borderRadius: "64px",
                border: "1px solid rgba(231, 231, 231, 0.93)",
              }}
            >
              <Typography sx={{ fontSize: 28 }}>=</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid rgba(231, 231, 231, 0.93)",
              p: 3,
              borderRadius: "10px",
              width: 130,
              bgcolor: "#FEFFE1",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              $3.39
            </Typography>
            Avg. Hourly Tips
          </Box>
        </Box>
      </Box>

      <Box width={'100%'}>
        <DataGrid
          sx={{ width: "auto" }}
          // initialState={{ pinnedColumns: { right: ['actions'] } }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
const columns: GridColDef[] = [
  
  { field: "date", headerName: "Date", width: 180,align: "left",
  headerAlign: "left", },
  {
    field: "cashTips",
    headerName: "Cash Tips",
    editable: true,
    align: "left",
    headerAlign: "left",
    width: 200,
  },
  {
    field: "creditTips",
    headerName: "Credit Tips",
    width: 200,
    editable: true,
  },
  {
    field: "giftTips",
    headerName: "Gift Tips",
    width: 200,
    editable: true,
  },
  {
    field: "totalTips",
    headerName: "Total Tips",
    width: 200,
  },
  {
    field: "totalHours",
    headerName: "Total Labor Hours",
    width: 200,
  },
  {
    field: "averageTips",
    headerName: "Avg.Hourly.Tips",
    width: 200,
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    date: "Sun,07/02",
    cashTips: "$22.05",
    // rowLength: 100000,
    creditTips: "$301.22",
    giftTips: "$5.11",
    totalTips: "$328.38",
    totalHours: "130.25",
    averageTips: "$2.52",
  },
  {
    id: 2,
    date: "Sun,07/02",
    cashTips: "$22.05",
    creditTips: "$301.22",
    giftTips: "$5.11",
    totalTips: "$328.38",
    totalHours: "130.25",
    averageTips: "$2.52",
  },
  {
    id: 3,
    date: "Sun,07/02",
    cashTips: "$22.05",
    creditTips: "$301.22",
    giftTips: "$5.11",
    totalTips: "$328.38",
    totalHours: "130.25",
    averageTips: "$2.52",
  },
  {
    id: 4,
    date: "Sun,07/02",
    cashTips: "$22.05",
    creditTips: "$301.22",
    giftTips: "$5.11",
    totalTips: "$328.38",
    totalHours: "130.25",
    averageTips: "$2.52",
  },
  {
    id: 5,
    date: "Sun,07/02",
    cashTips: "$22.05",
    creditTips: "$301.22",
    giftTips: "$5.11",
    totalTips: "$328.38",
    totalHours: "130.25",
    averageTips: "$2.52",
  },
  {
    id: 6,
    date: "Sun,07/02",
    cashTips: "$22.05",
    creditTips: "$301.22",
    giftTips: "$5.11",
    totalTips: "$328.38",
    totalHours: "130.25",
    averageTips: "$2.52",
  },
  {
    id: 7,
    date: "Sun,07/02",
    cashTips: "$22.05",
    creditTips: "$301.22",
    giftTips: "$5.11",
    totalTips: "$328.38",
    totalHours: "130.25",
    averageTips: "$2.52",
  },
];
