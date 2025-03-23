import Container from 'react-bootstrap/Container';
import PageHeader from '../PageHeader/pageHeader';
import QRgenerator from '../../pages/pag1'
import Converter from '../../pages/pag2'
import './AppContainer.css';

function AppContainer() {
    return (
        <Container fluid>   
            <PageHeader />  
                      <QRgenerator />    
               <Converter />                
        </Container>
    );
}

export default AppContainer;