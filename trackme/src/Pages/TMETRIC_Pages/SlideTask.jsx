import { Box, Flex } from '@chakra-ui/react';
import React, { useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';


import FullTask from '../Task/FullTask';
import Task from '../Task/Task';

import TaskHeading from '../Task/TaskHeading';

function SlideTask() {
    const sideSize = useSelector((state) => state.auth.sideSize);
    const [state, setState] = useState(true);
    const [taskD, setTaskD] = useState('');
    const token = useSelector((state) => state.auth.token)



    


    console.log(sideSize, "in Timer")

    return (
        <Flex>


            <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}
                 w='100%' mr='50px' mt='20px' h='auto'>




                <TaskHeading setState={setState} state={state} />
                {
                    state ? <FullTask setState={setState} state={state} setTaskD={setTaskD} /> : <Task taskD={taskD} setState={setState} state={state} />
                }

                <Outlet />
            </Box>

        </Flex>
    )
}

export default SlideTask