import { useState } from "react";
import React from "react";
import "./App.css";
import clockIcon from '../src/assets/ri_time-line.svg';
import calendarIcon from '../src/assets/eva_calendar-outline.svg';
import userIcon from '../src/assets/ph_user-duotone.svg';
import leftArrow from '../src/assets/chevron-left.svg';
import RightArrow from '../src/assets/chevron-right.svg';
import Addition from'../src/assets/material-symbols_add.svg';
import SwapIcon from '../src/assets/ph_swap.svg';
import hideIcon from '../src/assets/mdi_hide-outline.svg'
// import { Icon } from "@iconify/react";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box,
  Typography,
 Icon,
  Popover,
  TextField,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";
import Draggable from "react-draggable";

interface IDateRange {
  startDate: string;
  endDate: string;
}
function App() {
  const [weekDate, setWeekDate] = React.useState<IDateRange>({
    startDate: dayjs().startOf("week").format("YYYY-MM-DD"),
    endDate: dayjs().endOf("week").format("YYYY-MM-DD"),
  });

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (e: any) => {
    setIsHovering(true);
    console.log("mouseover", e);
  };

  const handleMouseOut = (e: any) => {
    setIsHovering(false);
    console.log("mouseout", e);
  };
  const [isOption, setIsOption] = useState(false);
  const handleFunction = () => {
    setIsOption(true);
  };
  const handleFunctionClose = () => {
    setIsOption(false);
  };

  const handleNextWeekChange = (e: any) => {
    const { endDate: prevEndDate } = weekDate;
    let startDate = dayjs(prevEndDate)
      .add(1, "week")
      .startOf("week")
      .format("YYYY-MM-DD");
    let endDate = dayjs(prevEndDate)
      .add(1, "week")
      .endOf("week")
      .format("YYYY-MM-DD");
    setWeekDate({ startDate, endDate });
  };

  const handlePrevWeekChange = (e: any) => {
    const { endDate: prevEndDate } = weekDate;
    let startDate = dayjs(prevEndDate)
      .subtract(1, "week")
      .startOf("week")
      .format("YYYY-MM-DD");
    let endDate = dayjs(prevEndDate)
      .subtract(1, "week")
      .endOf("week")
      .format("YYYY-MM-DD");
    setWeekDate({ startDate, endDate });
  };

  const generateDates = (startDate: string, endDate: string) => {
    let dates = [{}];
    let currDate = startDate;
    while (
      dayjs(currDate).isSame(endDate) ||
      dayjs(currDate).isBefore(endDate)
    ) {
      dates.push({ date: currDate, totalHrs: "24:00", shift: 5 });
      currDate = dayjs(currDate).add(1, "day").format("YYYY-MM-DD");
    }
    return dates;
  };

  const [dates, setDates] = React.useState<any>(
    generateDates(
      dayjs().startOf("week").format("YYYY-MM-DD"),
      dayjs().endOf("week").format("YYYY-MM-DD")
    )
  );

  console.log("dates :::", dates);
  React.useEffect(() => {
    if (weekDate.startDate) {
      setDates(generateDates(weekDate.startDate, weekDate.endDate));
    }
  }, [weekDate]);

  const employees = [
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().format("YYYY-MM-DD")],
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().format("YYYY-MM-DD")],
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(2, "day").format("YYYY-MM-DD")],
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(3, "day").format("YYYY-MM-DD")],
    },

    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(2, "day").format("YYYY-MM-DD")],
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(1, "day").format("YYYY-MM-DD")],
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(4, "day").format("YYYY-MM-DD")],
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(4, "day").format("YYYY-MM-DD")],
    },
  ];

  const Calender: React.FC<any> = ({
    Dates,
    Employees,
    align = "vertical",
  }) => {
    // const { dates , employees } = Dates
    let Table = {
      header: align === "vertical" ? Dates : Employees,
      sidebar: align === "vertical" ? Employees : Dates,
    };

    const ViewByEmployees: React.FC = () => (
      <Box
        sx={{
          width: "max-content",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            gap: 0.3,
            alignItems: "center",
            border: "1px solid #E2E3E5",
            borderRadius: "15px",
            p: 0.8,
          }}
        >
          View by <Typography fontWeight={600}> employees</Typography>
          <ArrowDropDownSharpIcon/>
        </Typography>
      </Box>
    );
    const EmployeeCard: React.FC<any> = ({
      name,
      initial,
      totalHrs,
      shift,
    }) => {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", width: "190px", height: "50px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                m: "auto",
                gap: 2,
              }}
            >
              <Box
                color={"white"}
                borderRadius={"64px"}
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "black",
                }}
              >
                <Typography sx={{ m: 1 }}>{initial}</Typography>
              </Box>
              <Box>
                <Typography>
                  {name}{" "}
                  <Typography sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      color={"#253858"}
                      sx={{
                        gap: 0.5,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      <img src={clockIcon} width={18}/>
                      {totalHrs}
                    </Typography>{" "}
                    <Typography
                      color={"#5C5C5C"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <img src={calendarIcon} width={18}/>
                      {shift}
                    </Typography>
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      );
    };

    const DateList: React.FC<any> = ({ date, totalHrs, shift }) => {
      return (
        <Box
          sx={{
            width: "190px",
            height: "55px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{dayjs(date).format("ddd MM/DD")}</Typography>
          <Typography
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Typography
              color={"#253858"}
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                gap: 0.5,
              }}
            >
              {" "}
              <img src={clockIcon} width={18}/>
              {totalHrs}
            </Typography>{" "}
            <Typography
              color={"#5C5C5C"}
              sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
            >
        <img src={calendarIcon} width={18}/>

            3
            </Typography>{" "}
            <Typography
              sx={{
                display: "flex",
                gap: 0.5,
                alignItems:'normal'
              }}
            >
              <img src={userIcon} width={18}/>
              {shift}
            </Typography>
          </Typography>
        </Box>
      );
    };
    const ShiftCard: React.FC<any> = ({ employeeDate, datesDate }) => {
      return (
        <>
          {
            employeeDate === datesDate ? (
              <Box
                sx={{
                  border: "1px solid #FFD702",
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    width: "5px",
                    background: "#FFD702",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    height: "100%",
                  }}
                ></Typography>
                <Typography
                  color={"#3D3D3D"}
                  fontWeight={"600"}
                  pl={2}
                  sx={{
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  9.00a - 5.00p{" "}
                  <Typography fontWeight={500} color={"#636363CC"}>
                    (8h)
                  </Typography>
                </Typography>
              </Box>
            ) : null
            // (
            //   <Box className>
            //   <Icon icon="ci:list-add" color="#007dff" width={30} className='icon'/>
            //   </Box>

            // )
          }
        </>
      );
    };

    console.log("dates", dates);
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // height:'90%',
          minWidth: "100%",
          width: "max-content",
        }}
      >
        {Dates.map((datesValue: any, row: number) => {
          return (
            <Box
              key={row}
              sx={{
                display: "flex",
                // minWidth:'100%',
                borderTop: 0,
                // width:'max-content',
                border: "1px solid #D9D9D9",
                height: "30%",
              }}
            >
              {employees.map((empValue: any, col: number) => {
                return (
                  <Box
                    key={col}
                    sx={{
                      ...{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #D9D9D9",
                        p: 0.8,
                        borderLeft: 0,
                        borderBottom: 0,
                        minWidth: 200,
                        width: "50%",
                      },
                      ...(row === 0 &&
                        col === 0 && {
                          borderTop: 0,
                          borderBottom: 0,
                          position: "sticky",
                          left: 0,
                          bgcolor: "white",
                          zIndex: 0,
                        }),
                      ...(row > 0 &&
                        col === 0 && {
                          borderTop: 0,
                          borderBottom: 0,
                          position: "sticky",
                          left: 0,
                          bgcolor: "white",
                          zIndex: 0,
                        }),
                      ...(row > 0 && col > 0 && { zIndex: -1, borderTop: 0 }),
                    }}
                  >
                    {row === 0 && col === 0 && <ViewByEmployees />}
                    {row === 0 && col > 0 && <EmployeeCard {...empValue} />}
                    {row > 0 && col === 0 && <DateList {...datesValue} />}
                    {row > 0 && col > 0 && (
                      <>
                        {empValue.dates.map(
                          (employeeDate: string, index: number) => {
                            return (
                              <ShiftCard
                                key={index}
                                employeeDate={dayjs(employeeDate).format(
                                  "YYYY-MM-DD"
                                )}
                                datesDate={dayjs(datesValue.date).format(
                                  "YYYY-MM-DD"
                                )}
                              />
                            );
                          }
                        )}
                      </>
                    )}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    );
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "sm",
            gap: 1,
          }}
        >
          <Box
            borderRadius="15px"
            border="1px solid grey"
            p={0.5}
            sx={{
              display: "flex",
              flexDirection: "row",
              // width: "100%",
              alignItems: "center",
              justifyContent:'center',
              gap:1
            }}
          >
                      <img src={leftArrow} width={18} onClick={handlePrevWeekChange}/>
            <Typography>{`${dayjs(weekDate.startDate).format(
              "MMM DD"
            )} - ${dayjs(weekDate.endDate).format("MMM DD YYYY")}`}</Typography>
          <img src={RightArrow} width={18} onClick={handleNextWeekChange}/>

          </Box>
          <img src={SwapIcon}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            borderRadius="100%"
            sx={{
              width: 40,
              height: 40,
              border: "1px solid #E2E3E5",
              boxShadow:
                "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Typography m={0.7}>
              <ErrorOutlineIcon sx={{color:'#EC445A',fontSize:28}}/>
            </Typography>
          </Box>
          <Typography
            color={"#3880FF"}
            sx={{
              border: "1px solid #E2E3E5",
              display: "flex",
              paddingX: 3,
              paddingY: 1,
              letterSpacing: "0.6px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "64px",
              fontWeight: "600",
              boxShadow:
                "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            {" "}
            Action{" "}
            {/* <Icon
              icon="ant-design:caret-down-filled"
              color="#3880ff"
              width={20}
            /> */}
            <ArrowDropDownSharpIcon sx={{color:'#3880FF',fontSize:25}}/>
          </Typography>
          <Typography
            color={"white"}
            sx={{
              border: "1px solid transparent",
              background: "#3880FF",
              display: "flex",
              letterSpacing: "0.6px",
              paddingX: 2.5,
              paddingY: 1,
              gap: 0.5,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "64px",
              fontWeight: "600",
              boxShadow:
                "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            Publish (4)
          </Typography>
          <Typography
            color={"white"}
            sx={{
              border: "1px solid transparent",
              background: "#3880FF",
              display: "flex",
              letterSpacing: "0.6px",
              paddingX: 2.5,
              paddingY: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "64px",
              fontWeight: "600",
              boxShadow:
                "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            <img src={Addition} width={25} />
            {" "}
            Add Shift
          </Typography>
        </Box>
      </Box>

      <Box
        // className="flex flex-col overflow-auto calender-section h-full "
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          height: "80%",
          border: "1px solid #E2E3E5",
          borderRight: 0,
        }}
      >
        <Calender Dates={dates} Employees={employees} />

        <Box
          className="fixed right-10 bottom-4 "
          sx={{
            position: "fixed",
            right: 30,
            bottom: 30,
            display: "flex",
            gap: 5,
          }}
        >
          <Typography
            aria-describedby={id}
            sx={{
              border: "1px solid transparent",
              background: "#3880FF",
              display: "flex",
              paddingX: 2.5,
              paddingY: 1,
              color: "white",
              letterSpacing: "0.6px",
              gap: 0.5,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "64px",
              fontWeight: "600",
              boxShadow:
                "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
            onClick={handleClick}
          >
            Show Metrics
          </Typography>

          {open && (
            <Draggable>
              <Popover
                // sx={{minWidth:'900px',height:'500px'}}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Stack sx={{ px: 2 }}>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "30px",
                        justifyContent: "space-around",
                        id: "show",
                      }}
                    >
                      (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          pt: 3,
                        }}
                      >
                        <TextField
                          sx={{
                            width: 60,
                            borderColorolor: "#E7E7E7",
                            fontSize: "30px",
                            color: "red",
                          }}
                          variant="standard"
                        />
                        <Typography sx={{ fontSize: "12px", color: "#9E9E9E" }}>
                          Total Hours
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "20px" }}>X</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          pt: 3,
                        }}
                      >
                        <TextField
                          sx={{
                            width: 60,
                            borderColorolor: "#E7E7E7",
                            fontSize: "30px",
                          }}
                          variant="standard"
                        />
                        <Typography sx={{ fontSize: "12px", color: "#9E9E9E" }}>
                          Avg.Wage
                        </Typography>
                      </Box>{" "}
                      )
                      <Typography sx={{ fontSize: "35px", }}>
                        {/* <Icon icon="mdi:division" /> */}
                        ÷
                      </Typography>
                      ($
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          pt: 3,
                        }}
                      >
                        <TextField
                          sx={{
                            width: 60,
                            borderColorolor: "#E7E7E7",
                            fontSize: "30px",
                          }}
                          variant="standard"
                        />
                        <Typography sx={{ fontSize: "12px", color: "#9E9E9E" }}>
                          Sales
                        </Typography>
                      </Box>{" "}
                      )
                      =
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          pt: 3,
                        }}
                      >
                        <TextField
                          sx={{
                            width: 60,
                            borderColorolor: "#E7E7E7",
                            fontSize: "30px",
                          }}
                          variant="standard"
                        />
                        <Typography sx={{ fontSize: "12px", color: "#9E9E9E" }}>
                          Anticipated Labor
                        </Typography>
                      </Box>
                    </Typography>
                  </Stack>
                  <Typography sx={{ position: "absolute", right: 10, top: 5 }}>
                    
                    <img src={hideIcon} onClick={handleClose}/>
                  </Typography>
                </Box>
              </Popover>
            </Draggable>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
