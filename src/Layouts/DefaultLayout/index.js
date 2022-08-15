import Sidebar from './Sidebar';
import Playlist from './Playlist';
import Header from './Header';
import MusicControl from './MusicControl';

function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                <Sidebar />
                <div>
                    <Header />
                    <div>{children}</div>
                </div>
                <Playlist />
            </div>
            <div>
                <MusicControl />
            </div>
        </div>
    );
}

export default DefaultLayout;
