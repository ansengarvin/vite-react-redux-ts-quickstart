import vite from "../assets/vite.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../redux/store";
import { trackerDispatch } from "../redux/trackerSlice";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";

const BOUNCE_MS = 750; // Duration of the bounce animation in milliseconds

export function App() {
    const count = useSelector((state: RootState) => state.tracker.count);
    const dispatch = useAppDispatch();

    // Every time count is updated, set an animation to bounce the number
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
        }, BOUNCE_MS);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [count]);

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
            <h1>Vite, React, Redux, Emotion, Typscript</h1>
            <div className="card">
                <span>
                    <h2>Count is </h2>
                    <h2 className={`count ${animate ? "animate" : ""}`}>{count}</h2>
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

const bounceAnim = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -10px, 0);
  }

  70% {
    transform: translate3d(0, -5px, 0);
  }

  90% {
    transform: translate3d(0,-2px,0);
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
    h2.count {
        display: inline-block;
        color: #61dafb; // React blue
    }
    h2.animate {
        display: inline-block;
        animation: ${bounceAnim} ${BOUNCE_MS}ms;
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
