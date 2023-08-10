import {
  Table,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,Menu,MenuItem
} from "@mui/material";
import '../src/assign.css';
import { Box } from "@mui/system";
import RadioButtonUncheckedSharpIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from "react";
export default function Assign() {
  const date = [
    { id: 1, day: "Mon", dates: "01/08" },
    { id: 2, day: "Tue", dates: "02/08" },
    { id: 3, day: "Wed", dates: "03/08" },
    { id: 4, day: "Thu", dates: "04/08" },
    { id: 5, day: "Fri", dates: "05/08" },
    { id: 6, day: "Sat", dates: "06/08" },
    { id: 7, day: "Sun", dates: "07/08" },
  ];

  const [employee, setEmployee] = useState([
    {
      id: 2,
      name: "Ajith",
      isAllSelect:false,

      empDates: [
        { date: "01/08", isAvailable: true, isChecked: false },
        { date: "02/08", isAvailable: false, isChecked: false },
        { date: "03/08", isAvailable: true, isChecked: false },
        { date: "04/08", isAvailable: false, isChecked: false },
        { date: "05/08", isAvailable: true, isChecked: false },
        { date: "06/08", isAvailable: true, isChecked: false },
        { date: "07/08", isAvailable: true, isChecked: false },
      ],
    },
    {
      id: 3,
      name: "Vijay",
      isAllSelect:false,

      empDates: [
        { date: "01/08", isAvailable: true, isChecked: false },
        { date: "02/08", isAvailable: false, isChecked: false },
        { date: "03/08", isAvailable: true, isChecked: false },
        { date: "04/08", isAvailable: true, isChecked: false },
        { date: "05/08", isAvailable: true, isChecked: false },
        { date: "06/08", isAvailable: true, isChecked: false },
        { date: "07/08", isAvailable: true, isChecked: false },
      ],
    },
    {
      id: 4,
      name: "David Warner",
      isAllSelect:false,

      empDates: [
        { date: "01/08", isAvailable: true, isChecked: false },
        { date: "02/08", isAvailable: true, isChecked: false },
        { date: "03/08", isAvailable: true, isChecked: false },
        { date: "04/08", isAvailable: true, isChecked: false },
        { date: "05/08", isAvailable: true, isChecked: false },
        { date: "06/08", isAvailable: true, isChecked: false },
        { date: "07/08", isAvailable: true, isChecked: false },
      ],
    },
    {
      id: 5,
      name: "Karthi",
      isAllSelect:false,

      empDates: [
        { date: "01/08", isAvailable: true, isChecked: false },
        { date: "02/08", isAvailable: true, isChecked: false },
        { date: "03/08", isAvailable: true, isChecked: false },
        { date: "04/08", isAvailable: true, isChecked: false },
        { date: "05/08", isAvailable: true, isChecked: false },
        { date: "06/08", isAvailable: false, isChecked: false },
        { date: "07/08", isAvailable: false, isChecked: false },
      ],
    },
    {
      id: 6,
      name: "Vikram",
      isAllSelect:false,
      empDates: [
        { date: "01/08", isAvailable: true, isChecked: false },
        { date: "02/08", isAvailable: false, isChecked: false },
        { date: "03/08", isAvailable: false, isChecked: false },
        { date: "04/08", isAvailable: true, isChecked: false },
        { date: "05/08", isAvailable: false, isChecked: false },
        { date: "06/08", isAvailable: false, isChecked: false },
        { date: "07/08", isAvailable: false, isChecked: false },
      ],
    },
  ]);


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function allSelect(personIndex:number){
    const selectedEmployee = employee[personIndex];
    selectedEmployee.isAllSelect = !selectedEmployee.isAllSelect ;
    !selectedEmployee.isAllSelect==true;
    selectedEmployee.empDates.map((value)=>{
      if(value.isAvailable) value.isChecked = !value.isChecked ;
      return value;
    })
    return selectedEmployee;

  }

  return (
    <Box width={"100vw"} height={"100vh"}>
      <Box
        sx={{ padding: 2, display: "flex", alignItems: "end", gap: 5, mx: 4 }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "end",
            gap: 0.5,
            fontSize: "12px",
          }}
        >
          <RadioButtonUncheckedSharpIcon
            sx={{ color: "#3880FF", fontSize: 20 }}
          />
          Available
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "end",
            gap: 0.5,
            fontSize: "12px",
          }}
        >
          <AccountCircleSharpIcon sx={{ color: "#3880FF", fontSize: 20 }} />
          Assigned
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "end",
            gap: 0.5,
            fontSize: "12px",
          }}
        >
          <HighlightOffSharpIcon sx={{ color: "#EC445A", fontSize: 20 }} />
          Unavailable
        </Typography>
      </Box>
      <Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", pl: "200px" }}>
            {date.map((dates) => {
              return (
                <Box sx={{ width: 70 }}>
                  <Typography>{dates.dates}</Typography>
                  <Typography sx={{}}>{dates.day}</Typography>
                  {/* <Typography>aaaaaaaaaaa</Typography> */}
                </Box>
              );
            })}
          </Box>
          <Box >
            {employee.map((person, personIndex) => {
              return (
                <Box sx={{ mt: 2,width:'100%', display: "flex" }}>
                  <Button 
                  key={personIndex}
                  onClick={()=>{
                    const selectedEmp = allSelect(personIndex);
                    employee[personIndex] = selectedEmp;
                    setEmployee([...employee])
                  }}
                  >
                    {person.isAllSelect? 
                    (
                      <AccountCircleSharpIcon/>        
                    ):<RadioButtonUncheckedSharpIcon
                    sx={{ color: "#3880FF", fontSize: 25 }}
                  />}
                    
                  </Button>
                  <Typography sx={{ width: '150px'}}>{person.name}</Typography>
                  {/* <RadioButtonUncheckedSharpIcon></RadioButtonUncheckedSharpIcon> */}
                  {person.empDates.map((data, index) => {
                    return (
                      <>
                        {/* <Box sx={{ display: "flex" }}> */}
                          <Button
                          className="button"
                          variant="text"
                            sx={{
                              width:'70px',
                              border:'none',
                              display: "flex",
                              justifyContent: "start",
                            }}
                            key={index}
                            onClick={() => {
                              // employee[personIndex].empDates = [...employee[personIndex].empDates]
                              employee[personIndex].empDates[index].isChecked =
                                !employee[personIndex].empDates[index]
                                  .isChecked;
                              setEmployee([...employee]);
                            }}
                          >
                            {data.isAvailable ? (
                              data.isChecked ? (
                                <>
                                <AccountCircleSharpIcon
                                  sx={{ color: "#3880FF", fontSize: 25 }}
                                >

                                </AccountCircleSharpIcon>
                                
                                <Typography id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                  <ArrowDropDownIcon 
                                className="dropdown"
                                
                                />
                                </Typography>
                                <Menu
                                     id="basic-menu"
                                     anchorEl={anchorEl}
                                     open={open}
                                     onClose={handleClose}
                                    //  MenuListProps={{
                                    //    'aria-labelledby': 'basic-button',
                                       
                                    //  }}
                                     anchorOrigin={{
                                      vertical: 'top',
                                      horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'left',
                                    }}
                                   >
                                     <MenuItem onClick={handleClose}>Profile</MenuItem>
                                     <MenuItem onClick={handleClose}>My account</MenuItem>
                                     <MenuItem onClick={handleClose}>Logout</MenuItem>
                                   </Menu>
                              </>
                              ) : (
                                <RadioButtonUncheckedSharpIcon
                                  sx={{ color: "#3880FF", fontSize: 25 }}
                                />
                              )
                            ) : (
                              <HighlightOffSharpIcon
                                sx={{ color: "#EC445A", fontSize: 25 }}
                              />
                            )}
                          </Button>
                        {/* </Box> */}
                      </>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
