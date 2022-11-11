import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from '../../Pages/Account/Login'
import Singup from '../../Pages/Account/Singup'
import { Homepage } from '../../Pages/HomePage/Homepage';
import SlideTask from '../../Pages/TMETRIC_Pages/SlideTask';
import SlideTime from '../../Pages/TMETRIC_Pages/SlideTime';
import SlideMyWork from '../../Pages/TMETRIC_Pages/SlideMyWork';
import SlideTeam from '../../Pages/TMETRIC_Pages/SlideTeam';
import SlideProject from '../../Pages/TMETRIC_Pages/SlideManage/SlideProject';
import SlideClient from '../../Pages/TMETRIC_Pages/SlideManage/SlideClient';
import NewSideClient from '../../Pages/TMETRIC_Pages/SlideManage/NewSideClient';
import SlideReports from '../../Pages/TMETRIC_Pages/SlideAnalyze/SlideReports';
import SlideSubscription from '../../Pages/TMETRIC_Pages/SlideWorkSpace/SlideSubscription';
import SlideMember from '../../Pages/TMETRIC_Pages/SlideWorkSpace/SlideMember';
import Price from '../../Pages/Price/Price';
import SlideInvoice from '../../Pages/TMETRIC_Pages/SlideManage/SlideInvoice';
import SideBar from '../SideBar';
import RequiredAuth from '../RequiredAuth/RequiredAuth';
import NewProject from '../../Pages/Projects/NewProject';
import PageNotfound from '../../Pages/PageNotfound';
import { PayForm } from '../SubscribtionProtected/PayFormBtn';
import SubscribtionLogic from '../SubscribtionProtected/SubscribtionLogic';
import SlideNewProject from '../../Pages/TMETRIC_Pages/Manage/SlideNewProject';





function MainRoutes() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Singup />} />



                <Route path='/' element={<Homepage />} />
                <Route path='/Price' element={<Price />} />
                <Route path='/payment' element={<PayForm />} />
                {/* <Route path='/team' element={<Team />} /> */}

                <Route path='sidebar' element={<RequiredAuth><SideBar /></RequiredAuth>} >

                    {/* Top routes */}
                    <Route path='time' element={<RequiredAuth><SlideTime /> </RequiredAuth>} />
                    <Route path='mywork' element={<RequiredAuth><SlideMyWork /> </RequiredAuth>} />
                    <Route path='team' element={<RequiredAuth><SlideTeam /> </RequiredAuth>} />
                    <Route path='task' element={<RequiredAuth><SlideTask /> </RequiredAuth>} />


                    {/* analyze roues */}

                    <Route path='reports' element={<RequiredAuth><SlideReports /></RequiredAuth>} />



                    {/* manage Routes */}

                    <Route path='project' element={<RequiredAuth><SlideProject /> </RequiredAuth>} />
                    <Route path='client' element={<RequiredAuth><SlideClient /> </RequiredAuth>} />
                    <Route path='client/new' element={<RequiredAuth><NewSideClient /></RequiredAuth>} />
                    <Route path='invoice' element={<SubscribtionLogic><SlideInvoice /></SubscribtionLogic>} />
                     <Route path='project' element={<SlideProject />} />
                    <Route path='project/new' element={<SlideNewProject/>}/>
                    <Route path='client' element={<SlideClient />} />
                    <Route path='client/new' element={<NewSideClient />} />
                    <Route path='invoice' element={<SlideInvoice />} />


                    {/* WorkSpace routes */}


                    <Route path='subscribtion' element={<RequiredAuth><SlideSubscription /></RequiredAuth>} />

                    <Route path='member' element={<RequiredAuth> <SlideMember />  </RequiredAuth>} />

                    <Route path='*' element={<PageNotfound />} />
                </Route>


                <Route path='*' element={<PageNotfound />} />

            </Routes>
        </>

    )
}

export default MainRoutes
