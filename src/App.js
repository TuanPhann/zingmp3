import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import DefaultLayout from './Layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        let Layout = DefaultLayout;

                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
