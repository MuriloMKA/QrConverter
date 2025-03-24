import Container from 'react-bootstrap/Container';
import PageHeader from '../PageHeader/pageHeader';
import QRgenerator from '../../pages/pag1'
import Converter from '../../pages/pag2'

function AppContainer() {
    return (
        <Container fluid className='p-0'>
            <PageHeader />
            <QRgenerator />
            <Converter />
        </Container>
    );
}

export default AppContainer;