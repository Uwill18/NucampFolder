import { Container,Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import CampsitesList from '../features/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <Row>
            <SubHeader current={'Directory'}/>
            <CampsitesList />
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;