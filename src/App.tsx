import {useState} from "react"
import React from "react"
import "./App.css"
import clockIcon from "../src/assets/ri_time-line.svg"
import calendarIcon from "../src/assets/eva_calendar-outline.svg"
import userIcon from "../src/assets/ph_user-duotone.svg"
import leftArrow from "../src/assets/chevron-left.svg"
import RightArrow from "../src/assets/chevron-right.svg"
import Addition from "../src/assets/material-symbols_add.svg"
import SwapIcon from "../src/assets/ph_swap.svg"
import hideIcon from "../src/assets/mdi_hide-outline.svg"
// import { Icon } from "@iconify/react";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import {Box, Typography, Icon, Popover, TextField, Stack} from "@mui/material"
import dayjs from "dayjs"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import ReactDraggable from "react-draggable"
import {styled} from "@mui/system"

interface IDateRange {
  startDate: string
  endDate: string
}
function App() {
  const [weekDate, setWeekDate] = React.useState<IDateRange>({
    startDate: dayjs().startOf("week").format("YYYY-MM-DD"),
    endDate: dayjs().endOf("week").format("YYYY-MM-DD")
  })

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = (e: any) => {
    setIsHovering(true)
    console.log("mouseover", e)
  }

  const handleMouseOut = (e: any) => {
    setIsHovering(false)
    console.log("mouseout", e)
  }
  const [isOption, setIsOption] = useState(false)
  const handleFunction = () => {
    setIsOption(true)
  }
  const handleFunctionClose = () => {
    setIsOption(false)
  }

  const handleNextWeekChange = (e: any) => {
    const {endDate: prevEndDate} = weekDate
    let startDate = dayjs(prevEndDate).add(1, "week").startOf("week").format("YYYY-MM-DD")
    let endDate = dayjs(prevEndDate).add(1, "week").endOf("week").format("YYYY-MM-DD")
    setWeekDate({startDate, endDate})
  }

  const handlePrevWeekChange = (e: any) => {
    const {endDate: prevEndDate} = weekDate
    let startDate = dayjs(prevEndDate).subtract(1, "week").startOf("week").format("YYYY-MM-DD")
    let endDate = dayjs(prevEndDate).subtract(1, "week").endOf("week").format("YYYY-MM-DD")
    setWeekDate({startDate, endDate})
  }

  const generateDates = (startDate: string, endDate: string) => {
    let dates = [{}]
    let currDate = startDate
    while (dayjs(currDate).isSame(endDate) || dayjs(currDate).isBefore(endDate)) {
      dates.push({date: currDate, totalHrs: "24:00", shift: 5})
      currDate = dayjs(currDate).add(1, "day").format("YYYY-MM-DD")
    }
    return dates
  }

  const findEmpShiftDateForCell = (dates: any, employeeDate: any) => {
    console.log("dates :::", dates)
    const findEmpShift = dates.find((value) => dayjs(value).isSame(employeeDate))
    const findEmpShiftIndex = dates.findIndex((value) => dayjs(value).isSame(employeeDate))
    return {findEmpShift: !!findEmpShift, findEmpShiftIndex}
  }

  const [dates, setDates] = React.useState<any>(generateDates(dayjs().startOf("week").format("YYYY-MM-DD"), dayjs().endOf("week").format("YYYY-MM-DD")))

  React.useEffect(() => {
    if (weekDate.startDate) {
      setDates(generateDates(weekDate.startDate, weekDate.endDate))
    }
  }, [weekDate])

  const responseData = [
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().format("YYYY-MM-DD")]
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().format("YYYY-MM-DD")]
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(2, "day").format("YYYY-MM-DD")]
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(3, "day").format("YYYY-MM-DD")]
    },

    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(2, "day").format("YYYY-MM-DD")]
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(1, "day").format("YYYY-MM-DD")]
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(4, "day").format("YYYY-MM-DD")]
    },
    {
      name: "Steve smith",
      initial: "SS",
      totalHrs: "24:00",
      shift: "3",
      dates: [dayjs().add(4, "day").format("YYYY-MM-DD")]
    }
  ]

  const [employees, setEmployees] = React.useState<any>(responseData)

  //   const Calender: React.FC<any> = ({Dates, Employees, align = "vertical"}) => {
  //     // const { dates , employees } = Dates
  //     let Table = {
  //       header: align === "vertical" ? Dates : Employees,
  //       sidebar: align === "vertical" ? Employees : Dates
  //     }
  //     const handleDragEnd = (result: any) => {
  //       const {source, destination} = result
  //       if (destination) {
  //         const startPosition = JSON.parse(source.droppableId)
  //         const targetPosition = JSON.parse(destination.droppableId)

  //         const employeeList = Array.from(employees)
  //         const [movedItem] = employeeList[startPosition.col].dates.splice(startPosition.cardIndx, 1)
  //         const reOrderItems = employeeList[targetPosition.col].dates.push(targetPosition.date)
  //         setEmployees(employeeList)
  //       }
  //     }

  //     }

  const Calender: React.FC<any> = ({dates, employees}) => {
    console.log("employes ::", employees)

    const ViewByEmployees: React.FC<any> = () => {
      const DropDown = styled("div")({
        width: "max-content"
      })
      return (
        <DropDown>
          <Typography
            sx={{
              display: "flex",
              gap: 0.3,
              alignItems: "center",
              border: "1px solid #E2E3E5",
              borderRadius: "15px",
              p: 0.8
            }}
          >
            View by <Typography fontWeight={600}> employees</Typography>
            <ArrowDropDownSharpIcon />
          </Typography>
        </DropDown>
      )
    }

    const EmployeeCard: React.FC<any> = ({name, initial, totalHrs, shift}) => {
      return (
        <Div style={{display: "flex", flexDirection: "column"}}>
          <Div style={{display: "flex", width: "190px", height: "50px"}}>
            <Div style={{display: "flex", alignItems: "center", m: "auto", gap: 2}}>
              <Div style={{color: "white", borderRadius: "64px", width: "40px", height: "40px", background: "black"}}>
                <Typography sx={{m: 1}}>{initial}</Typography>
              </Div>
              <Div>
                <Typography>
                  {name}{" "}
                  <Typography sx={{display: "flex", gap: 1}}>
                    <Typography
                      color={"#253858"}
                      sx={{
                        gap: 0.5,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "600"
                      }}
                    >
                      {" "}
                      <img src={clockIcon} width={18} />
                      {totalHrs}
                    </Typography>{" "}
                    <Typography
                      color={"#5C5C5C"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      }}
                    >
                      <img src={calendarIcon} width={18} />
                      {shift}
                    </Typography>
                  </Typography>
                </Typography>
              </Div>
            </Div>
          </Div>
        </Div>
      )
    }

    const DateList: React.FC<any> = ({date, totalHrs, shift}) => {
      return (
        <Div style={{width: "190px", height: "55px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Typography>{dayjs(date).format("ddd MM/DD")}</Typography>
          <Typography
            sx={{
              display: "flex",
              gap: 1
            }}
          >
            <Typography
              color={"#253858"}
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                gap: 0.5
              }}
            >
              {" "}
              <img src={clockIcon} width={18} />
              {totalHrs}
            </Typography>{" "}
            <Typography color={"#5C5C5C"} sx={{display: "flex", gap: 0.5, alignItems: "center"}}>
              <img src={calendarIcon} width={18} />3
            </Typography>{" "}
            <Typography
              sx={{
                display: "flex",
                gap: 0.5,
                alignItems: "normal"
              }}
            >
              <img src={userIcon} width={18} />
              {shift}
            </Typography>
          </Typography>
        </Div>
      )
    }

    const ShiftCard: React.FC<any> = () => {
      return (
        <Div style={{border: "1px solid #FFD702", display: "flex", width: "100%", height: "100%", borderRadius: "5px"}}>
          <Typography
            sx={{
              width: "5px",
              background: "#FFD702",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              height: "100%"
            }}
          ></Typography>
          <Typography
            color={"#3D3D3D"}
            fontWeight={"600"}
            pl={2}
            sx={{
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px"
            }}
          >
            9.00a - 5.00p{" "}
            <Typography fontWeight={500} color={"#636363CC"}>
              (8h)
            </Typography>
          </Typography>
        </Div>
      )
    }

    const handleDragEnd = (result: any) => {
      const {source, destination} = result
      if (destination) {
        const startPosition = JSON.parse(source.droppableId)
        const targetPosition = JSON.parse(destination.droppableId)

        const employeeList = Array.from(employees)
        const [movedItem] = employeeList[startPosition.col].dates.splice(startPosition.cardIndx, 1)
        const reOrderItems = employeeList[targetPosition.col].dates.push(targetPosition.date)
        setEmployees(employeeList)
      }
    }

    return (
      <Div style={{display: "flex", flexDirection: "column", minWidth: "100%", width: "max-content"}}>
        {dates.map((datesValue: any, row: number) => {
          return (
            <Div key={`date-row-${row}`} style={{display: "flex", borderTop: 0, border: "1px solid #D9D9D9", height: "30%"}}>
              {employees.map((empValue: any, col: number) => {
                const {findEmpShift, findEmpShiftIndex} = findEmpShiftDateForCell(empValue.dates, datesValue.date)

                const cardPosition = `{"cardIndex":${findEmpShiftIndex},"row":${row},"col":${col},"date":"${datesValue.date}"}`

                return (
                  //   <Droppable key={cardPosition} droppableId={cardPosition}>
                  //     {(provided) => (
                  <Div
                    // {...provided.droppableProps}
                    // ref={provided.innerRef}
                    key={`row-${row}-row-${col}-layer`}
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #D9D9D9",
                        p: 0.8,
                        borderLeft: 0,
                        borderBottom: 0,
                        minWidth: 200,
                        width: "50%"
                      }
                    }}
                  >
                    {row === 0 && col === 0 && <h1>view by emp</h1>}
                    {row === 0 && col > 0 && <h1>emp</h1>}
                    {row > 0 && col === 0 && <h1>dates</h1>}
                    {row > 0 && col > 0 && (
                      <Div>
                        <Droppable key={cardPosition} droppableId={cardPosition}>
                          {(provided) => (
                            <Div {...provided.droppableProps} ref={provided.innerRef} key={`row-${row}-row-${col}`}>
                              <Draggable key={cardPosition} draggableId={cardPosition} index={col}>
                                {(provided) => (
                                  <Div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                    <h1>shift</h1>
                                  </Div>
                                )}
                              </Draggable>
                              {provided.placeholder}
                            </Div>
                          )}
                        </Droppable>
                      </Div>
                    )}
                    {/* {provided.placeholder} */}
                  </Div>
                  //     )}
                  //   </Droppable>
                )
              })}
            </Div>
          )
        })}
      </Div>
    )
  }

  const CalenderSection = styled("div")({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    height: "80%",
    border: "1px solid #E2E3E5",
    borderRight: 0
  })

  const Div = styled("div")(({style}) => ({
    ...style
  }))

  const Row = ({handleClick, cardIndex}) => {
    return (
      <div onClick={handleClick} className="flex my-2 border  ">
        <h1>{cardIndex}</h1>
      </div>
    )
  }

  const [table, setTable] = React.useState<any>([1, 2, 3, 4, 5])

  const handleClickedCard = (card: any) => {
    console.log("handleClickedCard :::", card)
  }

  console.log("dates :::", dates)

  return (
    <Div style={{display: "flex", "flex-direction": "column", hight: "100%"}}>
      <Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 2
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "sm",
              gap: 1
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
                justifyContent: "center",
                gap: 1
              }}
            >
              <img src={leftArrow} width={18} onClick={handlePrevWeekChange} />
              <Typography>{`${dayjs(weekDate.startDate).format("MMM DD")} - ${dayjs(weekDate.endDate).format("MMM DD YYYY")}`}</Typography>
              <img src={RightArrow} width={18} onClick={handleNextWeekChange} />
            </Box>
            <img src={SwapIcon} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2
            }}
          >
            <Box
              borderRadius="100%"
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #E2E3E5",
                boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
              }}
            >
              <Typography m={0.7}>
                <ErrorOutlineIcon sx={{color: "#EC445A", fontSize: 28}} />
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
                boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
              }}
            >
              {" "}
              Action{" "}
              {/* <Icon
              icon="ant-design:caret-down-filled"
              color="#3880ff"
              width={20}
            /> */}
              <ArrowDropDownSharpIcon sx={{color: "#3880FF", fontSize: 25}} />
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
                boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
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
                boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
              }}
            >
              <img src={Addition} width={25} /> Add Shift
            </Typography>
          </Box>
        </Box>

        {/* <CalenderSection>
        <Calender dates={dates} employees={employees} />
      </CalenderSection> */}

        {/* calender section */}
        {dates.length && (
          <Div>
            <DragDropContext
              onDragEnd={(result: any) => {
                console.log("result", result)
              }}
            >
              <Div>
                <Calender dates={dates} employees={employees} />
              </Div>
            </DragDropContext>
          </Div>
        )}

        {/*test drag & drop */}
        {/* <Div>
          <DragDropContext
            onDragEnd={(result: any) => {
              console.log("result", result)
            }}
          >
            <Droppable droppableId="Today" type="PERSON">
              {(provided) => (
                <div className=" border border-red-600 px-2 flex flex-col shifts-1 list" {...provided.droppableProps} ref={provided.innerRef}>
                  {provided.placeholder}
                  {table.map((value: number, index: number) => {
                    return (
                      <Draggable type="Today" key={value} draggableId={value.toString()} index={index}>
                        {(provided) => (
                          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <Row cardIndex={value} handleClick={() => handleClickedCard({clickedCard: value})} />
                          </div>
                        )}
                      </Draggable>
                      //   <Row key={index} cardIndex={value} handleClick={() => handleClickedCard({clickedCard: value})} />
                    )
                  })}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Div> */}
      </Stack>
    </Div>
  )
}

export default App
