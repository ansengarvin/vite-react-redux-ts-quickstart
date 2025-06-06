import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const BOUNCE_MS = 750;

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

export const AppStyle = styled.div`
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
