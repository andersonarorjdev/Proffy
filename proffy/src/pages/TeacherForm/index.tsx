import React from 'react';
import Pageheader from '../../Components/Page-header';
import './styles.css';
import Input from '../../Components/Input';

function TeacherForm(){
    return(
        <div id="Page-teacher-form" className="container">
            <Pageheader title="Que incrivel que voce quer dar aulas!"
            description="O primeiro passo e preencher esse formulario de inscricao!"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="nome" label="Nome" />
                </fieldset>
            </main>
        </div>
    )
}

export default TeacherForm;