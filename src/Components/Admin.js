import React, { Component, useState } from "react";
import { Router, Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Admin = () => {
    const id = React.useId();
    return (
        <div className="admin-panel">
            <span>Admin Panel</span>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel1-content`}
                    id={`${id}-panel1-header`}
                >
                    <Typography component="span">Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to='./Admin/AddProject'>Add a Project</Link><br />
                    <Link to='./Admin/EditProject'>Edit a Project</Link>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel1-content`}
                    id={`${id}-panel1-header`}
                >
                    <Typography component="span">References</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to='./Admin/AddReference'>Add a Reference</Link><br />
                    <Link to='./Admin/EditReference'>Edit or Delete a Reference</Link>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${id}-panel1-content`}
                    id={`${id}-panel1-header`}
                >
                    <Typography component="span">Users</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to='./Admin/AddUser'>Add a Users</Link><br />
                    <Link to='./Admin/EditUser'>Edit or Delete a User</Link>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Admin;