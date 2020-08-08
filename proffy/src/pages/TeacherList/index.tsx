import React from 'react';
import './styles.css';
import Pageheader from '../../Components/Page-header/index';
import TeacherItem from '../../Components/Teacher-item';
import Input from '../../Components/Input';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <Pageheader title="Estes sao os profis disponiveis">
                <form action="" id="search-teachers">
                    <Input name="subject" label="Materia"/>
                    <Input name="week_day" label="Dia da semana"/>
                    <Input name="time" label="Hora"/>
                </form>
            </Pageheader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;