import React from 'react';
import Whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img className="Perfil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR4KpttJ06MO0rcNBdwIqo9lQth4KHqIHCSA&usqp=CAU" alt="Foto do professor"/>
            <div>
                <strong>Nome do Professor</strong>
                <span>Materia</span>
            </div>
        </header>

        <p>
        Professor ou docente é uma pessoa que ensina ciência, arte, técnica ou outros conhecimentos. Para o exercício dessa profissão, requer-se qualificações académicas e pedagógicas, para que consiga transmitir/ensinar da melhor forma possível ao aluno.
        </p>

        <footer>
            <p>
                Preco por hora
                <strong>R$90,00</strong>
            </p>
            <button>
                <img className="Whatsapp" src={Whatsapp} alt="entrar em contato"/>
                Entrar em Contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;