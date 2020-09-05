import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/14111673?s=460&u=e522a6fce2e6b5a403fc647f23437ec6052df1f5&v=4" alt="Luciana Nunes"/>
                <div>
                    <strong>Luciana Nunes</strong>
                    <span>Matéria</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                <br /> <br />
                Deleniti incidunt perferendis temporibus doloremque natus dignissimos magnam nesciunt consequuntur enim praesentium quasi, dolore aspernatur quas nemo eveniet blanditiis minus ipsam mollitia.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp Icon"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;