import React, { useState, useEffect } from 'react';
import styles from "./Task.module.css";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

    Select,
} from '@chakra-ui/react';

import { SiHeadspace } from "react-icons/si"
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbAlarm } from "react-icons/tb";
import { AiFillTag } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { AiTwotonePlayCircle } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import FullTask from './FullTask';
import { useSelector } from 'react-redux';


const Task = ({ state, setState, taskD }) => {

    {  /* Store Client and project data  */ }

    const [clients, setClients] = useState([]);

    const [projects, setProjects] = useState([]);

    const token = useSelector((state) => state.auth.token)
    console.log(token)
    const taskChangeState = () => {
        setState(!state);
    }
    { /* const assigne = ['Ravi', "Shakti", "Akshay", "Aadil"];
const project = ["project1", "project2", "project3", "project4", "project5"];  */ }

    const [taskData, setTaskData] = useState({
        taskName: taskD,
        projectName: '',
        assigneName: '',
        dueDate: "",
        taskDescription: "",
        estimateTime: "",
        tag: ""
    })

    console.log(taskData,"task data")

    const addData = (e) => {
        setTaskData({ ...taskData, [e.target.name]: e.target.value })
    }

    const addData11 = async (e) => {
        if (e.key == "Enter") {
            const { taskName, projectName, assigneName, dueDate, taskDescription, estimateTime, tag } = taskData;
            console.log(taskData, "rushi");
            fetch('https://tmetric-41504.herokuapp.com/task', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    { taskName, projectName, assigneName, dueDate, taskDescription, estimateTime, tag }
                )

            })
                .then((res) => res.json())
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }
    }

    

    const getClientData = () => {
        fetch('https://tmetric-41504.herokuapp.com/clients', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setClients(res);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getClientData();
    }, []);
    console.log(clients);


    const getProjects = () => {
        fetch('http://localhost:8080/project', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res, "projectdata");
                setProjects(res);
            })
            .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        getProjects();
    }, []);
    console.log(projects);

    return (


        <div className={styles.top} onKeyPress={addData11}>
            {  /* Project Section  */}
            <div className={styles.taskProject}>

                {  /* ProjectLeft Section    */}
                <div className={styles.taskProjectLeft}>
                    <FullTask />
                </div>

                { /* ProjectRight Section */}
                <div className={styles.taskProjectRight}>
                    <div className={styles.taskUp}>
                        <div className={styles.taskUpLeft}>
                            <div><AiTwotonePlayCircle /></div>
                            <div className={styles.taskMarkComplete}>
                                <div><AiOutlineCheck /></div>
                                <div>Mark Complete</div>
                            </div>
                        </div>
                        <div className={styles.taskUpRight}>

                            <Menu>
                                <MenuButton >
                                    <FiMoreHorizontal />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem> <BsFillTrashFill className={styles.deleteicon} /> Delete</MenuItem>
                                </MenuList>
                            </Menu>

                            <div><button onClick={taskChangeState}><FiArrowRight /></button></div>
                        </div>
                    </div>



                    { /* Map Project Data */}
                    <form className={styles.form}>
                        <div className={styles.projectRightDiv} >
                            <input placeholder='Write Task Here' type='text' name='taskName' onChange={addData} /></div>
                        <div className={styles.projectRightDiv}>
                            <div><p>Project</p></div>
                            <div className={styles.projectRightDivBelow}>
                                <div><SiHeadspace className={styles.projectRightDivIcon} /></div>

                                <div>
                                    <Select onChange={addData} name="projectName">

                                        {
                                            projects?.map((val) => {
                                                return <option value={val.project} >{val.project}</option>
                                            })
                                        }

                                    </Select>
                                </div>

                            </div>
                        </div>


                        { /* Map Assign Data */}
                        <div className={styles.projectRightDiv}>
                            <div><p>Assigne</p></div>
                            <div className={styles.projectRightDivBelow}>
                                <div><BsFillPersonPlusFill className={styles.projectRightDivIcon} />

                                </div>
                                <div>
                                    <Select name='assigneName' onChange={addData}>

                                        {
                                            clients?.map((val) => {
                                                return <option value={val.client}>{val.client}</option>
                                            })
                                        }

                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projectRightDiv}>
                            <div>Due Date</div>
                            <div className={styles.projectRightDivBelow}>
                                <div><BsFillCalendarDateFill className={styles.projectRightDivIcon} />

                                </div>
                                <div><input type="date" placeholder='Choose Date' name='dueDate' onChange={addData} /></div>
                            </div>
                        </div>

                        <div className={styles.projectRightDiv}>
                            <input placeholder='Enter task description' name='taskDescription' onChange={addData} />
                        </div>

                        <div className={styles.projectRightDiv}>

                            <div>Estimate</div>
                            <div className={styles.projectRightDivBelow}>
                                <div><TbAlarm className={styles.projectRightDivIcon} /></div>
                                <div><input type='text' placeholder='' name='estimateTime' onChange={addData} /></div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.projectRightDivBelow}>
                                <div><AiFillTag className={styles.projectRightDivIcon} /></div>
                                <div >
                                    <select name='tag' onChange={addData}>
                                        <option value='Add-Tags'>Add-Tags</option>
                                        <option value='Design'>Design</option>
                                        <option value='Development'>Development</option>
                                        <option value='Testing'>Testing</option>
                                        <option value='Implementation'>Implementation</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        
                    </form>



                </div>



            </div>

        </div>

    )
}

export default Task
