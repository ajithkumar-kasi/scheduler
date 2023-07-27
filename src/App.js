"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
require("./App.css");
var ri_time_line_svg_1 = require("../src/assets/ri_time-line.svg");
var eva_calendar_outline_svg_1 = require("../src/assets/eva_calendar-outline.svg");
var ph_user_duotone_svg_1 = require("../src/assets/ph_user-duotone.svg");
var chevron_left_svg_1 = require("../src/assets/chevron-left.svg");
var chevron_right_svg_1 = require("../src/assets/chevron-right.svg");
var material_symbols_add_svg_1 = require("../src/assets/material-symbols_add.svg");
var ph_swap_svg_1 = require("../src/assets/ph_swap.svg");
// import { Icon } from "@iconify/react";
var ArrowDropDownSharp_1 = require("@mui/icons-material/ArrowDropDownSharp");
var ErrorOutline_1 = require("@mui/icons-material/ErrorOutline");
var material_1 = require("@mui/material");
var dayjs_1 = require("dayjs");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var system_1 = require("@mui/system");
function App() {
    var _a = react_2.default.useState({
        startDate: (0, dayjs_1.default)().startOf("week").format("YYYY-MM-DD"),
        endDate: (0, dayjs_1.default)().endOf("week").format("YYYY-MM-DD")
    }), weekDate = _a[0], setWeekDate = _a[1];
    var _b = (0, react_1.useState)(false), isHovering = _b[0], setIsHovering = _b[1];
    var handleMouseOver = function (e) {
        setIsHovering(true);
        console.log("mouseover", e);
    };
    var handleMouseOut = function (e) {
        setIsHovering(false);
        console.log("mouseout", e);
    };
    var _c = (0, react_1.useState)(false), isOption = _c[0], setIsOption = _c[1];
    var handleFunction = function () {
        setIsOption(true);
    };
    var handleFunctionClose = function () {
        setIsOption(false);
    };
    var handleNextWeekChange = function (e) {
        var prevEndDate = weekDate.endDate;
        var startDate = (0, dayjs_1.default)(prevEndDate).add(1, "week").startOf("week").format("YYYY-MM-DD");
        var endDate = (0, dayjs_1.default)(prevEndDate).add(1, "week").endOf("week").format("YYYY-MM-DD");
        setWeekDate({ startDate: startDate, endDate: endDate });
    };
    var handlePrevWeekChange = function (e) {
        var prevEndDate = weekDate.endDate;
        var startDate = (0, dayjs_1.default)(prevEndDate).subtract(1, "week").startOf("week").format("YYYY-MM-DD");
        var endDate = (0, dayjs_1.default)(prevEndDate).subtract(1, "week").endOf("week").format("YYYY-MM-DD");
        setWeekDate({ startDate: startDate, endDate: endDate });
    };
    var generateDates = function (startDate, endDate) {
        var dates = [{}];
        var currDate = startDate;
        while ((0, dayjs_1.default)(currDate).isSame(endDate) || (0, dayjs_1.default)(currDate).isBefore(endDate)) {
            dates.push({ date: currDate, totalHrs: "24:00", shift: 5 });
            currDate = (0, dayjs_1.default)(currDate).add(1, "day").format("YYYY-MM-DD");
        }
        return dates;
    };
    var findEmpShiftDateForCell = function (dates, employeeDate) {
        console.log("dates :::", dates);
        var findEmpShift = dates.find(function (value) { return (0, dayjs_1.default)(value).isSame(employeeDate); });
        var findEmpShiftIndex = dates.findIndex(function (value) { return (0, dayjs_1.default)(value).isSame(employeeDate); });
        return { findEmpShift: !!findEmpShift, findEmpShiftIndex: findEmpShiftIndex };
    };
    var _d = react_2.default.useState(generateDates((0, dayjs_1.default)().startOf("week").format("YYYY-MM-DD"), (0, dayjs_1.default)().endOf("week").format("YYYY-MM-DD"))), dates = _d[0], setDates = _d[1];
    react_2.default.useEffect(function () {
        if (weekDate.startDate) {
            setDates(generateDates(weekDate.startDate, weekDate.endDate));
        }
    }, [weekDate]);
    var responseData = [
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().format("YYYY-MM-DD")]
        },
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().format("YYYY-MM-DD")]
        },
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().add(2, "day").format("YYYY-MM-DD")]
        },
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().add(3, "day").format("YYYY-MM-DD")]
        },
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().add(2, "day").format("YYYY-MM-DD")]
        },
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().add(1, "day").format("YYYY-MM-DD")]
        },
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().add(4, "day").format("YYYY-MM-DD")]
        },
        {
            name: "Steve smith",
            initial: "SS",
            totalHrs: "24:00",
            shift: "3",
            dates: [(0, dayjs_1.default)().add(4, "day").format("YYYY-MM-DD")]
        }
    ];
    var _e = react_2.default.useState(responseData), employees = _e[0], setEmployees = _e[1];
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
    var Calender = function (_a) {
        var dates = _a.dates, employees = _a.employees;
        console.log("employes ::", employees);
        var ViewByEmployees = function () {
            var DropDown = (0, system_1.styled)("div")({
                width: "max-content"
            });
            return ((0, jsx_runtime_1.jsx)(DropDown, { children: (0, jsx_runtime_1.jsxs)(material_1.Typography, { sx: {
                        display: "flex",
                        gap: 0.3,
                        alignItems: "center",
                        border: "1px solid #E2E3E5",
                        borderRadius: "15px",
                        p: 0.8
                    }, children: ["View by ", (0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 600, children: " employees" }), (0, jsx_runtime_1.jsx)(ArrowDropDownSharp_1.default, {})] }) }));
        };
        var EmployeeCard = function (_a) {
            var name = _a.name, initial = _a.initial, totalHrs = _a.totalHrs, shift = _a.shift;
            return ((0, jsx_runtime_1.jsx)(Div, { style: { display: "flex", flexDirection: "column" }, children: (0, jsx_runtime_1.jsx)(Div, { style: { display: "flex", width: "190px", height: "50px" }, children: (0, jsx_runtime_1.jsxs)(Div, { style: { display: "flex", alignItems: "center", m: "auto", gap: 2 }, children: [(0, jsx_runtime_1.jsx)(Div, { style: { color: "white", borderRadius: "64px", width: "40px", height: "40px", background: "black" }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { m: 1 }, children: initial }) }), (0, jsx_runtime_1.jsx)(Div, { children: (0, jsx_runtime_1.jsxs)(material_1.Typography, { children: [name, " ", (0, jsx_runtime_1.jsxs)(material_1.Typography, { sx: { display: "flex", gap: 1 }, children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "#253858", sx: {
                                                        gap: 0.5,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        fontWeight: "600"
                                                    }, children: [" ", (0, jsx_runtime_1.jsx)("img", { src: ri_time_line_svg_1.default, width: 18 }), totalHrs] }), " ", (0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "#5C5C5C", sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 0.5
                                                    }, children: [(0, jsx_runtime_1.jsx)("img", { src: eva_calendar_outline_svg_1.default, width: 18 }), shift] })] })] }) })] }) }) }));
        };
        var DateList = function (_a) {
            var date = _a.date, totalHrs = _a.totalHrs, shift = _a.shift;
            return ((0, jsx_runtime_1.jsxs)(Div, { style: { width: "190px", height: "55px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: (0, dayjs_1.default)(date).format("ddd MM/DD") }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { sx: {
                            display: "flex",
                            gap: 1
                        }, children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "#253858", sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "600",
                                    gap: 0.5
                                }, children: [" ", (0, jsx_runtime_1.jsx)("img", { src: ri_time_line_svg_1.default, width: 18 }), totalHrs] }), " ", (0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "#5C5C5C", sx: { display: "flex", gap: 0.5, alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)("img", { src: eva_calendar_outline_svg_1.default, width: 18 }), "3"] }), " ", (0, jsx_runtime_1.jsxs)(material_1.Typography, { sx: {
                                    display: "flex",
                                    gap: 0.5,
                                    alignItems: "normal"
                                }, children: [(0, jsx_runtime_1.jsx)("img", { src: ph_user_duotone_svg_1.default, width: 18 }), shift] })] })] }));
        };
        var ShiftCard = function () {
            return ((0, jsx_runtime_1.jsxs)(Div, { style: { border: "1px solid #FFD702", display: "flex", width: "100%", height: "100%", borderRadius: "5px" }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { sx: {
                            width: "5px",
                            background: "#FFD702",
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                            height: "100%"
                        } }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "#3D3D3D", fontWeight: "600", pl: 2, sx: {
                            borderTopRightRadius: "5px",
                            borderBottomRightRadius: "5px"
                        }, children: ["9.00a - 5.00p", " ", (0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 500, color: "#636363CC", children: "(8h)" })] })] }));
        };
        var handleDragEnd = function (result) {
            var source = result.source, destination = result.destination;
            if (destination) {
                var startPosition = JSON.parse(source.droppableId);
                var targetPosition = JSON.parse(destination.droppableId);
                var employeeList = Array.from(employees);
                var movedItem = employeeList[startPosition.col].dates.splice(startPosition.cardIndx, 1)[0];
                var reOrderItems = employeeList[targetPosition.col].dates.push(targetPosition.date);
                setEmployees(employeeList);
            }
        };
        return ((0, jsx_runtime_1.jsx)(Div, { style: {
                display: "flex",
                flexDirection: "column",
                // height:'90%',
                minWidth: "100%",
                width: "max-content"
            }, children: dates.map(function (datesValue, row) {
                return ((0, jsx_runtime_1.jsx)(Div, { style: {
                        display: "flex",
                        // minWidth:'100%',
                        borderTop: 0,
                        // width:'max-content',
                        border: "1px solid #D9D9D9",
                        height: "30%"
                    }, children: employees.map(function (empValue, col) {
                        var _a = findEmpShiftDateForCell(empValue.dates, datesValue.date), findEmpShift = _a.findEmpShift, findEmpShiftIndex = _a.findEmpShiftIndex;
                        var cardPosition = "{\"cardIndex\":".concat(findEmpShiftIndex, ",\"row\":").concat(row, ",\"col\":").concat(col, ",\"date\":\"").concat(datesValue.date, "\"}");
                        return ((0, jsx_runtime_1.jsxs)(Div, { style: __assign(__assign(__assign({
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #D9D9D9",
                                p: 0.8,
                                borderLeft: 0,
                                borderBottom: 0,
                                minWidth: 200,
                                width: "50%"
                            }, (row === 0 &&
                                col === 0 && {
                                borderTop: 0,
                                borderBottom: 0,
                                position: "sticky",
                                left: 0,
                                bgcolor: "white",
                                zIndex: 0
                            })), (row > 0 &&
                                col === 0 && {
                                borderTop: 0,
                                borderBottom: 0,
                                position: "sticky",
                                left: 0,
                                bgcolor: "white",
                                zIndex: 0
                            })), (row > 0 && col > 0 && { zIndex: -1, borderTop: 0 })), children: [row === 0 && col === 0 && (0, jsx_runtime_1.jsx)(ViewByEmployees, {}), row === 0 && col > 0 && (0, jsx_runtime_1.jsx)(EmployeeCard, __assign({}, empValue)), row > 0 && col === 0 && (0, jsx_runtime_1.jsx)(DateList, __assign({}, datesValue)), row > 0 && col > 0 && ((0, jsx_runtime_1.jsx)(Div, { style: { width: "100%" }, children: findEmpShift ? ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, { droppableId: "{\"cardIndx\":".concat(findEmpShiftIndex, ",\"row\":").concat(row, ",\"col\":").concat(col, ",\"date\":\"").concat(datesValue.date, "\"}"), children: function (provided) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "hello" }, provided.droppableProps, { ref: provided.innerRef, children: [(0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Draggable, { draggableId: cardPosition, index: findEmpShiftIndex, children: function (datas) { return ((0, jsx_runtime_1.jsx)("div", __assign({}, datas.draggableProps, datas.dragHandleProps, { ref: datas.innerRef, className: "flex", children: (0, jsx_runtime_1.jsx)(ShiftCard, {}) }))); } }, cardPosition), provided.placeholder] }))); } }, "{\"cardIndx\":".concat(findEmpShiftIndex, ",\"row\":").concat(row, ",\"col\":").concat(col, ",\"date\":\"").concat(datesValue.date, "\"}"))) : ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, { droppableId: "{\"cardIndx\":".concat(findEmpShiftIndex, ",\"row\":").concat(row, ",\"col\":").concat(col, ",\"date\":\"").concat(datesValue.date, "\"}"), children: function (provided) { return ((0, jsx_runtime_1.jsxs)("div", __assign({}, provided.droppableProps, { ref: provided.innerRef, children: [(0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Draggable, { draggableId: cardPosition, index: findEmpShiftIndex, children: function (datas) { return ((0, jsx_runtime_1.jsx)("div", __assign({}, datas.draggableProps, datas.dragHandleProps, { ref: datas.innerRef, children: (0, jsx_runtime_1.jsx)("span", { children: "hover" }) }))); } }, cardPosition), provided.placeholder] }))); } }, "{\"cardIndx\":".concat(findEmpShiftIndex, ",\"row\":").concat(row, ",\"col\":").concat(col, ",\"date\":\"").concat(datesValue.date, "\"}"))) }, "row:".concat(row, "-col:").concat(col, "-layers")))] }, "row-".concat(col)));
                    }) }, row));
            }) }));
    };
    var CalenderSection = (0, system_1.styled)("div")({
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        height: "80%",
        border: "1px solid #E2E3E5",
        borderRight: 0
    });
    var Div = (0, system_1.styled)("div")(function (_a) {
        var style = _a.style;
        return (__assign({}, style));
    });
    return ((0, jsx_runtime_1.jsx)(Div, { style: { display: "flex", "flex-direction": "column", hight: "100%" }, children: (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.DragDropContext, { children: (0, jsx_runtime_1.jsxs)(material_1.Stack, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            m: 2
                        }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    fontSize: "sm",
                                    gap: 1
                                }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { borderRadius: "15px", border: "1px solid grey", p: 0.5, sx: {
                                            display: "flex",
                                            flexDirection: "row",
                                            // width: "100%",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 1
                                        }, children: [(0, jsx_runtime_1.jsx)("img", { src: chevron_left_svg_1.default, width: 18, onClick: handlePrevWeekChange }), (0, jsx_runtime_1.jsx)(material_1.Typography, { children: "".concat((0, dayjs_1.default)(weekDate.startDate).format("MMM DD"), " - ").concat((0, dayjs_1.default)(weekDate.endDate).format("MMM DD YYYY")) }), (0, jsx_runtime_1.jsx)("img", { src: chevron_right_svg_1.default, width: 18, onClick: handleNextWeekChange })] }), (0, jsx_runtime_1.jsx)("img", { src: ph_swap_svg_1.default })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 2
                                }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { borderRadius: "100%", sx: {
                                            width: 40,
                                            height: 40,
                                            border: "1px solid #E2E3E5",
                                            boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                                        }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { m: 0.7, children: (0, jsx_runtime_1.jsx)(ErrorOutline_1.default, { sx: { color: "#EC445A", fontSize: 28 } }) }) }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "#3880FF", sx: {
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
                                        }, children: [" ", "Action", " ", (0, jsx_runtime_1.jsx)(ArrowDropDownSharp_1.default, { sx: { color: "#3880FF", fontSize: 25 } })] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { color: "white", sx: {
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
                                        }, children: "Publish (4)" }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { color: "white", sx: {
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
                                        }, children: [(0, jsx_runtime_1.jsx)("img", { src: material_symbols_add_svg_1.default, width: 25 }), " Add Shift"] })] })] }), (0, jsx_runtime_1.jsx)(CalenderSection, { children: (0, jsx_runtime_1.jsx)(Calender, { dates: dates, employees: employees }) })] }) }) }));
}
exports.default = App;
