import Contacts from '../../Components/Contacts';
import Card from '../../Components/Card';
import styles from './Banda.module.css';

export default function Banda() {
    return (
        <div className={styles.container}>
            <Card style={{marginTop: '10rem'}}>
                <h1>Side Rock</h1>
                <p>Conteúdo da banda aqui...</p>
            </Card>
            <Contacts />
        </div>
    );
} 