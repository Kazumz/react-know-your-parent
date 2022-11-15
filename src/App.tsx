import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHooks from './hooks/AppHooks';

function App() {
    const [ticks, setTicks] = React.useState<number>(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTicks(ticks => ticks + 1);
        }, 1000)

        return function dispose() {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="App">
            <AppHooks/>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <p>
                    Unstable Parent Re-Renders 
                    
                    <br />
                    
                    <strong>
                        {ticks}
                    </strong>
                </p>
            </header>
        </div>
    );
}

export default App;