import React, {useState , useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { SiHeadspace } from "react-icons/si";
import styles from "./FullTask.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCaretRight } from "react-icons/bs";
import { useSelector } from 'react-redux';





const FullTask = ({ setTaskD }) => {

  const [taskss, setTaskss] = useState([]);
  const token = useSelector((state) => state.auth.token)

 
 const pro = ["p1", "p2", "p3", "p4", "p5"]; 

  const [projects, setProjects] = useState([]);


  

    const getTasks = () => {
      fetch('https://tmetric-41504.herokuapp.com/task', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setTaskss(res);
        })
        .catch((err) => console.log(err))
    }
  

  useEffect(() => {
    getTasks();
  },[])
  console.log(taskss);


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


    <div className={styles.fulltaskDiv}>
      <div>Project Name</div>
      <div>
        <Accordion className={styles.accordonDiv}>
          {
            projects?.map((val) => {
              return <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <AccordionIcon />
                    <div><SiHeadspace className={styles.fulltaskIcon} /></div>
                    <Box flex='1' textAlign='left'>
                      {val.project}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                  {
                    taskss?.map((val, index) => (
                      <div className={styles.fulltaskAccordondiv}>
                        <div className={styles.fulltaskAccordonpanel}>
                          <div><BsCheckCircle className={styles.fulltaskicon} /></div>
                          <div >{val.taskName}</div>
                        </div>
                        <div className={styles.fulltaskAccordonpanel}>
                          <div><BsFillPersonPlusFill className={styles.fulltaskicon} /></div>
                          <div ><BsCaretRight className={styles.fulltaskicon} /></div>
                        </div>
                      </div>
                    ))
                  }
                </AccordionPanel>
              </AccordionItem>
            })
          }
          <div className={styles.accordonBottomDiv}>
            <input type='text' placeholder='You can add anything'
              onChange={(e) => setTaskD(e.target.value)} />
          </div>
        </Accordion>

      </div>
    </div>
  )
}

export default FullTask;
