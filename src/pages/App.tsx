import vite from "../assets/vite.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../redux/store";
import { trackerDispatch } from "../redux/trackerSlice";
import { keyframes } from "@emotion/react";

export function App() {
    const count = useSelector((state: RootState) => state.tracker.count);
    const dispatch = useAppDispatch();
    return (
        <AppStyle>
            <div className="logos">
                <a href="https://vite.dev/">
                    <img src={vite} alt="Vite logo" />
                </a>
                <a href="https://react.dev/">
                    <img src={react} alt="React logo" />
                </a>
                <a href="https://redux-toolkit.js.org/">
                    <img src={redux} alt="Redux Toolkit logo" />
                </a>
            </div>
            <h1>Vite, React, Redux, Emotion, TS</h1>
            <div className="card">
                <span>
                    <h2>Count is </h2>
                    <h2>{count}</h2>
                </span>
                <div className="buttons">
                    <button onClick={() => dispatch(trackerDispatch.decrement())}>Decrement</button>

                    <button onClick={() => dispatch(trackerDispatch.clear())}>Clear</button>
                    <button onClick={() => dispatch(trackerDispatch.increment())}>Increment</button>
                </div>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR (Hot Module Replacement) functionality.
            </p>
            <p className="read-the-docs">Click on the Vite, React, or Redux logos to learn more.</p>
        </AppStyle>
    );
}

const colorFade = keyframes`
    from {
        background-color: #282c34;
    }
    to {
        background-color: white;
    }
`;

const AppStyle = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        display: inline;
    }
    div.logos,
    div.buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    div.card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        background-color: #282c34;
        width: 320px;
        height: min-content;
        color: white;
        padding: 20px;

        border-radius: 10px;
    }
    img {
        width: 50px;
        height: 50px;
    }
    button {
        // Remove all styling
        all: unset;

        // Add my own styling
        border: 2px solid white;
        padding: 10px;
        transition:
            background-color 0.25s ease-in-out,
            color 0.25s ease-in-out,
            border 0.25s ease-in-out;
    }

    button:hover {
        cursor: pointer;
        background-color: white;
        color: #282c34;
    }
`;
