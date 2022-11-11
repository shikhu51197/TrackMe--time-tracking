import React from 'react';
import styles from "./Task.module.css";
import { BiX } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { Button } from '@chakra-ui/react';
import { BiChevronDown } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import {FiPlus } from "react-icons/fi"


const TaskHeading = ({setState , state}) => {


    const changeState = () => {
        setState(!state);
    }

    return (
        <div className={styles.taskheadingtop}>
            {    /* heading  */}
            <div className={styles.taskHeading}>
                <h1>My Tasks</h1>
                <div className={styles.taskHeadingDiv}>
                    <div>Assigne Task</div>
                    <div><BiChevronDown className={styles.headingDivIcon} /></div>
                </div>
            </div>

            {  /* Filter Section */}
            <div className={styles.taskFilter}>
                <div className={styles.filterDiv}>
                    <select>
                        <option>
                            <div>Client:All</div>
                            <div><BiChevronDown className={styles.filterDivIcon} /></div>
                        </option>
                        <option>Raviranjan</option>
                        <option>Shakti</option>
                        <option>Akshay</option>
                        <option>Rushi</option>
                        <option>Aadil</option>
                    </select>
                </div>

                <div className={styles.filterDiv}>
                    <select>
                        <option>
                            <div>Project</div>
                            <div><BiChevronDown className={styles.filterDivIcon} /></div>
                        </option>
                        <option>Project1</option>
                        <option>Project2</option>
                        <option>Project3</option>
                        <option>Project4</option>
                        <option>Project5</option>
                    </select>
                </div>

                <div className={styles.filterDiv}>
                    <select>
                        <option>
                            <div>Tag:All</div>
                            <div><BiChevronDown className={styles.filterDivIcon} /></div>
                        </option>
                        <option>No work type</option>
                        <option>No tag</option>
                    </select>
                </div>

                <div className={styles.filterDiv}>
                    <select>
                        <option>
                            <div>Status:All</div>
                            <div><BiChevronDown className={styles.filterDivIcon} /></div>
                        </option>
                        <option>Status:Open</option>
                        <option>Status:Completed</option>
                    </select>
                </div>

                <div className={styles.filterDiv}>
                    <select>
                        <option>
                            <div>Creator:Any</div>
                            <div><BiChevronDown className={styles.filterDivIcon} /></div>
                        </option>
                        <option>Creator:Ravi</option>
                        <option>Creator:Akshay</option>
                        <option>Creator:Shakti</option>
                    </select>
                </div>


                <div className={styles.filterDiv}>
                    <select>
                        <option>
                            <div>Source:Internal</div>
                            <div><BiChevronDown className={styles.filterDivIcon} /></div>
                        </option>
                        <option>External</option>
                        <option>All</option>
                    </select>
                </div>

                <div className={styles.filterDiv}>
                    <div><BiX className={styles.filterDivIcon} /></div>
                    <div>Clear Filter</div>
                </div>
            </div>

            { /* New Task Section  */}
            <div className={styles.newTask}>
                <div className={styles.newTaskInside}>

                    <div className={styles.headerDiv}>
                    <div><BsPlusLg className={styles.filterDivIcon} /></div>
                        <div className={styles.taskDivButton}  onClick={changeState}>New Task</div>
                    </div>

                    <div className={styles.taskDiv}>
                        <select className={styles.taskDiv}>
                            <option>
                                <div>Sort: Project</div>
                                <div><FiPlus className={styles.filterDivIcon} /></div>
                            </option>
                            <option>Estimate</option>
                            <option>Due Date</option>
                            <option>Last Updated</option>
                            <option>Newer First</option>
                            <option>Older First</option>
                        </select>
                    </div>

                </div>
                <div className={styles.taskInput}>
                    <div>
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskHeading
